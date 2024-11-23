import { motion } from 'framer-motion';
import React, { useState } from 'react';

const ListItem: React.FC<{ href: string; text: string }> = ({ href, text }) => {
  const itemClass = `block rounded-md bg-gray-100 px-4 py-2 text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700`;

  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
};

const SideBar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navClass = `mt-6 w-full ${isCollapsed ? 'hidden' : 'block'} px-4`;
  const buttonClass = `rounded-full bg-gray-200 p-2 shadow-md transition hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700`;
  const initialProps = { width: isCollapsed ? '4rem' : '16rem' };

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <motion.aside
      initial={initialProps}
      animate={initialProps}
      className="fixed left-0 top-0 flex h-screen flex-col items-center bg-white pb-6 pt-4 shadow-lg transition-all dark:bg-gray-900 dark:shadow-gray-800"
    >
      {/* Toggle Button */}
      <button onClick={toggleSidebar} className={buttonClass}>
        {isCollapsed ? '>' : '<'}
      </button>

      {/* Navigation Items */}
      <nav className={navClass}>
        <ul className="space-y-4">
          <ListItem href="#dashboard" text="Dashboard" />
          <ListItem href="#analytics" text="Analytics" />
          <ListItem href="#settings" text="Settings" />
        </ul>
      </nav>
    </motion.aside>
  );
};

export default SideBar;
