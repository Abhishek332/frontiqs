import React from 'react';

interface ProgressBarProps {
  progress: number; // Value from 0 to 100
  label?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label }) => {
  return (
    <div className='w-full'>
      {label && (
        <span className='mb-2 block text-sm text-gray-700 dark:text-gray-300'>
          {label}
        </span>
      )}
      <div className='relative w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800'>
        <div
          className='h-4 rounded-lg bg-blue-500 transition-all dark:bg-blue-700'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
