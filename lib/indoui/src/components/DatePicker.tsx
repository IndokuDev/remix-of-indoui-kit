import React, { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { SizeKey } from '../theme/tokens';

export interface DatePickerProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date | undefined) => void;
  min?: Date;
  max?: Date;
  placeholder?: string;
  size?: SizeKey;
  disabled?: boolean;
  className?: string;
}

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

type ViewMode = 'days' | 'months' | 'years';

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  defaultValue,
  onChange,
  min,
  max,
  placeholder = 'Select date',
  size = 'md',
  disabled = false,
  className,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value || defaultValue);
  const [viewDate, setViewDate] = useState(value || defaultValue || new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('days');
  const containerRef = useRef<HTMLDivElement>(null);

  const currentYear = viewDate.getFullYear();
  const yearsStart = Math.floor(currentYear / 12) * 12;
  const years = Array.from({ length: 12 }, (_, i) => yearsStart + i);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedDate(value);
      setViewDate(value);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setViewMode('days');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days: (Date | null)[] = [];
    
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onChange?.(date);
    setIsOpen(false);
  };

  const handleMonthSelect = (monthIndex: number) => {
    setViewDate(new Date(viewDate.getFullYear(), monthIndex, 1));
    setViewMode('days');
  };

  const handleYearSelect = (year: number) => {
    setViewDate(new Date(year, viewDate.getMonth(), 1));
    setViewMode('months');
  };

  const handlePrev = () => {
    if (viewMode === 'days') {
      setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    } else if (viewMode === 'months') {
      setViewDate(new Date(viewDate.getFullYear() - 1, viewDate.getMonth(), 1));
    } else {
      setViewDate(new Date(viewDate.getFullYear() - 12, viewDate.getMonth(), 1));
    }
  };

  const handleNext = () => {
    if (viewMode === 'days') {
      setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
    } else if (viewMode === 'months') {
      setViewDate(new Date(viewDate.getFullYear() + 1, viewDate.getMonth(), 1));
    } else {
      setViewDate(new Date(viewDate.getFullYear() + 12, viewDate.getMonth(), 1));
    }
  };

  const isDateDisabled = (date: Date) => {
    if (min && date < min) return true;
    if (max && date > max) return true;
    return false;
  };

  const isSameDay = (a: Date, b: Date) => {
    return a.getDate() === b.getDate() &&
           a.getMonth() === b.getMonth() &&
           a.getFullYear() === b.getFullYear();
  };

  const isToday = (date: Date) => isSameDay(date, new Date());

  const formatDate = (date: Date) => {
    return `${MONTHS[date.getMonth()].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const days = getDaysInMonth(viewDate);

  const getHeaderText = () => {
    if (viewMode === 'years') {
      return `${yearsStart} - ${yearsStart + 11}`;
    }
    if (viewMode === 'months') {
      return viewDate.getFullYear().toString();
    }
    return `${MONTHS[viewDate.getMonth()]} ${viewDate.getFullYear()}`;
  };

  return (
    <div ref={containerRef} className={`indo-date-picker indo-date-picker-${size} ${className || ''}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className="indo-date-picker-trigger"
      >
        <Calendar className="indo-date-picker-icon" />
        <span className={!selectedDate ? 'indo-date-picker-placeholder' : ''}>
          {selectedDate ? formatDate(selectedDate) : placeholder}
        </span>
      </button>

      {isOpen && (
        <>
          <div className="indo-date-picker-backdrop" onClick={() => { setIsOpen(false); setViewMode('days'); }} />
          <div className="indo-date-picker-popup">
            <div className="indo-date-picker-header">
              <button type="button" onClick={handlePrev} className="indo-date-picker-nav">
                <ChevronLeft className="indo-date-picker-nav-icon" />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (viewMode === 'days') setViewMode('months');
                  else if (viewMode === 'months') setViewMode('years');
                }}
                className="indo-date-picker-header-text"
              >
                {getHeaderText()}
                {viewMode !== 'years' && <ChevronDown className="indo-date-picker-header-chevron" />}
              </button>
              <button type="button" onClick={handleNext} className="indo-date-picker-nav">
                <ChevronRight className="indo-date-picker-nav-icon" />
              </button>
            </div>

            {viewMode === 'days' && (
              <>
                <div className="indo-date-picker-weekdays">
                  {DAYS.map((day) => (
                    <div key={day} className="indo-date-picker-weekday">{day}</div>
                  ))}
                </div>

                <div className="indo-date-picker-days">
                  {days.map((day, index) => {
                    if (!day) {
                      return <div key={`empty-${index}`} />;
                    }

                    const isSelected = selectedDate && isSameDay(day, selectedDate);
                    const dayDisabled = isDateDisabled(day);

                    return (
                      <button
                        key={day.getTime()}
                        type="button"
                        disabled={dayDisabled}
                        onClick={() => handleDateSelect(day)}
                        className={`indo-date-picker-day ${isSelected ? 'indo-date-picker-day-selected' : ''} ${isToday(day) && !isSelected ? 'indo-date-picker-day-today' : ''} ${dayDisabled ? 'indo-date-picker-day-disabled' : ''}`}
                      >
                        {day.getDate()}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {viewMode === 'months' && (
              <div className="indo-date-picker-months">
                {MONTHS_SHORT.map((month, index) => {
                  const isCurrentMonth = selectedDate && 
                    selectedDate.getMonth() === index && 
                    selectedDate.getFullYear() === viewDate.getFullYear();
                  
                  return (
                    <button
                      key={month}
                      type="button"
                      onClick={() => handleMonthSelect(index)}
                      className={`indo-date-picker-month ${isCurrentMonth ? 'indo-date-picker-month-selected' : ''} ${new Date().getMonth() === index && new Date().getFullYear() === viewDate.getFullYear() && !isCurrentMonth ? 'indo-date-picker-month-today' : ''}`}
                    >
                      {month}
                    </button>
                  );
                })}
              </div>
            )}

            {viewMode === 'years' && (
              <div className="indo-date-picker-years">
                {years.map((year) => {
                  const isCurrentYear = selectedDate && selectedDate.getFullYear() === year;
                  
                  return (
                    <button
                      key={year}
                      type="button"
                      onClick={() => handleYearSelect(year)}
                      className={`indo-date-picker-year ${isCurrentYear ? 'indo-date-picker-year-selected' : ''} ${new Date().getFullYear() === year && !isCurrentYear ? 'indo-date-picker-year-today' : ''}`}
                    >
                      {year}
                    </button>
                  );
                })}
              </div>
            )}

            <button
              type="button"
              onClick={() => {
                const today = new Date();
                setSelectedDate(today);
                setViewDate(today);
                onChange?.(today);
                setIsOpen(false);
              }}
              className="indo-date-picker-today"
            >
              Today
            </button>
          </div>
        </>
      )}
    </div>
  );
};

DatePicker.displayName = 'DatePicker';
