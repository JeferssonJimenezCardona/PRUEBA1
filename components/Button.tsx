import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0f172a]";
  
  const variants = {
    primary: "bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-900/50 focus:ring-brand-500",
    secondary: "bg-kognia-card border border-kognia-border text-kognia-text hover:bg-slate-700 focus:ring-slate-500",
    ghost: "text-kognia-muted hover:text-white hover:bg-white/5 focus:ring-slate-500"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};