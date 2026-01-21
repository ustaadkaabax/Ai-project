
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Koorsooyinka', path: '/courses' },
    { name: 'Buugaagta', path: '/#buugaagta' },
    { name: 'Su\'aalo & Jawaabo', path: '/#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/logo.png.png" alt="Kaabax Academy Logo" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#1e3a8a] ${location.pathname === link.path ? 'text-[#1e3a8a] border-b-2 border-[#facc15] pb-1' : 'text-gray-600'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="p-2 text-gray-500 hover:text-gray-900">
              <Moon size={20} />
            </button>
            <Link
              to="/courses"
              className="bg-[#1e3a8a] text-white px-6 py-2 rounded-md font-semibold text-sm hover:bg-[#162e6e] transition-all"
            >
              Hadda Is-qor
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-900">
              <Moon size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/courses"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#1e3a8a] text-white px-6 py-3 rounded-md font-bold"
              >
                Hadda Is-qor
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
