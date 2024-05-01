import { useLanguage } from '@/hooks/useLanguage'

export default function Header()  {
  return (
    <div className="flex-grow h-full lg:flex lg:justify-center lg:items-center">
      <div className="mt-16 inset-0 text-center z-10 max-w-80 top-8 left-0 right-0 mx-auto h-[200px] lg:relative lg:max-w-4xl">
        <h1 className="text-secondary text-3xl font-black leading-none mb-4 mt-4 lg:text-7xl lg:mt-0">
          {useLanguage({id: "choose_your_food_Valencia"})}
        </h1>
        <p className="text-secondary text-lg leading-tight lg:text-3xl ">
          {useLanguage({id: "message_food"})}
        </p>
      </div>
    </div>
  )
}
