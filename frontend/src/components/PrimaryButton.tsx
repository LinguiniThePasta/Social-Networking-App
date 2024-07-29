import React from 'react';

const sizeClasses = {
  small: 'px-3 py-1 text-xs sm:text-sm',
  medium: 'px-5 py-2 text-sm sm:text-base',
  large: 'px-7 py-3 text-base sm:text-lg md:text-xl'
};

const PrimaryButton = ({ children, onClick, className = '', size = 'medium' }) => {
  const sizeClass = sizeClasses[size] || sizeClasses.medium;

  return (
    <button
      onClick={onClick}
      className={`
        ${sizeClass}
        ${className}
        bg-transparent
        text-black
        font-semibold
        border-2 border-blue-600
        rounded-lg
        transition-all duration-300 ease-in-out
        hover:bg-blue-50
        hover:border-blue-700
        hover:text-blue-700
        hover:shadow-lg
        hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-blue-300
        active:bg-blue-100 active:scale-100
      `}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;