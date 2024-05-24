import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=' bg-zinc-900'>
      <div className='flex justify-between items-center p-1'>
        <div className='text-white text-lg'>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
            ☰
          </button>
        </div>
      </div>
      <div className={`flex flex-col md:flex-row md:gap-5 text-center md:text-end md:justify-end p-4 md:mr-6 text-white ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <Link to="/" className='md:ml-5' onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" className='md:ml-5' onClick={() => setIsOpen(false)}>About Me</Link>
        <Link to="/resume" className='md:ml-5' onClick={() => setIsOpen(false)}>Resume</Link>
        <Link to="/contact" className='md:ml-5' onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
