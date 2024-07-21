import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">MyCompany</h2>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
            <ul className="text-sm space-y-1">
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
