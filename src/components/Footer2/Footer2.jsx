import React from 'react';
import { FaReddit } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




import "./Footer2.css";
const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='px-4 py-5 grid  h-fit grid-rows-1 grid-cols-4 grid-flow-col gap-1 w-full text-white'>
      <div className='p-3 mt-6'>
      <a href='#' className='w-auto h-max-100'>
        <img className='p-4 h-40 filter invert' src="logo.png" alt="Logo" />
      </a>
      </div>

      
      <div className='p-3 m-3 text-zinc-50 flex flex-col text-x'>
        <a href = '#' className='m-3 text-zinc-50'>Stamp letter</a>
        <a href = '#' className='m-3 text-zinc-50'>Explore</a>
        <a href = '#' className='m-3 text-zinc-50'>About Us</a>
        <a href = 'https://www.reddit.com/r/retrophil/' target="main" className='m-3 text-zinc-50'>Community</a>
      </div>

      
      <div className='p-3 m-3 text-zinc-50 flex flex-col text-x'>
        <a href = '#' className='m-3 text-zinc-50'>FDC Variety</a>
        <a href = '#' className='m-3 text-zinc-50'>Definitive</a>
        <a href = '#' className='m-3 text-zinc-50'>Stationary</a>
        <a href = '#' className='m-3 text-zinc-50'>More Stamps</a>
      </div>
      <div className='py-3 m-3 '>
        <h2 className='text-slate-50 font-bold text-xl'>Connect With Us </h2>
        <div className='flex py-8 gap-4'>
          <a href = 'https://www.reddit.com/r/retrophil/' target="main"><FaReddit  className='text-2xl'/></a>
          <FaXTwitter className='text-2xl'/>
          <FaLinkedin className='text-2xl' />
          <FaInstagram className='text-2xl'/>


        </div>
      </div>
      </div>
      
      </footer>
  );
};

export default Footer;