import { Heart, ShoppingBag } from "lucide-react"
import { Button } from "../components/UI/Button"
import { ProductItem } from "../components/UI/ProductItem"
import { OrderSummary } from "../components/UI/OrderSummary"
import { useNavigate } from "react-router-dom"

export const Cart = () => {

        const navigate = useNavigate();

    return (
        <div>
            {/* headerPart */}
            <div className="w-full bg-linear-to-br from-(--primary) to-(--secondary) p-10 text-white flex justify-between items-center">
                <div className="text-left">
                    <h1 className="font-semibold text-4xl ">Shopping cart</h1>
                    <p className="">7 Items in your cart</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Button variant="outline" className="rounded-full! py-1! ">
                        <span>Continue Shopping</span>
                        <span className="flex justify-center items-center"><ShoppingBag size={20} strokeWidth={2} /></span>
                    </Button>
                    <Button variant="primary" className="rounded-full! py-1! flex items-center gap-5 justify-between" onClick={() => { navigate('/wishlist') }}>
                        <span>View Wishlist</span>
                        <span className="flex justify-center items-center"><Heart size={20} strokeWidth={2} /></span>
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-3 w-full mx-auto max-w-6xl gap-5 my-5">
                {/* product list */}
                <div className="col-span-2">
                    <ProductItem />
                </div>
                <OrderSummary />
            </div>
        </div>
    )
}