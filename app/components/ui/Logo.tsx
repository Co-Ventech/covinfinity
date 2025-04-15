type LogoProps = {
  className?: string;
};

const Logo = ({ className = 'w-32 h-10' }: LogoProps) => (
  <div className={className}>
    <img src="/logo-white.png" alt="Company logo" className="h-full w-full object-contain" />
  </div>
);

export default Logo;
