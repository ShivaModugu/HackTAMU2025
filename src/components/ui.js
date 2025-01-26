import React from 'react';
import { motion } from 'framer-motion';

export const CardComponent = ({ 
  children, 
  className = '', 
  hover = true, 
  ...props 
}) => {
  return (
    <motion.div 
      whileHover={hover ? { scale: 1.02 } : false}
      transition={{ type: "spring", stiffness: 300 }}
      className={`
        bg-white 
        rounded-lg 
        shadow-md 
        border 
        border-gray-200 
        overflow-hidden 
        transition-all 
        duration-300 
        ease-in-out
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`
        px-4 
        py-2 
        rounded-md 
        transition-all 
        duration-300 
        ease-in-out 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        ${variantStyles[variant]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`px-4 pt-4 pb-2 border-b border-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};