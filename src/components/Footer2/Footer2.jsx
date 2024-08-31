import React from 'react';
import "./Footer2.css";
const Footer = () => {
  return (
    <footer className='px-4 py-5 grid bg-zinc-900 h-fit grid-rows-2 grid-cols-3 grid-flow-col gap-1 w-full text-white'>
      <div className='p-3 mt-6'>
      <a href='#' className='w-auto h-max-100'>
        <img className='p-4 h-40 filter invert' src="logo.png" alt="Logo" />
      </a>
      </div>

      <div className='m-9 col-span-3'>
          <hr className="border-t border-gray-600 my-6" />
          <p className='text-sm text-gray-400'>2024 &copy; All rights reserved
            </p>

      </div>
      <div className='p-3 m-3 '>
        <h3 className='m-3'>Stamp letter</h3>
        <h3 className='m-3'>Stamps</h3>
        <h3 className='m-3'>Stamps</h3>
        <h3 className='m-3'>Stamps</h3>
      </div>
      <div className='p-3 m-3 '>
        <h2 className='text-slate-50 font-bold'>Connect With Us </h2>
        <div>here we can insert logo of our social media community</div>
      </div>
      </footer>
  );
};

export default Footer;
