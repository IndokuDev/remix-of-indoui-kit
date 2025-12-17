import React from 'react';
import { Download } from 'lucide-react';

export interface DownloadTriggerProps {
  url: string;
  filename?: string;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const DownloadTrigger: React.FC<DownloadTriggerProps> = ({
  url,
  filename,
  children,
  className,
  disabled = false,
}) => {
  const handleDownload = async () => {
    if (disabled) return;
    
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename || url.split('/').pop() || 'download';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      const link = document.createElement('a');
      link.href = url;
      link.download = filename || '';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (children) {
    return (
      <span 
        onClick={handleDownload} 
        className={`indo-download-trigger-wrapper ${disabled ? 'indo-download-trigger-disabled' : ''} ${className || ''}`}
      >
        {children}
      </span>
    );
  }

  return (
    <button
      onClick={handleDownload}
      disabled={disabled}
      className={`indo-download-trigger ${className || ''}`}
    >
      <Download className="indo-download-trigger-icon" />
      Download
    </button>
  );
};

DownloadTrigger.displayName = 'DownloadTrigger';
