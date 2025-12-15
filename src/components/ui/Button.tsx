import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  fullWidth = false,
  className = '',
  external = false,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-primary hover:bg-primary-dark text-white focus:ring-primary shadow-lg hover:shadow-xl',
    secondary:
      'bg-secondary hover:bg-secondary-dark text-primary focus:ring-secondary',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className={combinedClasses}
          aria-label={props['aria-label']}>
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={combinedClasses}
        aria-label={props['aria-label']}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
