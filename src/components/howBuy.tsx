import { LuBeef } from "react-icons/lu";
import { BsBox2 } from "react-icons/bs";
import { BsHouseDoor } from "react-icons/bs";
import { PiBowlFoodThin } from "react-icons/pi";
import { PiCalendarLight } from "react-icons/pi";
import { BsQrCode } from "react-icons/bs";

export default function HowBuy() {
  return (
    <div className="">
      <h2 className='text-center text-secondary text-3xl font-black leading-none mb-4 mt-24 lg:text-5xl'>
        ¿Cómo comprar?
      </h2>

      <div className="w-full lg:flex lg:justify-center">

        <div className="lg:w-4/5 lg:grid lg:grid-cols-3 mt-10">
            <div className="relative border-l-[6px] lg:border-l-[0px]  ml-8 lg:ml-0 pl-10 text-secondary  pr-5 lg:mt-0 lg:pt-16">
            <div className="lg:flex lg:justify-center">
                <PiBowlFoodThin size={100} className="text-secondary"/>
            </div>
                <h3 className="text-secondary text-2xl font-bold text-left mt-5 lg:text-center">
                <span className="hidden lg:inline">1. </span>
                    Elección de plato</h3>
                <p className="mt-2 text-left lg:text-center">
                    
                    Elige el plato que más te guste de nuestras opciones.
                </p>
                <div className="lg:hidden absolute top-20 -left-7 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl">1</span>
                </div>
            </div>
            <div className="relative border-l-[6px] lg:border-l-[0px]  ml-8 lg:ml-0 pl-10 text-secondary pr-5 pt-16">
                <div className="lg:flex lg:justify-center">

                    <PiCalendarLight size={100} className="text-secondary"/>
                </div>
                <h3 className="text-secondary text-2xl font-bold text-left mt-5 lg:text-center">
                <span className="hidden lg:inline">2. </span>
                    Selecciona los días</h3>
                <p className="mt-2 text-left lg:text-center">Podras seleccionar los días en los cuales quieres ese menú.</p>
                <div className="lg:hidden absolute top-36 -left-7 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl">2</span>
                </div>
            </div>
            <div className="relative border-l-[6px] lg:border-l-[0px]  ml-8 lg:ml-0 pl-10 text-secondary pr-5 pt-16">
            <div className="lg:flex lg:justify-center">
                <BsQrCode size={100} className="text-secondary"/>
            </div>
                <h3 className="text-secondary text-2xl font-bold text-left mt-5 lg:text-center">
                <span className="hidden lg:inline">3. </span>
                Pagar y descargar QR</h3>
                <p className="mt-2 text-left lg:text-center">Podras darle al carrito, despues de pagar recibiras un QR en tu correo el cual debes presentar el día del evento.</p>
                <div className="lg:hidden absolute top-36 -left-7 w-12 h-12 bg-secondary rounded-full flex items-center justify-center ">
                    <span className="text-white text-4xl">3</span>
                </div>
            </div>

        </div>
      </div>


    </div>
  )
}
