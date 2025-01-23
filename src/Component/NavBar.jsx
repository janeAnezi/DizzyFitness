import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoPulseSharp } from 'react-icons/io5';
import { FaBarsStaggered } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const { totalQuantity } = useSelector((state) => state.cart);
  const [isNavOpen, setIsNavOpen] = useState(false); 
  const token = localStorage.getItem('token');  
  const cartItems = useSelector(state => state.cart.cart);

  const toggleNavHandler = () => {
    setIsNavOpen(!isNavOpen); 
  };

  const closeNavHandler = () => {
    setIsNavOpen(false); 
  };

  const logoutHandler = () => {
    localStorage.removeItem('token');  
    navigate('/');  
  };

  // Helper function to apply active class
  const getNavLinkClass = (path) => (
    location.pathname === path 
      ? 'text-blue-900 border-b-2 border-blue-900 transform transition-300' 
      : 'text-gray-600'
  );

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
          } flex-col md:flex md:flex-row items-center text-xs gap-6 absolute md:static top-20 left-0 w-full md:w-auto  bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-50`}
        >
          <li><Link to="/home" className={getNavLinkClass('/home')} onClick={closeNavHandler}>HOME</Link></li>
          <li><Link to="/products" className={getNavLinkClass('/products')} onClick={closeNavHandler}>PRODUCTS</Link></li>
          <li><Link to="/services" className={getNavLinkClass('/services')} onClick={closeNavHandler}>SERVICES</Link></li>
          <li><Link to="/about" className={getNavLinkClass('/about')} onClick={closeNavHandler}>ABOUT</Link></li>
          <li><Link to="/benefits" className={getNavLinkClass('/benefits')} onClick={closeNavHandler}>BENEFITS</Link></li>
          <li><Link to="/freetips" className={getNavLinkClass('/freetips')} onClick={closeNavHandler}>FREE-TIPS</Link></li>
          <li className='md:hidden text-lg -mt-2' ><Link to='/register' className={getNavLinkClass('/register')} onClick={closeNavHandler}>Join</Link></li>
        </ul>
        
        <div className=' flex gap-3 mx-3' >
          <Link to="/cart" className="relative">
            <div className='flex text-green-600'><TiShoppingCart className="text-2xl" /> <h4> <small>{cartItems.length}</small></h4></div>
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalQuantity}
              </span>
            )}
          </Link>
          {token ? (
            <button 
              onClick={logoutHandler} 
              className="bg-red-600 text-white px-2 py-1 text-xs rounded-md hover:bg-red-500 transition"
            >
              LOGOUT
            </button>
          ) : (
            <Link 
              className="bg-yellow-900 text-white px-2 py-1 text-xs rounded-md hover:bg-yellow-800 transition hidden md:block" 
              to="/register"
              onClick={closeNavHandler}
            >
              JOIN
            </Link>
          )}
        </div>

        
      </div>
    </nav>
  );
};

export default NavBar;
