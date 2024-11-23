import Link from 'next/link';

interface NavbarProps {
  toggleTheme: () => void;
}

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
  const linkClass = `text-gray-700 transition hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400`;

  return (
    <Link href={href}>
      <span className={linkClass}>{text}</span>
    </Link>
  );
};

const Navbar: React.FC<NavbarProps> = ({ toggleTheme }) => {
  const navLinks = [
    { href: '/features', text: 'Features' },
    { href: '/pricing', text: 'Pricing' },
    { href: '/contact', text: 'Contact' },
  ];

  const toggleButtonClass = `rounded-full bg-gray-100 px-3 py-2 text-gray-600 shadow-md transition hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600`;

  return (
    <header className="bg-white shadow-md dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          FrontIQs
        </div>

        <nav className="hidden space-x-6 md:flex">
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.href} text={link.text} />
          ))}
        </nav>

        <div>
          <button onClick={toggleTheme} className={toggleButtonClass}>
            Toggle Theme
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
