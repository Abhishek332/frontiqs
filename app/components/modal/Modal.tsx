import { motion } from 'framer-motion';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-96 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900"
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </h3>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          {content}
        </p>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-blue-500 py-2 text-white shadow-md transition hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-blue-700 dark:focus:ring-blue-500"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
