import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className='group relative'>
      {children}
      <span className='absolute bottom-full left-1/2 mb-2 hidden w-max -translate-x-1/2 rounded-md bg-gray-800 px-2 py-1 text-sm text-white shadow-lg group-hover:block dark:bg-gray-700'>
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
