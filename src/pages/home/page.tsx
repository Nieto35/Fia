import CardDesktop from '@/components/CardDesktop'
import ScrollToTopButton from '@/components/buttonUp'
import Card from '@/components/card'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HowBuy from '@/components/howBuy'
import Info from '@/components/info'
import Navbar from '@/components/navbar'
import News from '@/components/news'
import NewsDesktop from '@/components/newsDesktop'




export default function Home() {

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Header />
      </div>

      <Info/>
      <ScrollToTopButton />
      
      <div className='hidden lg:block'>
        <CardDesktop />
      </div>
      
      <div className='lg:hidden'>
        <Card />
      </div>

      <Info/>
      
      <HowBuy/>

      <div className='lg:hidden'>
        <News/>
      </div>

      <div className='hidden lg:block'>
        <NewsDesktop/>
      </div>
      <Footer />
    </>
  )
}
