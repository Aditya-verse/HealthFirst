
import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, TwitterIcon, FacebookIcon, InstagramIcon } from './icons/Icons';


const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <HeartIcon className="h-8 w-8 text-dark-green" />
                <span className="text-2xl font-bold text-dark-green">Health First</span>
            </Link>
            <p className="mt-4 text-gray-500">Your health, our priority. We provide the best tools to help you live a healthier life.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/features" className="text-base text-gray-500 hover:text-dark-green">Features</Link></li>
              <li><Link to="/about" className="text-base text-gray-500 hover:text-dark-green">About Us</Link></li>
              <li><Link to="/contact" className="text-base text-gray-500 hover:text-dark-green">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-500 hover:text-dark-green">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-dark-green">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-6">
              <a href="#" className="text-gray-400 hover:text-dark-blue"><span className="sr-only">Facebook</span><FacebookIcon className="h-6 w-6"/></a>
              <a href="#" className="text-gray-400 hover:text-dark-blue"><span className="sr-only">Instagram</span><InstagramIcon className="h-6 w-6"/></a>
              <a href="#" className="text-gray-400 hover:text-dark-blue"><span className="sr-only">Twitter</span><TwitterIcon className="h-6 w-6"/></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Health First. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
