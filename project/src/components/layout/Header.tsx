import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'Results', path: '/results' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-purple-600">
            MrBanksTips
          </Link>

          {/* Navigation */}
          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive ? 'text-purple-600' : 'text-gray-700 hover:text-purple-500'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
