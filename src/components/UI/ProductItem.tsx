import { Minus, Plus, Trash, } from "lucide-react"
import { Button } from "./Button"
import { useState } from "react"

export const ProductItem = () => {

    const [quantity, setQuantity] = useState(1);

    return (
        <div className="border border-[var(--secondary)] rounded-xl p-4 flex items-center gap-4 w-full shadow-md">
            {/* Product image */}
            <div className="rounded-md overflow-hidden">
                <img
                    src='https://u-mercari-images.mercdn.net/photos/m66350704918_1.jpg'
                    className='aspect-[1] w-50 object-cover' />
            </div>
            {/* other details */}
            <div className="w-full">
                <div className="flex items-center justify-between gap-4 p-2 w-full ">
                    {/* title and price */}
                    <div>
                        <h3 className="text-2xl text-left ">Naruto Glass Painting</h3>
                        <p className='line-clamp-2 text-gray-400 text-sm  text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis similique fugit quae labore nobis perferendis.</p>
                    </div>
                    <span className='text-[var(--primary)] text-lg '>{"\u20B9"}399</span>
                </div>

                <div className="flex items-center justify-between mt-4">
                    {/* quantity tab */}
                    <div className="flex gap-3 items-center">
                        <div className="flex justify-center items-center gap-4 rounded-full  border border-[var(--primary)] ">
                            {/* reduce */}
                            {quantity <= 1 ? (
                                <Button variant="ghost" className=" rounded-none! !px-3  py-2! !rounded-l-full" onClick={() => setQuantity(quantity - 1)}>
                                    <Trash size={20} />
                                </Button>
                            ) : (
                                <Button variant="ghost" className=" rounded-none! !px-3 py-2! !rounded-l-full" onClick={() => setQuantity(quantity - 1)}>
                                    <Minus size={20} />
                                </Button>
                            )}

                            {/* quantity */}
                            <div className="text-lg">
                                {quantity}
                            </div>
                            {/* add */}
                            <Button variant="ghost" className=" rounded-none! !px-3 py-2! !rounded-r-full" onClick={() => setQuantity(quantity + 1)}>
                                <Plus size={20} />
                            </Button>
                        </div>
                        <div>
                            <span className="text-xl font-semibold">
                                {399 * quantity}
                            </span>
                        </div>
                    </div>

                    {/* share and save towishlist feature */}
                    <div className="flex items-center justify-center ">
                        <Button className="!rounded-none !border-0 !hover:brightness-100 border-r-2! border-gray-400! py-0!" variant="link">
                            Share
                        </Button>
                        <Button variant="link">
                            Save to wishlist
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}