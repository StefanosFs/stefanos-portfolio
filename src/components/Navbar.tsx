import { useState } from 'react';
import { Link } from 'react-scroll';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/sf-logo.png'

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm dark:bg-primary shadow-lg dark:shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white"><img 
            src={logo} 
            alt="logo"
            className="h-16 w-16 rounded-full object-cover shadow-md pt-3"
            /></h1>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white cursor-pointer transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-tertiary transition-colors duration-200 text-gray-600 dark:text-gray-300"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-tertiary transition-colors duration-200 text-gray-600 dark:text-gray-300"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-primary">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white cursor-pointer transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleDarkMode();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 