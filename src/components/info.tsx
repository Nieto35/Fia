export default function Info () {
  return (
    <div className="mt-16 relative lg:mt-56">
      <img src="https://nieto35.github.io/Fia/comida.webp" alt="" className="w-full object-cover h-[200px] " />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

      <div className="absolute inset-0 text-center z-10 max-w-80 top-5 left-0 right-0 mx-auto lg:max-w-4xl">
        <h2 className="text-white text-3xl font-black leading-none mb-4 mt-4 lg:text-7xl lg:mt-0">
          Elige tu opción favorita
        </h2>
        <p className="text-white text-lg leading-tight lg:text-3xl">
          Desliza hacia los lados para ver las opciones disponibles
        </p>
      </div>
    </div>
  )
}
