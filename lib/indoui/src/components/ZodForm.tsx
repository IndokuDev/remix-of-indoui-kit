import React, { forwardRef, createContext, useContext, useState, useCallback } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

// Types for Zod-like schema validation
export interface ZodSchema<T = any> {
  parse: (data: unknown) => T;
  safeParse: (data: unknown) => { success: true; data: T } | { success: false; error: ZodError };
}

export interface ZodError {
  issues: Array<{
    path: (string | number)[];
    message: string;
  }>;
}

// Form Context
interface ZodFormContextValue<T extends Record<string, any> = Record<string, any>> {
  values: T;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  setValue: (name: keyof T, value: any) => void;
  setError: (name: string, message: string) => void;
  clearError: (name: string) => void;
  setTouched: (name: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ZodFormContext = createContext<ZodFormContextValue | null>(null);

export const useZodForm = () => {
  const ctx = useContext(ZodFormContext);
  if (!ctx) throw new Error('useZodForm must be used within ZodFormProvider');
  return ctx;
};

// ZodForm Component
export interface ZodFormProps<T extends Record<string, any>> extends StyleProps, Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit' | 'onError'> {
  schema: ZodSchema<T>;
  defaultValues?: Partial<T>;
  onSubmit?: (data: T) => void | Promise<void>;
  onValidationError?: (errors: Record<string, string>) => void;
}

export function ZodForm<T extends Record<string, any>>({
  schema,
  defaultValues = {} as Partial<T>,
  onSubmit,
  onValidationError,
  children,
  className = '',
  style,
  ...props
}: ZodFormProps<T> & { children: React.ReactNode }) {
  const { styleProps, restProps } = extractStyleProps(props);
  const cssStyles = stylePropsToCSS(styleProps);
  
  const [values, setValues] = useState<T>(defaultValues as T);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouchedState] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setValue = useCallback((name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
    // Clear error when value changes
    setErrors(prev => {
      const next = { ...prev };
      delete next[name as string];
      return next;
    });
  }, []);

  const setError = useCallback((name: string, message: string) => {
    setErrors(prev => ({ ...prev, [name]: message }));
  }, []);

  const clearError = useCallback((name: string) => {
    setErrors(prev => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const setTouched = useCallback((name: string) => {
    setTouchedState(prev => ({ ...prev, [name]: true }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = schema.safeParse(values);
    
    if (!result.success) {
      const zodResult = result as { success: false; error: ZodError };
      const newErrors: Record<string, string> = {};
      zodResult.error.issues.forEach(issue => {
        const path = issue.path.join('.');
        if (!newErrors[path]) {
          newErrors[path] = issue.message;
        }
      });
      setErrors(newErrors);
      onValidationError?.(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      await onSubmit?.(result.data);
    } catch (err: any) {
      setErrors({ _form: err.message || 'An error occurred' });
    } finally {
      setIsSubmitting(false);
    }
  }, [schema, values, onSubmit, onValidationError]);

  const contextValue: ZodFormContextValue<T> = {
    values,
    errors,
    touched,
    isSubmitting,
    setValue,
    setError,
    clearError,
    setTouched,
    handleSubmit,
  };

  return (
    <ZodFormContext.Provider value={contextValue as any}>
      <form
        className={`indo-zod-form ${className}`}
        style={{ ...cssStyles, ...style }}
        onSubmit={handleSubmit}
        {...restProps}
      >
        {children}
      </form>
    </ZodFormContext.Provider>
  );
}

// Form Field
export interface ZodFieldProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

export const ZodField = forwardRef<HTMLDivElement, ZodFieldProps>(
  ({ name, children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const { errors, touched } = useZodForm();
    
    const hasError = touched[name] && errors[name];

    return (
      <div
        ref={ref}
        className={`indo-zod-field ${hasError ? 'indo-zod-field-error' : ''} ${className}`}
        style={{ ...cssStyles, ...style }}
        data-field={name}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

ZodField.displayName = 'ZodField';

// Form Input - connects to form context
export interface ZodInputProps extends StyleProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'value' | 'onChange' | 'size'> {
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ZodInput = forwardRef<HTMLInputElement, ZodInputProps>(
  ({ name, size = 'md', className = '', style, onBlur, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const { values, errors, touched, setValue, setTouched } = useZodForm();
    
    const hasError = touched[name] && errors[name];

    return (
      <input
        ref={ref}
        name={name}
        value={values[name] || ''}
        onChange={(e) => setValue(name, e.target.value)}
        onBlur={(e) => {
          setTouched(name);
          onBlur?.(e);
        }}
        className={`indo-input indo-input-${size} ${hasError ? 'indo-input-error' : ''} ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      />
    );
  }
);

ZodInput.displayName = 'ZodInput';

// Form Textarea
export interface ZodTextareaProps extends StyleProps, Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'name' | 'value' | 'onChange'> {
  name: string;
}

export const ZodTextarea = forwardRef<HTMLTextAreaElement, ZodTextareaProps>(
  ({ name, className = '', style, onBlur, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const { values, errors, touched, setValue, setTouched } = useZodForm();
    
    const hasError = touched[name] && errors[name];

    return (
      <textarea
        ref={ref}
        name={name}
        value={values[name] || ''}
        onChange={(e) => setValue(name, e.target.value)}
        onBlur={(e) => {
          setTouched(name);
          onBlur?.(e);
        }}
        className={`indo-textarea ${hasError ? 'indo-input-error' : ''} ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      />
    );
  }
);

ZodTextarea.displayName = 'ZodTextarea';

// Form Select
export interface ZodSelectProps extends StyleProps, Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'name' | 'value' | 'onChange'> {
  name: string;
}

export const ZodSelect = forwardRef<HTMLSelectElement, ZodSelectProps>(
  ({ name, children, className = '', style, onBlur, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const { values, errors, touched, setValue, setTouched } = useZodForm();
    
    const hasError = touched[name] && errors[name];

    return (
      <select
        ref={ref}
        name={name}
        value={values[name] || ''}
        onChange={(e) => setValue(name, e.target.value)}
        onBlur={(e) => {
          setTouched(name);
          onBlur?.(e);
        }}
        className={`indo-select ${hasError ? 'indo-input-error' : ''} ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </select>
    );
  }
);

ZodSelect.displayName = 'ZodSelect';

// Form Checkbox
export interface ZodCheckboxProps extends StyleProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'checked' | 'onChange' | 'type'> {
  name: string;
}

export const ZodCheckbox = forwardRef<HTMLInputElement, ZodCheckboxProps>(
  ({ name, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const { values, setValue } = useZodForm();

    return (
      <input
        ref={ref}
        type="checkbox"
        name={name}
        checked={!!values[name]}
        onChange={(e) => setValue(name, e.target.checked)}
        className={`indo-checkbox ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      />
    );
  }
);

ZodCheckbox.displayName = 'ZodCheckbox';

// Form File Input
export interface ZodFileInputProps extends StyleProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'onChange' | 'type'> {
  name: string;
}

export const ZodFileInput = forwardRef<HTMLInputElement, ZodFileInputProps>(
  ({ name, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const { setValue, setTouched } = useZodForm();

    return (
      <input
        ref={ref}
        type="file"
        name={name}
        onChange={(e) => {
          const files = e.target.files;
          setValue(name, props.multiple ? files : files?.[0]);
          setTouched(name);
        }}
        className={`indo-file-input ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      />
    );
  }
);

ZodFileInput.displayName = 'ZodFileInput';

// Error Message Display
export interface ZodErrorMessageProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

export const ZodErrorMessage = forwardRef<HTMLDivElement, ZodErrorMessageProps>(
  ({ name, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const { errors, touched } = useZodForm();
    
    const error = touched[name] && errors[name];
    if (!error) return null;

    return (
      <div
        ref={ref}
        role="alert"
        className={`indo-zod-error ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {error}
      </div>
    );
  }
);

ZodErrorMessage.displayName = 'ZodErrorMessage';

// Submit Button
export interface ZodSubmitProps extends StyleProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  loadingText?: string;
}

export const ZodSubmit = forwardRef<HTMLButtonElement, ZodSubmitProps>(
  ({ children, loadingText = 'Submitting...', className = '', style, disabled, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const { isSubmitting } = useZodForm();

    return (
      <button
        ref={ref}
        type="submit"
        disabled={disabled || isSubmitting}
        className={`indo-btn indo-btn-solid indo-btn-md ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {isSubmitting ? loadingText : children}
      </button>
    );
  }
);

ZodSubmit.displayName = 'ZodSubmit';
