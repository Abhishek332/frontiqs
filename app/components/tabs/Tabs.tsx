import React, { useState } from 'react';

interface TabProps {
  tabs: string[];
  activeTab?: number;
  onTabChange?: (index: number) => void;
}

const Tabs: React.FC<TabProps> = ({ tabs, activeTab = 0, onTabChange }) => {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const handleTabClick = (index: number) => {
    setCurrentTab(index);
    if (onTabChange) onTabChange(index);
  };

  return (
    <div className='flex border-b border-gray-300 dark:border-gray-700'>
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => handleTabClick(index)}
          className={`px-4 py-2 text-sm transition ${
            currentTab === index
              ? 'border-b-2 border-blue-500 text-blue-500 dark:text-blue-400'
              : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
