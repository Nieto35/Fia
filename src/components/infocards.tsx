import { MdOutlineFamilyRestroom } from 'react-icons/md'
import { GiHotMeal } from 'react-icons/gi'
import { TbMeat } from 'react-icons/tb'
import { PiBowlFood } from 'react-icons/pi'
import { GiFruitBowl } from 'react-icons/gi'
import { TbFriends } from 'react-icons/tb'
import { IoFishOutline } from "react-icons/io5";
import { LuVegan } from "react-icons/lu";
import { LuEuro } from "react-icons/lu";
import { useLanguage } from '@/hooks/useLanguage'

// row for description
import { IoIosArrowForward } from 'react-icons/io'

export const TextCard = ({text}: {text: string}) => {
  const riceText = useLanguage({id: text});

  return (
    <p className="ml-2">{riceText}</p>
  );
}

export const TitleCard = ({text}: {text: string}) => {
  const riceText = useLanguage({id: text});

  return (
    <>{riceText}</>
  );
}

export const cards = [
  {
    id: 1,
    image: 'https://nieto35.github.io/Fia/cards/paella-valenciana.jpg',
    title: 'Paella Valenciana',
    icon: <PiBowlFood size={50} />,
    price: 20,
    description: (
      <ul>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <TextCard text="rice" />
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <TextCard text="shrimp" />
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
    image: 'https://nieto35.github.io/Fia/cards/croquetas.jpg',
    title: <TitleCard text="Croquettes" />,
    icon: <GiHotMeal size={50} />,
    price: 30,
    description: (
        <ul>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <TextCard text="pig" />
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <TextCard text="dough" />
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
    image: 'https://nieto35.github.io/Fia/cards/sandwich.jpg',
    title: 'Sandwich de atún',
    icon: <IoFishOutline size={50} />,
    price: 10,
    description: (
      <ul>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <TextCard text="tuna" />
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <TextCard text="bread" />
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <TextCard text="vegetables" />
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
    image: 'https://nieto35.github.io/Fia/cards/ensalada.jpg',
    title: 'Ensalada de garbanzos',
    icon: <LuVegan size={50} />,
    price: 40,
    description: (
        <ul>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <TextCard text="vegan" />
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <TextCard text="vegetables" />
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <TextCard text="chickpea" />
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
