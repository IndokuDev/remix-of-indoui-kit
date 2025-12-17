import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

export interface StatProps {
  children: React.ReactNode;
  className?: string;
}

export const Stat: React.FC<StatProps> = ({ children, className }) => {
  return (
    <div className={`indo-stat ${className || ''}`}>
      {children}
    </div>
  );
};

export interface StatLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const StatLabel: React.FC<StatLabelProps> = ({ children, className }) => {
  return (
    <dt className={`indo-stat-label ${className || ''}`}>
      {children}
    </dt>
  );
};

export interface StatNumberProps {
  children: React.ReactNode;
  className?: string;
}

export const StatNumber: React.FC<StatNumberProps> = ({ children, className }) => {
  return (
    <dd className={`indo-stat-number ${className || ''}`}>
      {children}
    </dd>
  );
};

export interface StatHelpTextProps {
  children: React.ReactNode;
  className?: string;
}

export const StatHelpText: React.FC<StatHelpTextProps> = ({ children, className }) => {
  return (
    <span className={`indo-stat-help-text ${className || ''}`}>
      {children}
    </span>
  );
};

export interface StatArrowProps {
  type: 'increase' | 'decrease';
  className?: string;
}

export const StatArrow: React.FC<StatArrowProps> = ({ type, className }) => {
  const Icon = type === 'increase' ? ArrowUp : ArrowDown;
  
  return (
    <Icon className={`indo-stat-arrow indo-stat-arrow-${type} ${className || ''}`} />
  );
};

export interface StatGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const StatGroup: React.FC<StatGroupProps> = ({ children, className }) => {
  return (
    <dl className={`indo-stat-group ${className || ''}`}>
      {children}
    </dl>
  );
};

Stat.displayName = 'Stat';
StatLabel.displayName = 'StatLabel';
StatNumber.displayName = 'StatNumber';
StatHelpText.displayName = 'StatHelpText';
StatArrow.displayName = 'StatArrow';
StatGroup.displayName = 'StatGroup';
