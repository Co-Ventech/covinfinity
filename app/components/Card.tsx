import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, footer }) => {
  return (
    <div className={`overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800 ${className}`}>
      {title && (
        <div className="border-b border-gray-200 p-4 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && (
        <div className="border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
          {footer}
        </div>
      )}
    </div>
  );
};
