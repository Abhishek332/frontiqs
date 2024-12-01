import React, { useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';

const ToggleSwitch = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const isDarkTheme = useMemo(() => theme === 'dark', [theme]);

  // Sync with system preference on initial load
  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    setTheme(prefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [isDarkTheme, theme]);

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  const switchClass = `relative flex h-7 w-12 items-center rounded-full bg-gray-300 p-1 shadow-inner transition dark:bg-gray-700`;

  return (
    <div className='flex items-center justify-center'>
      <button
        onClick={toggleTheme}
        aria-label='Toggle Dark Mode'
        className={switchClass}
      >
        <span
          className={`size-5 rounded-full bg-white shadow-md transition-transform dark:bg-gray-800 ${
            isDarkTheme ? 'translate-x-5' : 'translate-x-0'
          }`}
        ></span>
      </button>
    </div>
  );
};

export default ToggleSwitch;
