import React from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  label,
  ...props
}) => {
  const inputId = `${label.toLowerCase().replace(/\s+/g, '-')}-input`;

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
        className="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-800 shadow-sm transition focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-gray-200 dark:focus:ring-blue-500"
      />
    </div>
  );
};

export default Input;
