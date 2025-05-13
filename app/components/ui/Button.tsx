import React from 'react';
import { NavLink } from 'react-router';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  to,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses =
    'cursor-pointer rounded-lg bg-gradient-to-tr from-button-gradient-from to-white px-5 py-2.5 font-serif text-base font-medium text-button-text transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50';

  if (to) {
    return (
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) => `${baseClasses} ${className} ${isActive ? 'active' : ''}`}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
