'use client'
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function CartPage() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const products = Cookies.get('products');
    if (products) {
      setCartProducts(JSON.parse(products));
    }
  }, []);

  const handleRemove = (id) => {
    const updatedProducts = cartProducts.filter(product => product.id !== id);
    setCartProducts(updatedProducts);
    Cookies.set('products', JSON.stringify(updatedProducts));
  };

  const handlePayment = () => {
    // Aquí puedes manejar el proceso de pago
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Mi carrito</h1>
      {cartProducts.map(product => (
        <div key={product.id} className="flex items-center justify-between p-4 mb-2 bg-white shadow rounded">
          <div>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
          </div>
          <button onClick={() => handleRemove(product.id)} className="text-red-500 hover:text-red-700 transition">Eliminar</button>
        </div>
      ))}
      <button onClick={handlePayment} className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Pagar</button>
    </div>
  );
}