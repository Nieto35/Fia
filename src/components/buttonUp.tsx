'use client'

import  { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import { CiShoppingCart } from "react-icons/ci"
import { useRouter } from 'next/navigation'


export default function ScrollToTopButton ({reset} : {reset: boolean}) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [productCount, setProductCount] = useState(0);
    const router = useRouter();

    useEffect(() => {
        // Obtén los productos actuales de las cookies
        const currentProducts = Cookies.get('products');

        // Si ya existen productos, actualiza el estado con la cantidad de productos
        if (currentProducts) {
            const products = JSON.parse(currentProducts);
            setProductCount(products.length);
        }
    }, [reset]);

    const handleClick = () => {
        router.push('/cart');
    };

    // Si no hay productos, no mostrar el botón
    if (productCount === 0) {
        return null;
    }

    return (
        <div id="button-up" className="fixed bottom-2 right-2  transition-opacity z-[100]">
            <button
                ref={buttonRef}
                id="scroll-to-top"
                aria-label="Volver al inicio de la página"
                className="group flex size-12 cursor-default items-center justify-center rounded-lg border-2 border-secondary bg-black/10 text-secondary backdrop-blur hover:scale-105 hover:border-accent motion-safe:transition"
                onClick={handleClick}
            >
                <CiShoppingCart size={30} />
                <span className="absolute top-0 right-0 inline-block w-6 h-6 bg-primary text-white text-sm rounded-full flex items-center justify-center">{productCount}</span>
            </button>
        </div>
    );
};