// components/Modal.js
import React, { useState, useEffect } from 'react';
import Form from '../Form/Form'; 

const Modal = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-50">
      {/* Increased z-index to z-[100] to ensure it appears above the Circles */}
      <div className="relative bg-white rounded-lg w-[90%] max-w-md mx-auto md:max-w-lg lg:max-w-xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 focus:outline-none z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-4 md:p-6">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Modal;