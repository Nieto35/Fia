'use client'
import CardDesktop from '@/components/CardDesktop'
import ScrollToTopButton from '@/components/buttonUp'
import Card from '@/components/card'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HowBuy from '@/components/howBuy'
import Info from '@/components/info'
import Navbar from '@/components/navbar'
import React from 'react'
import {useState} from 'react'
import { useLanguage } from '@/hooks/useLanguage'


export default function Home() {

  const [reset, setReset] = useState(false)

  const handleReset = () => {
    setReset(!reset)
  }

  return (
    < >

      <div className="flex flex-col bg-white">
        <Navbar />
        <Header />
      </div>
      <ScrollToTopButton reset={reset} />
      <Info/>
      
      <div id="cardSection">
        <div className='hidden lg:block'>
          <CardDesktop handleReset={handleReset} />
        </div>
        <div className='lg:hidden'>
          <Card  handleReset={handleReset}/>
        </div>
      </div>

      <div id="howToBuy">
        <HowBuy/>
      </div>      


      <Footer />
    </>
  )
}
