import Cookies from 'js-cookie'
import { FaRegTrashCan } from 'react-icons/fa6'
import { LuEuro } from "react-icons/lu";
import { TitleCard } from './infocards';
interface Product {
  productId: string;
  // Agrega aquí cualquier otra propiedad que los productos puedan tener
}

export const CartComponent = ({handleReset, id, image, days, title, price, productId}: any) => {
  const allDays = ['23', '24', '25', '26', '27'];
  const selectedDays = allDays.filter((day, index) => days[index]);
  const numberOfSelectedDays = days.reduce((total: number, daySelected: boolean) => daySelected ? total + 1 : total, 0);
  const totalPrice = price * numberOfSelectedDays;

  const deleteProduct = (productId: any) => {
    // Obtén los productos actuales de las cookies
    const currentProducts = Cookies.get('products');
    if (currentProducts) {
      const products = JSON.parse(currentProducts);
  
      // Filtra el array de productos para excluir el producto con el productId dado
      const updatedProducts = products.filter((product: Product) => product.productId !== productId);
  
      // Guarda los productos actualizados en las cookies
      Cookies.set('products', JSON.stringify(updatedProducts));
    }
    handleReset()
  }
  
  return (
    <>

    <div className="flex items-center justify-between bg shadow rounded p-2 w-full flex-wrap">
                <p className="text-secondary font-bold w-full text-center mt-2">{title}</p>
        <div className="flex items-center w-full mt-2">

          <p className="text-secondary font-bold m-2 text-center flex items-center">
          <LuEuro size={10} className="text-secondary" />{totalPrice}</p>

            <div className='flex justify-center items-center flex-wrap max-w-24'>
           
                <img
                    src={image}
                    alt="Product"
                    className="w-20 h-16 object-cover rounded  "
                />
            </div>
            <div className='flex w-full'>

            <div className=' flex flex-wrap justify-center w-full items-center '>
              {selectedDays.map((day, index) => (
                  <div
                  key={day}
                  className={`m-2 flex flex-col items-center justify-center font-bold rounded-lg shadow-lg w-14 h-14 bg-blue-500 text-white`}
                  >
                  <p className="text-xs"><TitleCard text='october'/></p>
                  <p className="text-xs">{day}</p>
                  <p className="text-xs">2024</p>
                  </div>
              ))}
              </div>
          </div>
          <button onClick={() => deleteProduct(productId)} className="ml-4 text-red-600">
            <FaRegTrashCan />
          </button>

            </div>
      </div>
      </>
  )
}
