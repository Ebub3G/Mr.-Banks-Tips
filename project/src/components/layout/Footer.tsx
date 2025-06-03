// project/src/components/layout/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Mail, Phone, Instagram, Twitter, Facebook, Youtube, Calendar, Shield } from 'lucide-react';
import Container from '../ui/Container';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Trophy size={28} className="text-amber-500 mr-2" />
              <span className="text-xl font-bold text-white">
                Mr. Banks Tips
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Providing expert betting tips and analysis since 2018. Join thousands of winning members making smarter bets.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/premium" className="text-gray-400 hover:text-white text-sm transition-colors">Premium Plans</Link>
              </li>
              <li>
                <Link to="/results" className="text-gray-400 hover:text-white text-sm transition-colors">Results & Records</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Mr. Banks</Link> {/* Updated Link */}
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Sports</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sports/football" className="text-gray-400 hover:text-white text-sm transition-colors">Football</Link>
              </li>
              <li>
                <Link to="/sports/basketball" className="text-gray-400 hover:text-white text-sm transition-colors">Basketball</Link>
              </li>
              <li>
                <Link to="/sports/tennis" className="text-gray-400 hover:text-white text-sm transition-colors">Tennis</Link>
              </li>
              <li>
                <Link to="/sports/horse-racing" className="text-gray-400 hover:text-white text-sm transition-colors">Horse Racing</Link>
              </li>
              <li>
                <Link to="/sports" className="text-gray-400 hover:text-white text-sm transition-colors">View All Sports</Link> {/* Updated Link */}
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="text-amber-500 mr-2 h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">support@mrbankstips.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-amber-500 mr-2 h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">+1 (888) 555-TIPS</span>
              </li>
              <li className="flex items-start">
                <Calendar className="text-amber-500 mr-2 h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Available 7 days a week<br />9am - 11pm EST</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Mr. Banks Tips. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link> {/* Updated Link */}
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link> {/* Updated Link */}
            <div className="flex items-center">
              <Shield size={14} className="mr-1" />
              <span>Secure Payments</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-gray-600">
          <p>Betting can be addictive. Please gamble responsibly.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
