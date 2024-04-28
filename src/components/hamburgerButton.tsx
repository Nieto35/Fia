import { MOBILE_MENU_CONTENT_ID } from '@/const/mobile-menu'

const width = 'w-6'
const genericHamburgerLine = `h-[2px] ${width} bg-secondary transition ease transform duration-300`

export const HamburgerButton = ({
  toggleMenu,
  isOpen
}: {
  toggleMenu: () => any
  isOpen: boolean
}) => {
  return (
    <button
      aria-expanded={isOpen ? 'true' : 'false'}
      aria-controls={MOBILE_MENU_CONTENT_ID}
      className={`hamburgerButton group relative flex h-[20px] flex-col items-center justify-between lg:hidden ${width}`}
      aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
      onClick={toggleMenu}
    >
      <span className={`${isOpen ? 'translate-y-2 rotate-45' : 'translate-y-0 rotate-0'} ${genericHamburgerLine}`}></span>
      <span className={`${isOpen ? 'opacity-0' : ''} ${genericHamburgerLine}`}></span>
      <span className={`${isOpen ? 'opacity-0' : ''} ${genericHamburgerLine}`}></span>
      <span className={`${isOpen ? '-translate-y-[0.6rem] -rotate-45' : 'translate-y-0 rotate-0'} ${genericHamburgerLine}`}></span>
    </button>
  )
}