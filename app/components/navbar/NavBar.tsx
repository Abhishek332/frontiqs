interface NavbarProps {
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme }) => {
  return (
    <header className="bg-white shadow-md dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          FrontIQs
        </div>

        <nav className="hidden space-x-6 md:flex">
          <a
            href="#features"
            className="text-gray-700 transition hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-gray-700 transition hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-gray-700 transition hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Contact
          </a>
        </nav>

        <div>
          <button
            onClick={toggleTheme}
            className="rounded-full bg-gray-100 px-3 py-2 text-gray-600 shadow-md transition hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
