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

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <motion.aside
      initial={{ width: '4rem' }}
      animate={{ width: isCollapsed ? '4rem' : '16rem' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className='fixed left-0 top-0 flex h-screen flex-col items-center bg-white pb-6 pt-4 shadow-lg dark:bg-gray-900 dark:shadow-gray-800'
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className='rounded-full bg-gray-200 p-2 shadow-md transition hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700'
      >
        {isCollapsed ? '>' : '<'}
      </button>

      {/* Navigation Items */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: isCollapsed ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className='mt-6 w-full px-4'
      >
        <ul className='space-y-4'>
          <ListItem href='#dashboard' text='Dashboard' />
          <ListItem href='#analytics' text='Analytics' />
          <ListItem href='#settings' text='Settings' />
        </ul>
      </motion.nav>
    </motion.aside>
  );
};

export default SideBar;
