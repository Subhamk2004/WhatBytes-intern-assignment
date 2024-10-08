import React from "react";

const Navbar = () => {
  return (
    <nav className='bg-white-500 p-2 sm:px-8 px-10 w-screen flex items-center border-b border-gray-200'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center sm:gap-1 gap-5'>
          <img
            src='/images/whatBytesLogo.jpeg'
            alt='Profile pic'
            className='sm:w-7 sm:h-7 w-10 h-10 rounded-full'
          />
          <div className='text-black font-bold sm:text-lg text-3xl'>WhatBytes</div>
        </div>

        <div className='flex items-center space-x-4 p-2 bg-white rounded-xl shadow-md mb-2 hover:shadow-blue-300 border hover:border-blue-500 border-blue-300 transition-all duration-500'>
          <img src="/images/user.png" 
          className="sm:w-5 w-10 "
          />

          <span className='text-black font-bold text-sm'>Subham Kumar</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

