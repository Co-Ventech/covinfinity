import React from 'react';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ className = '', children, ...props }) => {
  return (
    <div
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const AvatarImage: React.FC<AvatarImageProps> = ({
  className = '',
  alt = '',
  src,
  ...props
}) => {
  return (
    <img
      className={`aspect-square h-full w-full object-cover ${className}`}
      alt={alt}
      src={src}
      {...props}
    />
  );
};

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
