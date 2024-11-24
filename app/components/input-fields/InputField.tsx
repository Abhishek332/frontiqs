import React from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  error?: string;
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  label,
  error,
  ...props
}) => {
  const inputId = `${label.toLowerCase().replace(/\s+/g, '-')}-input`;

  // Determine if the input is in error state based on the `error` prop
  const inputClasses = `w-full rounded-lg px-4 py-2 text-gray-800 shadow-sm transition focus:outline-none focus:ring ${
    error
      ? 'border-2 border-red-500 focus:ring-red-500'
      : 'bg-gray-100 focus:ring-blue-300'
  } dark:bg-gray-800 dark:text-gray-200 dark:focus:ring-blue-500`;

  return (
    <div className="mb-6">
      {/* Label with `htmlFor` for accessibility */}
      <label
        htmlFor={inputId}
        className="mb-2 block font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
        className={inputClasses}
      />
      {/* Display error message if the error prop is provided */}
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
