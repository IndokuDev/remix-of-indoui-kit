import React, { useState, useRef, useEffect, useCallback } from 'react';
import { SizeKey } from '../theme/tokens';

export interface ColorPickerProps {
  value?: string;
  defaultValue?: string;
  onChange?: (color: string) => void;
  size?: SizeKey;
  disabled?: boolean;
  showInput?: boolean;
  presetColors?: string[];
  className?: string;
}

const defaultPresets = [
  '#ef4444', '#f97316', '#eab308', '#22c55e', '#14b8a6',
  '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899', '#6b7280',
  '#000000', '#ffffff',
];

const hslToHex = (h: number, s: number, l: number): string => {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

const hexToHsl = (hex: string): { h: number; s: number; l: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return { h: 0, s: 100, l: 50 };
  
  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;
  
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
};

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value,
  defaultValue = '#3b82f6',
  onChange,
  size = 'md',
  disabled = false,
  showInput = true,
  presetColors = defaultPresets,
  className,
}) => {
  const [color, setColor] = useState(value || defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [hsl, setHsl] = useState(() => hexToHsl(value || defaultValue));
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const hueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value !== undefined) {
      setColor(value);
      setHsl(hexToHsl(value));
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    setHsl(hexToHsl(newColor));
    onChange?.(newColor);
  };

  const handleGradientClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!gradientRef.current) return;
    const rect = gradientRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    
    const s = Math.round(x * 100);
    const l = Math.round((1 - y) * 50 + (1 - x) * 50 * (1 - y));
    
    const newHsl = { ...hsl, s, l };
    setHsl(newHsl);
    const newColor = hslToHex(newHsl.h, newHsl.s, newHsl.l);
    setColor(newColor);
    onChange?.(newColor);
  }, [hsl, onChange]);

  const handleHueClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!hueRef.current) return;
    const rect = hueRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const h = Math.round(x * 360);
    
    const newHsl = { ...hsl, h };
    setHsl(newHsl);
    const newColor = hslToHex(newHsl.h, newHsl.s, newHsl.l);
    setColor(newColor);
    onChange?.(newColor);
  }, [hsl, onChange]);

  return (
    <div ref={containerRef} className={`indo-color-picker indo-color-picker-${size} ${className || ''}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className="indo-color-picker-trigger"
        style={{ backgroundColor: color }}
      />

      {isOpen && (
        <>
          <div className="indo-color-picker-backdrop" onClick={() => setIsOpen(false)} />
          <div className="indo-color-picker-popup">
            <div
              ref={gradientRef}
              className="indo-color-picker-gradient"
              onClick={handleGradientClick}
              style={{
                background: `linear-gradient(to bottom, transparent, black), linear-gradient(to right, white, hsl(${hsl.h}, 100%, 50%))`,
              }}
            >
              <div
                className="indo-color-picker-indicator"
                style={{
                  left: `${hsl.s}%`,
                  top: `${100 - hsl.l}%`,
                  backgroundColor: color,
                }}
              />
            </div>

            <div
              ref={hueRef}
              className="indo-color-picker-hue"
              onClick={handleHueClick}
            >
              <div
                className="indo-color-picker-hue-indicator"
                style={{
                  left: `${(hsl.h / 360) * 100}%`,
                  backgroundColor: `hsl(${hsl.h}, 100%, 50%)`,
                }}
              />
            </div>

            <div className="indo-color-picker-preview">
              <div className="indo-color-picker-swatch" style={{ backgroundColor: color }} />
              <div className="indo-color-picker-value">
                <div className="indo-color-picker-label">Selected Color</div>
                <div className="indo-color-picker-hex">{color.toUpperCase()}</div>
              </div>
            </div>

            <div className="indo-color-picker-presets">
              {presetColors.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => handleColorChange(preset)}
                  className={`indo-color-picker-preset ${color.toLowerCase() === preset.toLowerCase() ? 'indo-color-picker-preset-active' : ''}`}
                  style={{ backgroundColor: preset }}
                />
              ))}
            </div>

            {showInput && (
              <input
                type="text"
                value={color}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
                    handleColorChange(val);
                  } else if (/^#[0-9A-Fa-f]{0,6}$/.test(val)) {
                    setColor(val);
                  }
                }}
                onBlur={() => {
                  if (!/^#[0-9A-Fa-f]{6}$/.test(color)) {
                    setColor(value || defaultValue);
                  }
                }}
                className="indo-color-picker-input"
                placeholder="#000000"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

ColorPicker.displayName = 'ColorPicker';
