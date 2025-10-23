import React from 'react';

const CartContent = () => {
  const cartProducts = [
    { id: 1, name: 'Shirt', price: 29.99, size: 'XL',  image: 'https://picsum.photos/200?random=1' },
    { id: 2, name: 'Jeans', price: 49.99, size: 'L', image: 'https://picsum.photos/200?random=2' },
    { id: 3, name: 'Bag', price: 19.99, size: 'M',  image: 'https://picsum.photos/200?random=3' },
  ];

  // const getSubtotal = (price, quantity) => (price * quantity).toFixed(2);

  return (
    <div>
      {cartProducts.map((product) => (
        <div key={product.id} className='flex items-start justify-between py-4 border-b border-gray-200 last:border-b-0'>
          <div className='flex items-center'>
            <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4 rounded' />
          </div>

          <div className='flex-1 ml-4'>
            <h3 className='text-lg font-semibold mb-1'>{product.name}</h3>
            <p className='text-sm text-gray-600 mb-1'>Size: {product.size}</p>
            {/* <p className='text-sm text-gray-600 mb-1'>Qty: {product.quantity}</p> */}
            <p className='text-sm text-gray-600'>${product.price}</p>
          </div>

          <div className='text-right'>
            <p className='text-lg font-semibold'>${(product.price)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;