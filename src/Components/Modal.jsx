import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="modal-container flex ">
      <button 
        className="modal-btn bg-blue-600 text-white py-3 px-6 rounded-md shadow-lg transition-colors duration-300 hover:bg-blue-700" 
        onClick={toggleModal}
      >
        Click me
      </button>
      
      {isOpen && (
        <>
          <div 
            className="modal-backdrop fixed inset-0 bg-black bg-opacity-60 z-40" 
            onClick={toggleModal}
          ></div>
          
          <div className="modal-content fixed bg-white w-96 max-w-full p-6 rounded-md shadow-lg z-50 left-1/2 top-1/4 transform -translate-x-1/2">
            <button 
              className="modal-close absolute top-2 right-2 text-gray-400 hover:text-gray-700" 
              onClick={toggleModal}
            >
              &times;
            </button>
            <h2 className="text-2xl mb-4">Modal title</h2>
            <hr />
            <p className="mt-4">Hello from inside the modal!</p>
            <button 
              className="modal-content-btn bg-blue-600 text-white py-1 px-4 rounded-md mt-6 transition-colors duration-300 hover:bg-blue-700" 
              onClick={toggleModal}
            >
              OK
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
