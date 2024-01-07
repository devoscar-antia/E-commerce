import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { totalPrice } from "../utils/index";

const OrdersCard = (props) => {
    const { totalPrice, totalProducts } = props;
    const currentDate = () => {
        const date = new Date().toLocaleDateString();
        return date
    }
    return (
        <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
            <div className="flex justify-between w-full">
                <p className='flex flex-col'>
                    <span className='font-light'>Fecha: {currentDate()}</span>
                    <span className='font-light'>Cantidad: {totalProducts} articles</span>
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-medium text-2xl">${totalPrice}</span>
                    <ChevronRightIcon
                        className='h-6 w-6 text-black cursor-pointer'
                    ></ChevronRightIcon>
                </p>
            </div>
        </div>

    );
};

export default OrdersCard;
