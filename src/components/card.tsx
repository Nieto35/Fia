'use client'
import { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import { ViewCard } from './viewCard'
import { cards } from './infocards'

export default function Card ({handleReset}: {handleReset: any}) {
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

        <ViewCard handlers={handlers} currentIndex={currentIndex} cards={cards} handleReset={handleReset}/>
    )
}