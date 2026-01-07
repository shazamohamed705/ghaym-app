import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Ghaym. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
