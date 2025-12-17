import React, { forwardRef, useState, useRef } from 'react';

export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in bytes
  maxFiles?: number;
  onFilesChange?: (files: File[]) => void;
  onError?: (error: string) => void;
  isDisabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const FileUpload = forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      accept,
      multiple = false,
      maxSize,
      maxFiles = 10,
      onFilesChange,
      onError,
      isDisabled = false,
      children,
      className = '',
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isDragOver, setIsDragOver] = useState(false);

    const validateFiles = (fileList: FileList): File[] => {
      const files = Array.from(fileList);
      const validFiles: File[] = [];

      for (const file of files) {
        if (maxSize && file.size > maxSize) {
          onError?.(`File "${file.name}" exceeds maximum size of ${formatBytes(maxSize)}`);
          continue;
        }
        validFiles.push(file);
      }

      if (validFiles.length > maxFiles) {
        onError?.(`Maximum ${maxFiles} files allowed`);
        return validFiles.slice(0, maxFiles);
      }

      return validFiles;
    };

    const handleFiles = (fileList: FileList | null) => {
      if (!fileList || isDisabled) return;
      const validFiles = validateFiles(fileList);
      onFilesChange?.(validFiles);
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      if (!isDisabled) setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      handleFiles(e.dataTransfer.files);
    };

    const handleClick = () => {
      if (!isDisabled) inputRef.current?.click();
    };

    return (
      <div ref={ref} className={className}>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
          style={{ display: 'none' }}
          disabled={isDisabled}
        />
        <div
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{
            border: `2px dashed ${isDragOver ? 'hsl(var(--indo-teal-500))' : 'hsl(var(--indo-border))'}`,
            borderRadius: 'var(--indo-radius-lg)',
            padding: '32px',
            textAlign: 'center',
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            opacity: isDisabled ? 0.5 : 1,
            backgroundColor: isDragOver ? 'hsl(var(--indo-teal-100) / 0.1)' : 'transparent',
            transition: 'all 0.2s',
          }}
        >
          {children || <FileUploadDefaultContent />}
        </div>
      </div>
    );
  }
);

FileUpload.displayName = 'FileUpload';

const FileUploadDefaultContent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      style={{ color: 'hsl(var(--indo-muted-fg))' }}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
    <div style={{ color: 'hsl(var(--indo-fg))', fontWeight: 500 }}>
      Drag & drop files here
    </div>
    <div style={{ color: 'hsl(var(--indo-muted-fg))', fontSize: 'var(--indo-text-sm)' }}>
      or click to browse
    </div>
  </div>
);

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// FileUpload Trigger - for custom trigger elements
export interface FileUploadTriggerProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const FileUploadTrigger = forwardRef<HTMLDivElement, FileUploadTriggerProps>(
  ({ children, onClick }, ref) => {
    return (
      <div ref={ref} onClick={onClick} style={{ cursor: 'pointer' }}>
        {children}
      </div>
    );
  }
);

FileUploadTrigger.displayName = 'FileUploadTrigger';

// FileUpload Preview - for showing selected files
export interface FileUploadPreviewProps {
  files: File[];
  onRemove?: (index: number) => void;
  className?: string;
}

export const FileUploadPreview = forwardRef<HTMLDivElement, FileUploadPreviewProps>(
  ({ files, onRemove, className = '' }, ref) => {
    if (files.length === 0) return null;

    return (
      <div
        ref={ref}
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginTop: '16px',
        }}
      >
        {files.map((file, index) => (
          <div
            key={`${file.name}-${index}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              backgroundColor: 'hsl(var(--indo-muted) / 0.3)',
              borderRadius: 'var(--indo-radius-md)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ color: 'hsl(var(--indo-muted-fg))' }}
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span style={{ fontSize: 'var(--indo-text-sm)', color: 'hsl(var(--indo-fg))' }}>
                {file.name}
              </span>
              <span style={{ fontSize: 'var(--indo-text-xs)', color: 'hsl(var(--indo-muted-fg))' }}>
                ({formatBytes(file.size)})
              </span>
            </div>
            {onRemove && (
              <button
                onClick={() => onRemove(index)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  color: 'hsl(var(--indo-muted-fg))',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }
);

FileUploadPreview.displayName = 'FileUploadPreview';
