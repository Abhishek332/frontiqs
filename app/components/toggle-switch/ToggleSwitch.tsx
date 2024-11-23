import React, { useState } from 'react';

interface ToggleSwitchProps {
  initialIsDarkMode: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ initialIsDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialIsDarkMode);

  const toggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  const switchClass = `relative flex h-8 w-14 items-center rounded-full bg-gray-300 p-1 shadow-inner transition dark:bg-gray-700`;

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleSwitch}
        aria-label="Toggle Dark Mode"
        className={switchClass}
      >
        <span
          className={`size-6 rounded-full bg-white shadow-md transition-transform dark:bg-gray-800${
            isDarkMode ? 'translate-x-6' : 'translate-x-0'
          }`}
        ></span>
      </button>
    </div>
  );
};

export default ToggleSwitch;
