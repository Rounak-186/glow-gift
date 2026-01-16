import { Copy } from "lucide-react";
import { Button } from "./Button";

export const OrderCancelled = () => {
    return (
        <div className="shadow-[5px_5px_20px_rgba(0,0,0,0.15)] p-2 rounded-md flex items-center gap-5">
            {/* image */}
            <img src="https://u-mercari-images.mercdn.net/photos/m66350704918_1.jpg" className="object-cover rounded-sm w-[150px] aspect-square" />
            <div className="flex-1 pr-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    {/* Product name and price */}
                    <div className='flex flex-col items-start mb-2'>
                        <strong className='text-2xl'>Naruto Glass painting</strong>
                        <p className='line-clamp-2 text-gray-400 text-sm mt-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis similique fugit quae labore nobis perferendis.</p>
                    </div>
                    {/* Quantity */}
                    <div className="bg-[rgba(35,34,34,0.1)] rounded-full text-gray-700 px-3 py-1"> Qty: 1</div>
                    {/* bought price */}
                    <div className='text-[var(--primary)] text-xl font-bold'>{"\u20B9"}399</div>
                </div>

                <div className="flex h-full justify-between items-center bg-gray-200 p-5 px-2 rounded-sm">
                    <h4 className="text-xl">Thinking about this again?</h4>
                    <div className="flex items-center gap-3">
                        <Button className="!text-sm !p-2 !py-1 !rounded-sm">Save to Wishlist</Button>
                        <Button className="!text-sm !p-2 !py-1 !rounded-sm">View Similar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OrderCancelled;