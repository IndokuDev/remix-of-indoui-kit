import { useState, useCallback, useEffect } from 'react';

export interface UseClipboardOptions {
  timeout?: number;
}

export interface UseClipboardReturn {
  value: string;
  onCopy: () => void;
  hasCopied: boolean;
  setValue: (value: string) => void;
}

export const useClipboard = (
  initialValue = '',
  options: UseClipboardOptions = {}
): UseClipboardReturn => {
  const { timeout = 2000 } = options;
  const [value, setValue] = useState(initialValue);
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setHasCopied(true);
    } catch (err) {
      console.error('Failed to copy:', err);
      setHasCopied(false);
    }
  }, [value]);

  useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => {
        setHasCopied(false);
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [hasCopied, timeout]);

  return { value, onCopy, hasCopied, setValue };
};
