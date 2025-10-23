import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';


const CartContent = () => {
  const cartProducts = [
    { id: 1, name: 'Shirt', price: 29.99, quantity: 1, size: 'XL', color: "White", image: 'https://picsum.photos/200?random=1' },
    { id: 2, name: 'Jeans', price: 49.99, quantity: 1, size: 'L', color: "Black", image: 'https://picsum.photos/200?random=2' },
    { id: 3, name: 'Bag', price: 19.99, quantity: 1, size: 'M', color: "Green", image: 'https://picsum.photos/200?random=3' },
  ];

  const getSubtotal = (price, quantity) => (price * quantity).toFixed(2);

  return (
    <div className="space-y-4">
      {cartProducts.map((product) => (
        <div key={product.id} className="flex items-start justify-between py-4 border-b border-gray-200 last:border-b-0">
          <div className="flex items-center">
            <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4 rounded" />
          </div>

          <div className="flex-1 ml-2">
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-1">Size: {product.size}</p>
            <p className="text-sm text-gray-600 mb-1">Color: {product.color}</p>
            <div className="flex items-center mt-2">
              <button className="border rounded px-2 py-1 mr-2">-</button>
              <span className="mx-2 text-sm font-medium">{product.quantity}</span>
              <button className="border rounded px-2 py-1 ml-2">+</button>
            </div>

         
          </div>

          <div className="text-right">
            <p className="text-lg font-semibold">${getSubtotal(product.price, product.quantity)}</p>
             
        <button>
            <RiDeleteBinLine className='h-5 w-5 mt-2 mr-4 text-red-600'/> 
        </button>
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;