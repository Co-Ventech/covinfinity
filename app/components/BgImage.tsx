import React from 'react';

interface BgImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
}

const BgImage: React.FC<BgImageProps> = ({ src, className = '', style, ...props }) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 bg-cover bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url('/${src}')`,
        ...style,
      }}
      {...props}
    />
  );
};

export default BgImage;
