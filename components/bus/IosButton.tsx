// components/buttons/BookingButton.tsx
import React, { type ButtonHTMLAttributes } from 'react';

interface BookingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const BookingButton: React.FC<BookingButtonProps> = ({
  children,
  loading = false,
  variant = 'gradient',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  disabled,
  type = 'button',
  ...props
}) => {
  // Базовые стили
  const baseStyles = `
    relative
    inline-flex
    items-center
    justify-center
    font-bold
    rounded-lg
    transition-all
    duration-300
    transform
    hover:-translate-y-0.5
    active:translate-y-0
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:transform-none
    overflow-hidden
    group
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-cyan-400
  `;

  // Варианты стилей
  const variants = {
    primary: `
      bg-blue-600
      text-white
      hover:bg-blue-700
      hover:shadow-2xl
      hover:shadow-blue-500/30
      active:bg-blue-800
      focus:ring-blue-500
    `,
    secondary: `
      bg-gray-800
      text-white
      hover:bg-gray-900
      hover:shadow-2xl
      hover:shadow-gray-500/30
      active:bg-gray-950
      focus:ring-gray-500
    `,
    gradient: `
      bg-gradient-to-r
      from-cyan-500
      to-blue-600
      text-white
      hover:from-cyan-600
      hover:to-blue-700
      hover:shadow-2xl
      hover:shadow-blue-500/40
      active:from-cyan-700
      active:to-blue-800
      focus:ring-cyan-400
    `
  };

  // Размеры
  const sizes = {
    sm: `
      px-4
      py-2.5
      text-sm
      rounded-lg
    `,
    md: `
      px-6
      py-3
      text-base
      rounded-lg
    `,
    lg: `
      px-8
      py-4
      text-lg
       rounded-lg
    `
  };

  // Ширина
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${widthClass}
        ${className}
      `}
      {...props}
    >
      {/* iOS стеклянный эффект сверху */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent  rounded-lg pointer-events-none" />
      
      {/* Блеск при наведении */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      
      {/* Контент */}
      <span className="relative flex items-center gap-2 z-10">
        {loading ? (
          <>
            <svg 
              className="animate-spin h-5 w-5" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4" 
                fill="none" 
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" 
              />
            </svg>
            <span>Загрузка...</span>
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <span className="flex-shrink-0">{icon}</span>
            )}
            <span className="whitespace-nowrap">{children}</span>
            {icon && iconPosition === 'right' && (
              <span className="flex-shrink-0">{icon}</span>
            )}
          </>
        )}
      </span>
    </button>
  );
};

export default BookingButton;