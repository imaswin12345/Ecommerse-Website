import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        {/* Newsletter Signup */}
        <div className="md:col-span-1">
          <h3 className="text-lg text-gray-800 mb-4">Newsletters</h3>
          <p className="text-gray-500 mb-4">
            Be the first one to hear about our products, exclusive events, and online offers.
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">
            Sign up to get 10% off on your first order
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-r-md hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2">
            <li>
              <Link className="text-gray-600 hover:text-gray-500 transition-colors text-sm block" to="/mens-wear">
                Mens Wear
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-gray-500 transition-colors text-sm block" to="/womens-wear">
                Womens Wear
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-gray-500 transition-colors text-sm block" to="/top-wear">
                Top Wear
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-gray-500 transition-colors text-sm block" to="/bottoms">
                Bottoms
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link className="text-gray-600 hover:text-gray-500 transition-colors text-sm block" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-gray-500 transition-colors text-sm block" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-gray-500 transition-colors text-sm block" to="/faqs">
                FAQs
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-gray-500 transition-colors text-sm block" to="/features">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us / Social Icons */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-500 transition-colors text-xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-500 transition-colors text-xl"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-500 transition-colors text-xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-500 transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t pt-8 mt-8 text-center">
        <p className="text-gray-500 text-sm">
          &copy; 2025 Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;