import React, { useEffect, useState } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/cartSlice';
import { useToast } from './Toast'

function Eyes({ isOpen, onClose, selectedEquipment, containerRef }) {
  const showToast = useToast();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setScrollPosition(window.scrollY);
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
      
      if (containerRef?.current) {
        containerRef.current.style.width = `calc(100% - ${scrollbarWidth}px)`;
      }
    }

    return () => {
      if (isOpen) {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        
        if (containerRef?.current) {
          containerRef.current.style.width = '';
        }
        
        window.scrollTo(0, scrollPosition);
      }
    };
  }, [isOpen, scrollPosition, containerRef]);

  if (!isOpen || !selectedEquipment) {
    return null;
  }

  const { id, title, image, price, discount, content } = selectedEquipment;

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => (prev < 10 ? prev + 1 : 10));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      image,
      title,
      discount,
      price,
      quantity
    }));
    showToast(title);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={handleClose}
    >
      <div 
        className="relative bg-white w-full max-w-3xl rounded-lg shadow-xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white z-10 px-4 py-3 border-b flex justify-between items-center">
          <h2 className="text-lg sm:text-xl font-semibold uppercase">Single Page</h2>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <span className="text-2xl font-bold">×</span>
          </button>
        </div>

        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-1/2 flex justify-center">
              <img 
                src={image} 
                alt={title || 'Image'} 
                className="w-[200px] sm:w-[300px] h-auto object-contain"
              />
            </div>

            <div className="w-full sm:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">
                {title}
              </h2>
              <p className="line-through text-gray-500">{discount}</p>
              <p className="text-lg font-semibold mb-2">₦{price}</p>
              <p className="text-gray-600 mb-6">{content}</p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <button 
                    onClick={handleDecrease}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium p-2 rounded"
                  >
                    -
                  </button>
                  <select 
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                    className="border border-gray-300 rounded px-3 py-2 w-20 text-center"
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  <button 
                    onClick={handleIncrease}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium p-2 rounded"
                  >
                    +
                  </button>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors" 
                >
                  ADD TO CART 
                  <CiShoppingCart className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;