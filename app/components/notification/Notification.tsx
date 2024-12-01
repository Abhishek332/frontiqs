import { motion } from 'framer-motion';
import React from 'react';

interface NotificationProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type = 'info',
  onClose,
}) => {
  const typeStyles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-500 text-black',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed right-4 top-4 z-50 flex items-center space-x-4 rounded-lg px-4 py-2 shadow-md ${typeStyles[type]}`}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className='rounded-full bg-white/20 px-2 py-1 text-sm text-white hover:bg-white/30 focus:outline-none'
      >
        ×
      </button>
    </motion.div>
  );
};

export default Notification;
