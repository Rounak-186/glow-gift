import React from "react";
import ProductCard from "../components/UI/ProductCard";
import { Button } from "../components/UI/Button";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const WishlistPage = () => {

    const navigate = useNavigate();

    return (
        <div className="h-full">
            {/* headerPart */}
            <div className="w-full bg-linear-to-br from-(--primary) to-(--secondary) p-10 text-white flex justify-between items-center">
                <div className="text-left">
                    <h1 className="font-semibold text-4xl ">My Wishlist</h1>
                    <p className="">7 Items saved for later</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Button variant="outline" className="rounded-full! py-1! hover:text-gray-700! hover:bg-gray-200! !hover:brightness-100">
                        <span>Continue Shopping</span>
                        <span className="flex justify-center items-center"><ShoppingBag size={20} strokeWidth={2} /></span>
                    </Button>
                    <Button variant="primary" className="rounded-full! py-1! flex items-center gap-5 justify-between" onClick={() => { navigate('/cart') }}>
                        <span>View Cart</span>
                        <span className="flex justify-center items-center"><ShoppingCart size={20} strokeWidth={2} /></span>
                    </Button>
                </div>
            </div>
            {/* products */}
            <div className="mx-auto w-full grid grid-cols-3 h-full gap-8 max-w-6xl my-5">
                {Array(5).fill(null).map((_, i) => {
                    return (
                        <ProductCard isWishlistProduct={true} key={i} />
                    )
                })}
            </div>
        </div>
    )
}