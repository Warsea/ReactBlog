import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="border-b p-3 flex justify-between items-center fixed bg-gray-800 text-white w-full top-0 border-b-2 border-black">
      <span className="font-bold">AppName</span>

      <Navigation />
    </header>
  );
}

export default Header;
