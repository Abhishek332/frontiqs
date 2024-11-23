import Link from 'next/link';

import ToggleSwitch from '../toggle-switch/ToggleSwitch';

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

const Navbar = () => {
  const navLinks = [
    { href: '/features', text: 'Features' },
    { href: '/pricing', text: 'Pricing' },
    { href: '/contact', text: 'Contact' },
  ];

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
        <ToggleSwitch />
      </div>
    </header>
  );
};

export default Navbar;
