'use client'

import Cookies from 'js-cookie'
import { useEffect, useState } from "react"
import { CiShoppingCart } from "react-icons/ci"
import { Modal } from "./modal"

const Calendar = ({selectedDays, setSelectedDays}: {selectedDays: any, setSelectedDays:any}) => {


  const handleDayClick = (index: number) => {
    setSelectedDays(prev => prev.map((selected, i) => i === index ? !selected : selected));
  };

  return (
    <div className='px-5 flex flex-wrap'>
      {['23', '24', '25', '26', '27'].map((day, index) => (
        <div
          key={day}
          onClick={() => handleDayClick(index)}
          className={`m-2 flex flex-col items-center justify-center text-2xl font-bold rounded-lg shadow-lg w-28 h-28 ${selectedDays[index] ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
        >
          <p className="text-xs uppercase">Octubre</p>
          <p className="text-6xl">{day}</p>
          <p className="text-xs uppercase">2024</p>
        </div>
      ))}
    </div>
  );
}

export const ViewCard = ({
  handlers,
  currentIndex,
  cards,
  handleReset
}: {
  handlers: any
  currentIndex: any
  cards: any[]
  handleReset: any
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [id, setId] = useState(null)
  const [selectedDays, setSelectedDays] = useState([false, false, false, false, false]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const handleOpen = (titleData: any, idData: any) => {
    setSelectedDays([false, false, false, false, false])
    setId(idData)
    setTitle(titleData)
    setIsOpen(true)
  }

  const handleAddToCart = () => {
    // Obtén los productos actuales de las cookies
    const currentProducts = Cookies.get('products');
  
    // Si ya existen productos, añade el nuevo producto al array existente
    if (currentProducts) {
      const products = JSON.parse(currentProducts);
      products.push({ id, selectedDays });
      Cookies.set('products', JSON.stringify(products));
    } else {
      // Si no existen productos, crea un nuevo array con el producto
      Cookies.set('products', JSON.stringify([{ id, selectedDays }]));
    }
    handleReset()
    setIsOpen(false)
  };

  const allDaysFalse = selectedDays.every(day => day === false);

  return (
    <div className="lg:justify-center lg:flex">
      <div
        {...handlers}
        className="carousel lg:grid lg:grid-cols-3 lg:w-4/5"
        style={{ overflow: 'hidden' }}
      >
        <div
          className="card-container"
          style={{
            display: 'flex',
            width: `${cards.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / cards.length)}%)`,
            transition: 'transform 0.5s'
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-3 "
              style={{ flex: '0 0 auto', width: `${100 / cards.length}%` }}
            >
              <div className="w-full mx-auto ">
                <div className=" ">
                  <div className="bg-white rounded-lg drop-shadow-xl transition-all duration-300 z-0">
                    <img className="mt-5 rounded-t-lg w-full h-64 " src={card.image} alt={card.title} />
                    <div className="py-4 px-8">
                      <div className="flex justify-between mt-4">
                        <div className="flex items-center text-secondary h-16">
                          {card.icon}
                          <h3 className="hover:cursor-pointer mt-2  font-bold text-2xl tracking-tight ml-5">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                      <div className="hover:cursor-pointer py-3 text-gray-600 leading-6 text-secondary h-24">
                        {card.description}
                      </div>

                      <button className="mt-5 bg-secondary text-white px-4 py-2 rounded-full font-black" onClick={() => handleOpen(card.title, card.id)}>
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} >
        <h2 className="text-center text-secondary font-extrabold m-5 ">{title}</h2>
        <h3 className="text-center text-secondary font-bold m-5">Selecciona los dias que vas a querer esta comida</h3>
          <Calendar selectedDays={selectedDays} setSelectedDays={setSelectedDays} />

          <div className="flex justify-center mt-8">
          <button 
  className={`mt-5 px-4 py-2 rounded-full font-black flex items-center ${allDaysFalse ? 'bg-gray-400 text-gray-700' : 'bg-secondary text-white'}`} 
  onClick={handleAddToCart}
  disabled={allDaysFalse}
>
              Añadir al carrito
              <CiShoppingCart size={30}/>
            </button>
          </div>
      </Modal>
    </div>
  )
}
