import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300 px-3">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300 px-3">About</Link>
            </li>
            <li>
              <Link to="/form" className="text-white hover:text-gray-300 px-3">Form</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300 px-3">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
