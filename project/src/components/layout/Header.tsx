import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Trophy, User, Search } from 'lucide-react';
import { sports, getSportIcon } from '../../data/sportsData';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSportsDropdownOpen, setIsSportsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Trophy size={28} className="text-amber-500 mr-2" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 text-transparent bg-clip-text">
              Mr. Banks Tips
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsSportsDropdownOpen(!isSportsDropdownOpen)}
              >
                Sports <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Sports Dropdown */}
              <AnimatePresence>
                {isSportsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden z-20 py-1"
                    onMouseLeave={() => setIsSportsDropdownOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-1 p-2">
                      {sports.map(sport => (
                        <Link
                          key={sport.id}
                          to={sport.route}
                          className="flex items-center p-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md"
                        >
                          {React.createElement(getSportIcon(sport.icon), { size: 16, className: 'mr-2' })}
                          {sport.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
              Blog
            </Link>
            
            <Link to="/results" className="text-gray-700 hover:text-blue-600 font-medium">
              Results
            </Link>
            
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Search and Login */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600">
              <Search size={20} />
            </button>
            <Button variant="outline" size="sm">
              <User size={16} className="mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col mt-4 space-y-4 pb-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                  Home
                </Link>
                
                {/* Mobile Sports Dropdown */}
                <div className="space-y-2">
                  <div className="font-medium text-gray-700">Sports</div>
                  <div className="grid grid-cols-2 gap-2 pl-2">
                    {sports.slice(0, 6).map(sport => (
                      <Link
                        key={sport.id}
                        to={sport.route}
                        className="flex items-center text-sm text-gray-600 hover:text-blue-600"
                      >
                        {React.createElement(getSportIcon(sport.icon), { size: 14, className: 'mr-1' })}
                        {sport.name}
                      </Link>
                    ))}
                  </div>
                  <Link 
                    to="/sports"
                    className="text-sm text-blue-600 font-medium pl-2"
                  >
                    View All Sports
                  </Link>
                </div>
                
                <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                  Blog
                </Link>
                
                <Link to="/results" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                  Results
                </Link>
                
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                  Contact
                </Link>
                
                <div className="pt-2">
                  <Button variant="outline" fullWidth>
                    <User size={16} className="mr-2" />
                    Login
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export default Header;
