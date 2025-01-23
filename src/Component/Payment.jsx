import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from './redux/cartSlice';

const PaymentModal = ({ isOpen, onClose, totalAmount }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const dispatch = useDispatch();

  const handlePaymentSubmit = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    // Payment processing logic would go here
    // For now, we'll just simulate a successful payment
    alert(`Payment of ₦${totalAmount.toLocaleString()} processed successfully using ${paymentMethod}`);
    
    // Clear cart after successful payment
    dispatch(clearCart());
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center">
            <input 
              type="radio" 
              id="credit-card" 
              name="payment" 
              value="Credit Card"
              checked={paymentMethod === 'Credit Card'}
              onChange={() => setPaymentMethod('Credit Card')}
              className="mr-2"
            />
            <label htmlFor="credit-card">Credit Card</label>
          </div>
          
          <div className="flex items-center">
            <input 
              type="radio" 
              id="paypal" 
              name="payment" 
              value="PayPal"
              checked={paymentMethod === 'PayPal'}
              onChange={() => setPaymentMethod('PayPal')}
              className="mr-2"
            />
            <label htmlFor="paypal">PayPal</label>
          </div>
          
          <div className="flex items-center">
            <input 
              type="radio" 
              id="bank-transfer" 
              name="payment" 
              value="Bank Transfer"
              checked={paymentMethod === 'Bank Transfer'}
              onChange={() => setPaymentMethod('Bank Transfer')}
              className="mr-2"
            />
            <label htmlFor="bank-transfer">Bank Transfer</label>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button 
            onClick={onClose}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button 
            onClick={handlePaymentSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

function Payment() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.cart);
  
  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => 
    total + Number(item.price.replace(/,/g, '')) * item.quantity, 0
  );

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Existing cart content */}
      <div className="lg:w-1/3">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span className="font-semibold">₦{totalAmount.toLocaleString()}</span>
          </div>
          <button 
            onClick={() => setIsPaymentModalOpen(true)}
            disabled={cartItems.length === 0}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        totalAmount={totalAmount}
      />
    </div>
  );
}

export default Payment;