import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'transparent' | 'backgroundwhite';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseClasses = 'font-[16px] rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary border-primary text-white hover:bg-transparent hover:text-white border-1 hover:border-white focus:ring-primary',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    warning: 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500',
    info: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    backgroundwhite: 'bg-primary border-primary text-white hover:bg-primary-hover hover:text-white border-1 hover:border-white focus:ring-primary',
    transparent: 'bg-transparent text-white hover:bg-primary hover:text-white border-white border-1 hover:border-primary'
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-[14px]',
    md: 'px-3 py-1.5 text-[16px]',
    lg: 'px-5 py-2 text-[18px]',
    xl: 'px-6 py-4 text-[20px] font-semibold'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
}