import React from 'react';

interface BgGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const BgGlow: React.FC<BgGlowProps> = ({ className }) => {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 left-1/2 -z-[99] size-[140rem] -translate-x-1/2 rounded-full opacity-10 blur-[400px] ${className}`}
      style={{
        background: 'radial-gradient(circle, #252528, rgba(242, 179, 151, 0.4), #46455E)',
      }}
    />

    // <div
    //   className={`pointer-events-none absolute bottom-0 left-1/2 -z-[99] size-[200rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#252528] via-[#F2B397]/40 to-[#46455E] opacity-10 blur-[400px] ${className}`}
    // />
  );
};

export default BgGlow;
