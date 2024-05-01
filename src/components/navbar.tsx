'use client'
import { HeroLogo } from './heroLogo'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'
import { DrawnXLogo } from './drawnXLogo'
import { HamburgerButton } from './hamburgerButton'
import React, { useContext, useState } from 'react'
import SEO from './SEO'
import { useLanguage } from '@/hooks/useLanguage'
import { langContext } from '@/context/langContext'


export default function Navbar()  {
  const { changeLanguage ,flagCode } = useContext(langContext);
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);

const pages = [
  {name: useLanguage({id: 'home'}), href: '/Fia'},
  {name: useLanguage({id: 'menus'}), href: '#cardSection'},
  {name: useLanguage({id: 'how_to_buy'}), href: '#howToBuy'},
].map((page) => ({
  ...page,
  active: pathname === page.href
}))
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <header className="mb-1 h-16 max-w-[100vw] lg:h-24">
      <SEO canonical='https://FiaValencia.com/' title="Fia Valencia" description="Web Oficial de Fia Valencia, pagina para comprar comida Valencia." image='/LOGO-PLACITA-WEB.jpg' />
      <nav className="group flex h-full w-full items-center justify-between px-6 lg:justify-center">
      {
        pages.map(({ name, href, active }, key) => (
          <React.Fragment key={key}>
            <a
              key={key}
              href={href}
              className={`current-page nav-item relative hidden h-full select-none flex-col items-center justify-center gap-1 text-center text-xl uppercase lg:flex lg:px-7 xl:px-10 ${!active ? 'text-secondary' : 'text-secondary '} relative overflow-hidden`}
        
            >
              {active && <div className="absolute top-0 left-0 w-full border-t-8 border-secondary"></div>}
              <span className='font-bold text-xl'>{name}</span>
              <div className="absolute inset-0 bg-gradient-to-b from-secondary to-transparent transition-opacity duration-800 ease-in-out opacity-0 hover:opacity-100 current-page">
                
              </div>
            </a>
            {key === 1 && <div className="hidden w-64 lg:block" />}
          </React.Fragment>
        ))
      }
      <div className="flex items-center gap-4 px-2 h-full">
        <div className="flex items-center gap-2 cursor-pointer h-full relative overflow-hidden" onClick={() => changeLanguage('en-GB')}>
          <img src='https://nieto35.github.io/Fia/language/english.svg' alt="English" className={`w-10 h-6 object-cover ${flagCode === 'gb' ? 'border-2 border-secondary' : ''}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary to-transparent transition-opacity duration-800 ease-in-out opacity-0 hover:opacity-100"></div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer h-full relative overflow-hidden" onClick={() => changeLanguage('es-ES')}>
          <img src='https://nieto35.github.io/Fia/language/Bandera_de_Espana.svg' alt="Español" className={`w-10 h-6 object-cover ${flagCode === 'es' ? 'border-2 border-secondary' : ''}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary to-transparent transition-opacity duration-800 ease-in-out opacity-0 hover:opacity-100"></div>
        </div>
      </div>
       
        <HamburgerButton toggleMenu={toggleMenu} isOpen={isOpen} />
        <div className={`fixed inset-0 z-[888] flex w-screen flex-col items-center overflow-x-auto bg-background-color px-10 lg:hidden ${!isOpen && 'hidden'}`} >
          <aside className="flex min-h-16 w-full items-center justify-between">
            <DrawnXLogo />
            <HamburgerButton toggleMenu={toggleMenu} isOpen={isOpen}/>
          </aside>
          <div className="flex min-h-2 w-full items-center">
            <hr
              className="h-[2px] w-full border-t-0"
              style={{
                background: 'linear-gradient(to right, transparent 0%, #003971 50%, transparent 100%)'
              }}
            />
          </div>
          <nav className="flex w-full flex-col items-center gap-5">
            <img
              src="https://nieto35.github.io/Fia/logos/fia-motorsport-games-2024-neg.svg"
              alt="la placita logo"
              className="accent-drop-shadow my-4 max-w-60 drop-shadow-lg"
              loading="lazy"
            />
            <hr
              className="h-[2px] w-full border-t-0"
              style={{
                background: 'linear-gradient(to right, transparent 0%, #003971 50%, transparent 100%)'
              }}
            />
            {pages.map(({  name, href, active }, key) => (
              <React.Fragment key={key}>
                <a
                  href={href}
                  className={
                    'relative flex flex-col items-center justify-center gap-2 text-xl capitalize'
                  }
                 
                >
                  <span className="relative z-10 uppercase text-secondary">{name}</span>
                  {active && <div className="absolute -left-5 h-3 w-3 bg-secondary rounded-full mr-2"></div>}
                </a>
                <hr
                  className="h-[2px] w-full border-t-0"
                  style={{
                    background:
                      'linear-gradient(to right, transparent 0%, #003971 50%, transparent 100%)'
                  }}
                />
              </React.Fragment>
            ))}
          </nav>
        </div>
      </nav>

      <div className="relative flex h-2 w-full flex-col items-center">
        <div
          className={
            styles.gridBottomBarContainer + ' absolute grid w-full items-center justify-between'
          }
        >
          <div
            className="h-[2px] w-full rounded-l-[30%] border-t-0"
            style={{
              background: 'linear-gradient(to right, transparent 3%, #003971  35%, #003971  100%)'
            }}
          ></div>
          <div className="-ml-[4px] -mr-[4px]">
            <a href="/Fia">
              <HeroLogo />
            </a>
          </div>

          <div
            className="h-[2px] w-full rounded-r-[30%] border-t-0 bg-white"
            style={{
              background: 'linear-gradient(to left, transparent 3%, #003971 35%, #003971 100%)'
            }}
          ></div>
        </div>
      </div>
    </header>
  )
}

{
  /* <div className="gridBottomBarContainer absolute grid w-full items-center justify-between"></div> */
}
