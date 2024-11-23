'use client';
import React, { useEffect, useState } from 'react';

import { Navbar, SideBar } from './components';

const App: React.FC = () => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.theme || 'light' : 'light'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex">
      <SideBar />
      <main className="w-full">
        <Navbar toggleTheme={toggleTheme} />
      </main>
    </div>
  );
};

export default App;
