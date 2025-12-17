import React, { forwardRef, createContext, useContext, useState } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

// Form Context
interface FormContextValue {
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}

const FormContext = createContext<FormContextValue>({});

// Form
export interface FormProps extends StyleProps, React.FormHTMLAttributes<HTMLFormElement> {
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

export const Form = forwardRef<HTMLFormElement, FormProps>(
  (
    {
      children,
      isInvalid = false,
      isDisabled = false,
      isReadOnly = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <FormContext.Provider value={{ isInvalid, isDisabled, isReadOnly }}>
        <form
          ref={ref}
          className={`indo-form ${className}`}
          style={{ ...cssStyles, ...style }}
          {...restProps}
        >
          {children}
        </form>
      </FormContext.Provider>
    );
  }
);

Form.displayName = 'Form';

// Form Field Context
interface FormFieldContextValue extends FormContextValue {
  id?: string;
  isRequired?: boolean;
  hasError?: boolean;
}

const FormFieldContext = createContext<FormFieldContextValue>({});

export const useFormField = () => useContext(FormFieldContext);

// Form Field
export interface FormFieldProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      children,
      isInvalid,
      isDisabled,
      isReadOnly,
      isRequired,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const formContext = useContext(FormContext);
    const id = React.useId();

    const contextValue: FormFieldContextValue = {
      id,
      isInvalid: isInvalid ?? formContext.isInvalid,
      isDisabled: isDisabled ?? formContext.isDisabled,
      isReadOnly: isReadOnly ?? formContext.isReadOnly,
      isRequired,
      hasError: isInvalid ?? formContext.isInvalid,
    };

    return (
      <FormFieldContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={`indo-form-field ${className}`}
          style={{ ...cssStyles, ...style }}
          {...restProps}
        >
          {children}
        </div>
      </FormFieldContext.Provider>
    );
  }
);

FormField.displayName = 'FormField';

// Form Label
export interface FormLabelProps extends StyleProps, React.LabelHTMLAttributes<HTMLLabelElement> {
  requiredIndicator?: React.ReactNode;
}

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ children, requiredIndicator = ' *', className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const { id, isRequired, isDisabled } = useFormField();

    return (
      <label
        ref={ref}
        htmlFor={id}
        className={`indo-form-label ${isDisabled ? 'indo-form-label-disabled' : ''} ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
        {isRequired && (
          <span className="indo-form-required" aria-hidden="true">
            {requiredIndicator}
          </span>
        )}
      </label>
    );
  }
);

FormLabel.displayName = 'FormLabel';

// Form Helper Text
export interface FormHelperTextProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {}

export const FormHelperText = forwardRef<HTMLDivElement, FormHelperTextProps>(
  ({ children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const { id } = useFormField();

    return (
      <div
        ref={ref}
        id={`${id}-helper`}
        className={`indo-form-helper ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

FormHelperText.displayName = 'FormHelperText';

// Form Error Message
export interface FormErrorMessageProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {}

export const FormErrorMessage = forwardRef<HTMLDivElement, FormErrorMessageProps>(
  ({ children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const { id, hasError } = useFormField();

    if (!hasError) return null;

    return (
      <div
        ref={ref}
        id={`${id}-error`}
        role="alert"
        className={`indo-form-error ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

FormErrorMessage.displayName = 'FormErrorMessage';

// Button Group
export interface ButtonGroupProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  isAttached?: boolean;
  spacing?: string | number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'solid' | 'outline' | 'ghost';
  colorPalette?: string;
  orientation?: 'horizontal' | 'vertical';
  isDisabled?: boolean;
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      children,
      isAttached = false,
      spacing = 2,
      size,
      variant,
      colorPalette,
      orientation = 'horizontal',
      isDisabled = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          size: child.props.size ?? size,
          variant: child.props.variant ?? variant,
          colorPalette: child.props.colorPalette ?? colorPalette,
          isDisabled: child.props.isDisabled ?? isDisabled,
        });
      }
      return child;
    });

    return (
      <div
        ref={ref}
        role="group"
        className={`indo-button-group ${isAttached ? 'indo-button-group-attached' : ''} ${className}`}
        style={{
          ...cssStyles,
          display: 'flex',
          flexDirection: orientation === 'vertical' ? 'column' : 'row',
          gap: isAttached ? 0 : typeof spacing === 'number' ? `${spacing * 0.25}rem` : spacing,
          ...style,
        }}
        {...restProps}
      >
        {childrenWithProps}
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

// Dropzone (File Upload area)
export interface DropzoneProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrop'> {
  onFilesAccepted?: (files: File[]) => void;
  accept?: string[];
  maxFiles?: number;
  maxSize?: number;
  multiple?: boolean;
  isDisabled?: boolean;
  isDragActive?: boolean;
}

export const Dropzone = forwardRef<HTMLDivElement, DropzoneProps>(
  (
    {
      children,
      onFilesAccepted,
      accept,
      maxFiles = 1,
      maxSize,
      multiple = false,
      isDisabled = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [isDragOver, setIsDragOver] = useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      if (!isDisabled) setIsDragOver(true);
    };

    const handleDragLeave = () => {
      setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      if (isDisabled) return;

      const files = Array.from(e.dataTransfer.files);
      processFiles(files);
    };

    const handleClick = () => {
      if (!isDisabled) inputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      processFiles(files);
    };

    const processFiles = (files: File[]) => {
      let filtered = files;

      if (accept && accept.length > 0) {
        filtered = filtered.filter((file) =>
          accept.some((type) => {
            if (type.startsWith('.')) {
              return file.name.toLowerCase().endsWith(type.toLowerCase());
            }
            return file.type.match(new RegExp(type.replace('*', '.*')));
          })
        );
      }

      if (maxSize) {
        filtered = filtered.filter((file) => file.size <= maxSize);
      }

      if (maxFiles) {
        filtered = filtered.slice(0, maxFiles);
      }

      onFilesAccepted?.(filtered);
    };

    return (
      <div
        ref={ref}
        className={`indo-dropzone ${isDragOver ? 'indo-dropzone-active' : ''} ${isDisabled ? 'indo-dropzone-disabled' : ''} ${className}`}
        style={{ ...cssStyles, ...style }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        role="button"
        tabIndex={isDisabled ? -1 : 0}
        {...restProps}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept?.join(',')}
          multiple={multiple}
          onChange={handleChange}
          style={{ display: 'none' }}
          disabled={isDisabled}
        />
        {children || (
          <div className="indo-dropzone-content">
            <p>Drag & drop files here, or click to select</p>
          </div>
        )}
      </div>
    );
  }
);

Dropzone.displayName = 'Dropzone';
