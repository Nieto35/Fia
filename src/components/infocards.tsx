import { MdOutlineFamilyRestroom } from 'react-icons/md'
import { GiHotMeal } from 'react-icons/gi'
import { TbMeat } from 'react-icons/tb'
import { PiBowlFood } from 'react-icons/pi'
import { GiFruitBowl } from 'react-icons/gi'
import { TbFriends } from 'react-icons/tb'
import { IoFishOutline } from "react-icons/io5";
import { LuVegan } from "react-icons/lu";
import { LuEuro } from "react-icons/lu";

// row for description
import { IoIosArrowForward } from 'react-icons/io'

export const cards = [
  {
    id: 1,
    image: '/cards/paella-valenciana.jpg',
    title: 'Paella Valenciana',
    icon: <PiBowlFood size={50} />,
    price: 20,
    description: (
      <ul>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Arroz.</p>
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Gambas.</p>
        </li>
        <li className="flex items-center justify-end">
          <LuEuro size={30} className="text-secondary" />
          <p className="ml-2 text-xl">20</p>
        </li>
      </ul>
    )
  },
  {
    id: 2,
    image: '/cards/croquetas.jpg',
    title: 'Croquetas',
    icon: <GiHotMeal size={50} />,
    price: 30,
    description: (
        <ul>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Cerdo.</p>
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Masa.</p>
        </li>
        <li className="flex items-center justify-end">
          <LuEuro size={30} className="text-secondary" />
          <p className="ml-2 text-xl">30</p>
        </li>
      </ul>
    )
  },
  {
    id: 3,
    image: '/cards/sandwich.jpg',
    title: 'Sandwich de atún',
    icon: <IoFishOutline size={50} />,
    price: 10,
    description: (
      <ul>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Atún.</p>
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Pan.</p>
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Vegetales.</p>
        </li>
        <li className="flex items-center justify-end">
          <LuEuro size={30} className="text-secondary" />
          <p className="ml-2 text-xl">10</p>
        </li>
      </ul>
    )
  },
  {
    id: 4,
    image: '/cards/ensalada.jpg',
    title: 'Ensalada de garbanzos',
    icon: <LuVegan size={50} />,
    price: 40,
    description: (
        <ul>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Vegano.</p>
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Verduras.</p>
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Garbanzo.</p>
        </li>
        <li className="flex items-center justify-end">
          <LuEuro size={30} className="text-secondary" />
          <p className="ml-2 text-xl">40</p>
        </li>
      </ul>
    )
  }

  // Add as many cards as you want
]
