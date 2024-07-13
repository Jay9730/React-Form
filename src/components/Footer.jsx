import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-10 mt-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">My Application</h3>
          <p>&copy; 2024 My Application. All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/about" className="text-white hover:text-gray-300">About</a>
          <a href="/form" className="text-white hover:text-gray-300">Forms</a>
          <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
