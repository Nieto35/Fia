import { useLanguage } from "@/hooks/useLanguage"

export default function Footer() {
  return (
    <div className="bg-secondary text-white lg:grid lg:grid-cols-2 lg:pt-10 lg:pb-10 mt-16 pb-10">

        <div>

            <div className="flex justify-center pt-5">
                <img
                role="img"
                aria-label="Logo Fia Valencia"
                className="w-32"
                src="https://nieto35.github.io/Fia/logos/fia-motorsport-games-2024-white.svg"
                alt="logo Fia Valencia"
                />
            </div>
            <h2 className="text-center text-white mt-5 font-bold">
                {useLanguage({id: "follow_us_on_our_networks"})}</h2>

            <div className="flex justify-center mt-2">
                <div className="flex justify-around w-3/5">
                <a href="https://www.facebook.com/fiamotorsportgames/">
                    <img
                    role="img"
                    aria-label="Logo Fia Valencia"
                    className="w-8 h-8 text-white"
                    src="https://nieto35.github.io/Fia/redes/facebook.svg"
                    alt="logo Fia Valencia"
                    />
                </a>
                <a href="https://www.instagram.com/fia_motorsport_games/">
                    <img
                    role="img"
                    aria-label="Logo Fia Valencia"
                    className="w-8 h-8"
                    src="https://nieto35.github.io/Fia/redes/instagram.svg"
                    alt="logo Fia Valencia"
                    />
                </a>
                <a href="https://www.threads.net/@fia_motorsport_games">
                    <img
                    role="img"
                    aria-label="Logo Fia Valencia"
                    className="w-8 h-8"
                    src="https://nieto35.github.io/Fia/redes/icon--threads--black.svg"
                    alt="logo Fia Valencia"
                    />
                </a>
                </div>
            </div>
        </div>

        <div>

        <h2 className="text-left text-white mt-5 font-bold px-5">© 2024 SRO Motorsports Group. All Rights Reserved.</h2>


        <h2 className="text-left text-white mt-5 font-bold px-5">Creado por</h2>
        <a className="text-left px-5 mt-2" href="tel:+34671033348">
           felipe_niet0
        </a>

        
        
        </div>



    </div>
  )
}
