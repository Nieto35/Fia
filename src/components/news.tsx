'use client'
import { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'

export default function News  () {
  const cards = [
    {
      image: '/news/h13h.png',
      title: 'h13h',
      link: "https://www.h13n.com/placita-delivery-un-espacio-para-emprendedores-y-campesinos/77318/",
      description: <p>Con el objetivo de apoyar la reactivación económica, se trabaja bajo el lema de Kilómetro cero.</p>
    },
    {
      image: '/news/medellin.png',
      title: 'Alcaldia medellin',
      link: "https://twitter.com/AlcaldiadeMed/status/1290999886276710400",
      description: <p>@FiaValencia apoya a productores rurales con la entrega de domicilios de manera sostenible.</p>
    }

    // Add as many cards as you want
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((currentIndex + 1) % cards.length),
    onSwipedRight: () => setCurrentIndex((currentIndex - 1 + cards.length) % cards.length),
    trackMouse: true
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % cards.length)
    }, 5000) // Change card every 3 seconds

    return () => clearInterval(interval) // Clean up on component unmount
  }, [currentIndex])

  return (
    <div className="flex justify-center items-center mt-12">
      <div className="w-4/5 border-t-2 border-secondary py-14">
        <div className="lg:flex lg:justify-center ">
          <div
            {...handlers}
            className="carousel lg:grid lg:grid-cols-2 lg:w-4/5"
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
                    <a href={card.link} target="_blank" className="cursor-pointer">
                      <div className="bg-white rounded-lg transition-all duration-300 z-0">
                        <div className='flex justify-center relative'>
                            <img
                                className="mt-5 rounded-t-lg w-52 h-24"
                                src={card.image}
                                alt={card.title}
                            />
                            <div className='h-1 w-12 absolute -bottom-5 bg-secondary self-center' />
                        </div>
                        <div className="py-4 px-8">
                          <div className="hover:cursor-pointer text-secondary leading-6 text-center mt-5">
                            {card.description}
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
