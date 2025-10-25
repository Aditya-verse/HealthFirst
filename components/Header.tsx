
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MenuIcon, XIcon, HeartIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive ? 'bg-pastel-green text-dark-green' : 'text-gray-600 hover:bg-pastel-blue hover:text-dark-blue'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
      isActive ? 'bg-pastel-green text-dark-green' : 'text-gray-600 hover:bg-pastel-blue hover:text-dark-blue'
    }`;

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <HeartIcon className="h-8 w-8 text-dark-green" />
                <span className="text-2xl font-bold text-dark-green">Health First</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/features" className={navLinkClass}>Features</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {isAuthenticated ? (
              <>
                <NavLink to={user?.role === 'admin' ? '/admin' : '/dashboard'} className={navLinkClass}>Dashboard</NavLink>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-dark-green hover:bg-green-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="px-4 py-2 rounded-md text-sm font-medium text-dark-green hover:bg-pastel-blue transition-colors">
                  Login
                </NavLink>
                <NavLink to="/signup" className="px-4 py-2 rounded-md text-sm font-medium text-white bg-dark-green hover:bg-green-700 transition-colors">
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-medium-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/features" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Features</NavLink>
            <NavLink to="/about" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink to="/contact" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-2">
              {isAuthenticated ? (
                <>
                  <NavLink to={user?.role === 'admin' ? '/admin' : '/dashboard'} className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Dashboard</NavLink>
                  <button
                    onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                    className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-pastel-blue hover:text-dark-blue"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/login" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Login</NavLink>
                  <NavLink to="/signup" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Sign Up</NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
