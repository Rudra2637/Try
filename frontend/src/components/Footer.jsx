import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">
              DoctorSearch
            </h2>
            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              Helping you find trusted doctors quickly and easily.
              Your health is our priority.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-sm">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <Link to="/search" className="hover:text-white transition">
              Search Doctors
            </Link>
            <Link to="/about" className="hover:text-white transition">
              About Us
            </Link>
            <Link to="/help" className="hover:text-white transition">
              Help
            </Link>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} DoctorSearch. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;