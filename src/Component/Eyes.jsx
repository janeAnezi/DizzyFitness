import React, { useEffect, useState } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/cartSlice'; 

function Eyes({ isOpen, onClose, selectedEquipment }) {
  const [quantity, setQuantity] = useState(1);
  const [scrollY, setScrollY] = useState(0); // Store scroll position when modal opens

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = -scrollY + 'px';
      document.body.style.width = '100%';
    } else {
      const scrollY = parseInt(document.body.style.top.replace('-', ''));
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    }
  
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);





  if (!isOpen || !selectedEquipment) {
    return null;
  }

  const { title, image, price, discount, content } = selectedEquipment;

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); 
  };

  const handleIncrease = () => {
    setQuantity((prev) => (prev < 10 ? prev + 1 : 10)); // Ensure it doesn't exceed 10
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(selectedEquipment)); // Dispatch addToCart thunk with product data
  };




  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      style={{ zIndex: 1050 }}
    >
      <div className="bg-white text-center p-5 max-h-[90vh] overflow-y-auto w-[90%] z-50 rounded shadow-xl">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4 mt-6 uppercase mx-20">Single Page</h2>
          <button 
            onClick={onClose} 
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-8 rounded inline-flex items-center mt-5"
          >
            <span className="text-xl font-bold">×</span>
          </button>
        </div>

        <div className="max-w-7xl mx-10 my-12 flex flex-col md:flex-row gap-12">
          <div className="lg:w-3/4 mx-auto flex flex-col md:flex-row gap-5">
            <img src={image} alt={title || 'Image'} className="w-[100px] md:w-[300px]" />
            <div>
              <h2 className="text-3xl font-bold mb-4 text-orange-500 cursor-pointer mt-8">
                {title}
              </h2>
              <p className="line-through">{discount}</p>
              <p>₦{price}</p>
              <p className="py-3">{content}</p>

              {/* Quantity Selector */}
              <div className='flex gap-4 items-center justify-center w-full'>
                <div className="flex items-center gap-3 my-4">
                  <button 
                    onClick={handleDecrease} 
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-3 rounded"
                  >
                    -
                  </button>
                  <select 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                    className="border border-gray-300 rounded px-2 py-1"
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <button 
                    onClick={handleIncrease} 
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-3 rounded"
                  >
                    +
                  </button>
                </div>

                <div>
                  <button className="text-white w-full py-2 bg-blue-700 flex items-center justify-center gap-2" onClick={handleAddToCart}>
                    ADD TO CART 
                    <CiShoppingCart className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
