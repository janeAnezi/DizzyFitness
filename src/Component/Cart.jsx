import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removefromCart, updateQuantity, clearCart } from './redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const cartItems = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  
  const token = localStorage.getItem('token');


  if (!token) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-yellow-900">Please Log In</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to view your cart.</p>
          <Link 
            to="/login" 
            className="bg-yellow-900 text-white px-4 py-2 rounded-md hover:bg-yellow-800 transition"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

 
  const totalAmount = cartItems.reduce((total, item) => total + Number(item.price.replace(/,/g, '')) * item.quantity, 0);

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(newQuantity) }));
  };

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      setError('Your cart is empty');
      return;
    }
    
    
    console.log('Proceeding to checkout with total:', totalAmount);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-center gap-4 border-b py-4">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">₦{item.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <select
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => dispatch(removefromCart({id: item.id}))}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
                <div className="font-semibold">
                  ₦{(Number(item.price.replace(/,/g, '')) * item.quantity).toLocaleString()}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>

        <div className="lg:w-1/3">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-semibold">₦{totalAmount.toLocaleString()}</span>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <Link to='/payment'>
              <button 
                onClick={handleProceedToCheckout}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;