import { motion } from 'framer-motion';
import React from 'react';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message?: string;
  onClose?: () => void; // Optional close handler
  children?: React.ReactNode;
}

const alertStyles = {
  success: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200',
  error: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-200',
  warning:
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200',
  info: 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200',
};

const Alert: React.FC<AlertProps> = ({ type, message, onClose, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex items-center justify-between rounded-md p-4 shadow-md ${alertStyles[type]}`}
    >
      {message ? (
        <span className='text-sm font-medium'>{message}</span>
      ) : (
        children
      )}

      {onClose && (
        <button
          onClick={onClose}
          className='ml-4 rounded-full bg-transparent p-1 text-gray-500 transition hover:bg-gray-200 hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
          aria-label='Close alert'
        >
          ✕
        </button>
      )}
    </motion.div>
  );
};

export default Alert;
