import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

// Floating Color Picker
export interface FloatingColorPickerProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (color: string) => void;
  swatches?: string[];
  placeholder?: string;
  isDisabled?: boolean;
}

const defaultSwatches = [
  '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16',
  '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9',
  '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef',
  '#ec4899', '#f43f5e', '#64748b', '#374151', '#000000',
];

export const FloatingColorPicker = forwardRef<HTMLDivElement, FloatingColorPickerProps>(
  (
    {
      value: controlledValue,
      defaultValue = '#3b82f6',
      onChange,
      swatches = defaultSwatches,
      placeholder = 'Select color',
      isDisabled = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLButtonElement>(null);
    const popupRef = useRef<HTMLDivElement>(null);

    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const handleChange = (newValue: string) => {
      if (isDisabled) return;
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    const updatePosition = () => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        setPosition({
          top: rect.bottom + 8,
          left: rect.left,
        });
      }
    };

    useEffect(() => {
      if (isOpen) {
        updatePosition();
        const handleClickOutside = (e: MouseEvent) => {
          if (
            popupRef.current && !popupRef.current.contains(e.target as Node) &&
            triggerRef.current && !triggerRef.current.contains(e.target as Node)
          ) {
            setIsOpen(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', updatePosition);
        window.addEventListener('resize', updatePosition);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
          window.removeEventListener('scroll', updatePosition);
          window.removeEventListener('resize', updatePosition);
        };
      }
    }, [isOpen]);

    return (
      <div ref={ref} className={`indo-floating-color-picker ${className}`} style={{ ...cssStyles, ...style }} {...restProps}>
        <button
          ref={triggerRef}
          type="button"
          className="indo-color-trigger"
          onClick={() => !isDisabled && setIsOpen(!isOpen)}
          disabled={isDisabled}
        >
          <span className="indo-color-preview" style={{ backgroundColor: value }} />
          <span className="indo-color-value">{value}</span>
          <svg className="indo-color-chevron" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </button>

        {isOpen && createPortal(
          <div
            ref={popupRef}
            className="indo-color-popup"
            style={{ position: 'fixed', top: position.top, left: position.left, zIndex: 9999 }}
          >
            <div className="indo-color-popup-content">
              <div className="indo-color-input-row">
                <input
                  type="color"
                  value={value}
                  onChange={(e) => handleChange(e.target.value)}
                  className="indo-color-native"
                />
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleChange(e.target.value)}
                  className="indo-color-text-input"
                />
              </div>
              <div className="indo-color-swatches">
                {swatches.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={`indo-color-swatch ${value === color ? 'indo-color-swatch-active' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      handleChange(color);
                      setIsOpen(false);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    );
  }
);

FloatingColorPicker.displayName = 'FloatingColorPicker';

// Floating Date Picker
export interface FloatingDatePickerProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date | undefined) => void;
  min?: Date;
  max?: Date;
  placeholder?: string;
  isDisabled?: boolean;
  isClearable?: boolean;
}

const formatDateDisplay = (date: Date): string => {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};

export const FloatingDatePicker = forwardRef<HTMLDivElement, FloatingDatePickerProps>(
  (
    {
      value: controlledValue,
      defaultValue,
      onChange,
      min,
      max,
      placeholder = 'Select date',
      isDisabled = false,
      isClearable = true,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [internalValue, setInternalValue] = useState<Date | undefined>(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [viewDate, setViewDate] = useState(defaultValue || new Date());
    const triggerRef = useRef<HTMLButtonElement>(null);
    const popupRef = useRef<HTMLDivElement>(null);

    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const handleChange = (date: Date | undefined) => {
      if (isDisabled) return;
      if (controlledValue === undefined) {
        setInternalValue(date);
      }
      onChange?.(date);
      setIsOpen(false);
    };

    const updatePosition = () => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        setPosition({
          top: rect.bottom + 8,
          left: rect.left,
        });
      }
    };

    useEffect(() => {
      if (isOpen) {
        updatePosition();
        const handleClickOutside = (e: MouseEvent) => {
          if (
            popupRef.current && !popupRef.current.contains(e.target as Node) &&
            triggerRef.current && !triggerRef.current.contains(e.target as Node)
          ) {
            setIsOpen(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', updatePosition);
        window.addEventListener('resize', updatePosition);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
          window.removeEventListener('scroll', updatePosition);
          window.removeEventListener('resize', updatePosition);
        };
      }
    }, [isOpen]);

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);

    const isSelected = (day: number) => {
      if (!value) return false;
      return value.getFullYear() === year && value.getMonth() === month && value.getDate() === day;
    };

    const isToday = (day: number) => {
      const today = new Date();
      return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
    };

    const isDateDisabled = (day: number) => {
      const date = new Date(year, month, day);
      if (min && date < min) return true;
      if (max && date > max) return true;
      return false;
    };

    return (
      <div ref={ref} className={`indo-floating-date-picker ${className}`} style={{ ...cssStyles, ...style }} {...restProps}>
        <button
          ref={triggerRef}
          type="button"
          className="indo-date-trigger"
          onClick={() => !isDisabled && setIsOpen(!isOpen)}
          disabled={isDisabled}
        >
          <svg className="indo-date-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="indo-date-value">{value ? formatDateDisplay(value) : placeholder}</span>
          {isClearable && value && (
            <button
              type="button"
              className="indo-date-clear"
              onClick={(e) => {
                e.stopPropagation();
                handleChange(undefined);
              }}
            >
              ✕
            </button>
          )}
        </button>

        {isOpen && createPortal(
          <div
            ref={popupRef}
            className="indo-date-popup"
            style={{ position: 'fixed', top: position.top, left: position.left, zIndex: 9999 }}
          >
            <div className="indo-date-popup-content">
              <div className="indo-date-header">
                <button type="button" onClick={() => setViewDate(new Date(year, month - 1, 1))}>
                  ‹
                </button>
                <span>{monthNames[month]} {year}</span>
                <button type="button" onClick={() => setViewDate(new Date(year, month + 1, 1))}>
                  ›
                </button>
              </div>
              <div className="indo-date-days-header">
                {dayNames.map((d) => <span key={d}>{d}</span>)}
              </div>
              <div className="indo-date-days">
                {days.map((day, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`indo-date-day ${day === null ? 'indo-date-day-empty' : ''} ${day && isSelected(day) ? 'indo-date-day-selected' : ''} ${day && isToday(day) ? 'indo-date-day-today' : ''}`}
                    disabled={day === null || isDateDisabled(day!)}
                    onClick={() => day && handleChange(new Date(year, month, day))}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    );
  }
);

FloatingDatePicker.displayName = 'FloatingDatePicker';

// Floating Time Picker
export interface FloatingTimePickerProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (time: string) => void;
  format?: '12h' | '24h';
  step?: number;
  placeholder?: string;
  isDisabled?: boolean;
}

export const FloatingTimePicker = forwardRef<HTMLDivElement, FloatingTimePickerProps>(
  (
    {
      value: controlledValue,
      defaultValue = '',
      onChange,
      format = '12h',
      step = 15,
      placeholder = 'Select time',
      isDisabled = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLButtonElement>(null);
    const popupRef = useRef<HTMLDivElement>(null);

    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const handleChange = (newValue: string) => {
      if (isDisabled) return;
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
      setIsOpen(false);
    };

    const formatTime = (time: string): string => {
      if (!time) return placeholder;
      if (format === '12h') {
        const [h, m] = time.split(':').map(Number);
        const period = h >= 12 ? 'PM' : 'AM';
        const hour12 = h % 12 || 12;
        return `${hour12}:${m.toString().padStart(2, '0')} ${period}`;
      }
      return time;
    };

    const updatePosition = () => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        setPosition({
          top: rect.bottom + 8,
          left: rect.left,
        });
      }
    };

    useEffect(() => {
      if (isOpen) {
        updatePosition();
        const handleClickOutside = (e: MouseEvent) => {
          if (
            popupRef.current && !popupRef.current.contains(e.target as Node) &&
            triggerRef.current && !triggerRef.current.contains(e.target as Node)
          ) {
            setIsOpen(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', updatePosition);
        window.addEventListener('resize', updatePosition);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
          window.removeEventListener('scroll', updatePosition);
          window.removeEventListener('resize', updatePosition);
        };
      }
    }, [isOpen]);

    // Generate time options
    const times: string[] = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += step) {
        times.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`);
      }
    }

    return (
      <div ref={ref} className={`indo-floating-time-picker ${className}`} style={{ ...cssStyles, ...style }} {...restProps}>
        <button
          ref={triggerRef}
          type="button"
          className="indo-time-trigger"
          onClick={() => !isDisabled && setIsOpen(!isOpen)}
          disabled={isDisabled}
        >
          <svg className="indo-time-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="indo-time-value">{formatTime(value)}</span>
        </button>

        {isOpen && createPortal(
          <div
            ref={popupRef}
            className="indo-time-popup"
            style={{ position: 'fixed', top: position.top, left: position.left, zIndex: 9999 }}
          >
            <div className="indo-time-popup-content">
              {times.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`indo-time-option ${t === value ? 'indo-time-option-selected' : ''}`}
                  onClick={() => handleChange(t)}
                >
                  {formatTime(t)}
                </button>
              ))}
            </div>
          </div>,
          document.body
        )}
      </div>
    );
  }
);

FloatingTimePicker.displayName = 'FloatingTimePicker';
