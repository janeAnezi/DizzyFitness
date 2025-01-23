import React, { createContext, useState, useContext } from 'react';

const ToastContext = createContext();


export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toast && (
        <div className="fixed bottom-10 right-4 z-50 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out animate-bounce">
          🛒 {toast} 
        </div>
      )}
    </ToastContext.Provider>
  );
};


export const useToast = () => useContext(ToastContext);