import { PiBowlFoodThin } from "react-icons/pi";
import { PiCalendarLight } from "react-icons/pi";
import { BsQrCode } from "react-icons/bs";
import { useLanguage } from "@/hooks/useLanguage";

export default function HowBuy() {
  return (
    <div className="">
      <h2 className='text-center text-secondary text-3xl font-black leading-none mb-4 mt-24 lg:text-5xl'>
        {useLanguage({id: "how_to_buy"})}
      </h2>

      <div className="w-full lg:flex lg:justify-center">

        <div className="lg:w-4/5 lg:grid lg:grid-cols-3 mt-10">
            <div className="relative border-l-[6px] lg:border-l-[0px]  ml-8 lg:ml-0 pl-10 text-secondary  pr-5 lg:mt-0 lg:pt-16">
            <div className="lg:flex lg:justify-center">
                <PiBowlFoodThin size={100} className="text-secondary"/>
            </div>
                <h3 className="text-secondary text-2xl font-bold text-left mt-5 lg:text-center">
                <span className="hidden lg:inline">1. </span>
                    {useLanguage({id: "food_choice"})}
                </h3>
                <p className="mt-2 text-left lg:text-center">
                
                    {useLanguage({id: "choose_the_food_you_like_the_most_from_our_options"})}
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
                {useLanguage({id: "select_the_days"})}
                </h3>
                <p className="mt-2 text-left lg:text-center">
                {useLanguage({id: "you_can_select_the_days_on_which_you_want_that_menu"})}
                    </p>
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
                {useLanguage({id: "pay_and_download_QR"})}</h3>
                <p className="mt-2 text-left lg:text-center">
                {useLanguage({id: "you_can_click_on_the_cart_after_paying_you_will_receive_a_QR_in_your_email_which_you_must_present_on_the_day_of_the_event"})}</p>
                <div className="lg:hidden absolute top-36 -left-7 w-12 h-12 bg-secondary rounded-full flex items-center justify-center ">
                    <span className="text-white text-4xl">3</span>
                </div>
            </div>

        </div>
      </div>


    </div>
  )
}
