import { ArrowRight, Lock } from "lucide-react"
import { Button } from "./Button"
import { Input } from "./Input"

export const OrderSummary = () => {
    return (
        <div className="space-y-3 rounded-lg shadow-md border-[var(--secondary)] border flex flex-col min-h-80">
            <h3 className="font-semibold text-gray-500 border-b border-[var(--secondary)] flex items-center justify-center text-2xl py-1">Order Summary</h3>
            <div className="p-3 space-y-2 flex-1 flex flex-col">
                <div className="flex items-center justify-center gap-5">
                    <Input placeholder="Have a Coupon?" placeHolderClass="text-sm!" className="p-1! h-8" />
                    <Button className="text-sm rounded-full! p-1! px-5! h-10">Apply</Button>
                </div>
                {/* bill */}
                <div className="flex flex-col justify-center gap-1 border-b border-gray-200 mt-5">
                    <div className="flex justify-between items-center ">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold">{"\u20B9"}1497</span>
                    </div>
                    <div className="flex justify-between items-center ">
                        <span className="text-gray-600">Delivery</span>
                        <span className="font-semibold">{"\u20B9"}49</span>
                    </div>
                </div>
                {/* total */}
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">Total</span>
                    <span className="font-semibold text-[var(--primary)]">{"\u20B9"}1546</span>
                </div>
                {/* Checkout */}
                <Button className="w-full rounded-full! justify-center gap-3 text-md active:scale-95 mt-auto">
                    <Lock size={20} />
                    <span>Proceed to Checkout</span>
                    <ArrowRight size={20} />
                </Button>
            </div>
        </div>
    )
}