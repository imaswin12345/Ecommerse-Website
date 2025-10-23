import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import CartContent from '../Cart/CartContet'; 

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 
       ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      {/* Close button */}
      <div className='flex justify-end p-4 border-b'>
        <button onClick={toggleCartDrawer}>
          <IoMdClose className='h-6 w-6 text-gray-600 hover:text-gray-800 transition-colors' />
        </button>
      </div>

      {/* Scrollable cart content */}
      <div className='flex-grow p-4 overflow-y-auto'>
        <h2 className='text-2xl font-medium mb-4'>Your Cart</h2>
        <CartContent />
      </div>

      {/* Fixed checkout section at bottom */}
      <div className='p-4 bg-white border-t flex-shrink-0'>
        <button className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors'>
          Checkout
        </button>
        <p className='text-sm text-gray-500 mt-2 text-center tracking-tight'>
          Shipping, Taxes, and Discount Codes Calculated at Checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;   