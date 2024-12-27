import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoPulseSharp } from 'react-icons/io5';
import { FaBarsStaggered } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); 

  const toggleNavHandler = () => {
    setIsNavOpen(!isNavOpen); 
  };

  const closeNavHandler = () => {
    setIsNavOpen(false); 
  };

  return (
    <nav className="text-slate-400 w-screen h-14 grid place-items-center fixed top-0 left-0 z-20 border-b-4 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        <Link to="/" className="block w-[100px]" onClick={closeNavHandler}>
            <p className='text-xs text-slate-500 flex items-center'>  
              DIZZY <IoPulseSharp className="text-2xl text-yellow-900" /> <span className='text-lime-500 ml-1'>FIT</span>NESS
            </p>
        </Link>
        <button
          className="text-xl md:hidden"
          onClick={toggleNavHandler}
        >
          {isNavOpen ? <AiOutlineClose /> : <FaBarsStaggered />}
        </button>
        <ul
          className={`${
            isNavOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row items-center text-xs gap-6 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-20`}
        >
          <li><Link to="/" onClick={closeNavHandler}>HOME</Link></li>
          <li><Link to="/products" onClick={closeNavHandler}>PRODUCTS</Link></li>
          <li><Link to="/services" onClick={closeNavHandler}>SERVICES</Link></li>
          <li><Link to="/about" onClick={closeNavHandler}>ABOUT</Link></li>
          <li><Link to="/benefits" onClick={closeNavHandler}>BENEFITS</Link></li>
          <li><Link to="/freetips" onClick={closeNavHandler}>FREE-TIPS</Link></li>
        </ul>
        <button className="bg-yellow-900 text-white px-2 py-1 text-xs rounded-md hover:bg-yellow-800 transition hidden md:block">
          <Link to="/register" onClick={closeNavHandler}>JOIN</Link>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
