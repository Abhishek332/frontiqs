import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  ...props
}) => {
  const baseStyle =
    'px-4 py-2 rounded-lg font-medium transition-all focus:outline-none focus:ring';
  const variantStyles = {
    primary: `bg-blue-500 text-white shadow-md hover:bg-blue-600 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-600 dark:focus:ring-blue-500`,
    secondary: `bg-gray-200 text-gray-800 shadow-sm hover:bg-gray-300 focus:ring-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-500`,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyles[variant]}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
