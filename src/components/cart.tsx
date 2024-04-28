'use client'

import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'
import { cards } from './infocards';
import { CartComponent } from './cartComponent';

export const Cart = () => {
    const [products, setProducts] = useState([]);
    const [reset, setReset] = useState(false);

    const handleReset = () => {
        setReset(!reset);
    }

  useEffect(() => {
    const cookieProducts = Cookies.get('products');
    if (cookieProducts) {
      const parsedProducts = JSON.parse(cookieProducts);
      const detailedProducts = parsedProducts.map((product) => {
        const cardDetails = cards.find((card) => card.id === product.id);
        return {
          ...product,
          ...cardDetails,
        };
      });
      setProducts(detailedProducts);
    }
  }, [reset]);




  return (
    <div className='lg:flex lg:justify-center lg:w-full'>

      <div className="min-h-screen mt-16 lg:w-3/5">
        
        {
          products.map((product) => (
            <CartComponent key={product.productId} handleReset={handleReset}
            id={product.id} title={product.title} image={product.image} days={product.selectedDays} price={product.price} productId={product.productId}/>
          ))
        }
      </div>
    </div>
  )
}
