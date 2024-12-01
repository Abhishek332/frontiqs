import React from 'react';

interface CardProps {
  title: string;
  content: string;
  styleType?: 'glass' | 'neumorphic';
}

const Card: React.FC<CardProps> = ({ title, content, styleType = 'glass' }) => {
  const baseStyle =
    'rounded-lg p-4 shadow-lg transition-all text-gray-800 dark:text-gray-200';
  const styleVariants = {
    glass: `bg-white/60 backdrop-blur-lg dark:bg-gray-800/60`,
    neumorphic: `bg-gray-200 shadow-neumorphic-light dark:bg-gray-900 dark:shadow-neumorphic-dark`,
  };

  return (
    <div className={`${baseStyle} ${styleVariants[styleType]}`}>
      <h3 className='text-lg font-semibold'>{title}</h3>
      <p className='mt-2 text-sm'>{content}</p>
    </div>
  );
};

export default Card;
