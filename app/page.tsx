'use client';
import React from 'react';

import { Navbar, SideBar } from './components';

const App: React.FC = () => {
  return (
    <div className="flex">
      <SideBar />
      <main className="w-full">
        <Navbar />
      </main>
    </div>
  );
};

export default App;
