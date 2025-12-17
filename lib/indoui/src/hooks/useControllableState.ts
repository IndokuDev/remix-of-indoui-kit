import { useState, useCallback, useRef } from 'react';

export interface UseControllableStateProps<T> {
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
}

export function useControllableState<T>(props: UseControllableStateProps<T>) {
  const { value: controlledValue, defaultValue, onChange } = props;
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);

  const value = isControlled ? controlledValue : internalValue;

  const setValue = useCallback(
    (nextValue: T | ((prev: T) => T)) => {
      const resolvedValue = typeof nextValue === 'function' 
        ? (nextValue as (prev: T) => T)(value as T)
        : nextValue;
      
      if (!isControlled) {
        setInternalValue(resolvedValue);
      }
      onChange?.(resolvedValue);
    },
    [isControlled, onChange, value]
  );

  return [value, setValue] as const;
}
