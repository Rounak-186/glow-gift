import { ShoppingBag } from "lucide-react"
import { Button } from "../components/UI/Button"
import { ToggleNav } from "../components/UI/ToggleNav";
import OrderDelivered from "../components/UI/OrderDelivered";
import OrderCancelled from "../components/UI/OrderCancelled";

const OrderPage = () => {

    const orderStatusNav = [
        {
            label: "Delivered",
            value: "delivered",
            count: 5,
        },
        {
            label: "On the Way",
            value: "in_transit",
            count: 2,
        },
        {
            label: "Cancelled",
            value: "cancelled",
            count: 1,
        },
    ];

    return (
        <div className="h-full">
            {/* headerPart */}
            <div className="w-full bg-linear-to-br from-(--primary) to-(--secondary) p-10 text-white flex justify-between items-center">
                <div className="text-left">
                    <h1 className="font-semibold text-4xl ">My orders</h1>
                    <p className="">7 Previous Orders</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Button variant="outline" className="rounded-full! py-1! hover:text-gray-700! hover:bg-gray-200! !hover:brightness-100">
                        <span>Continue Shopping</span>
                        <span className="flex justify-center items-center"><ShoppingBag size={20} strokeWidth={2} /></span>
                    </Button>
                </div>
            </div>

            <div className="space-y-4 w-full max-w-7xl mx-auto py-10">
                {/* Fulfilled and Cancelled orders toggle */}
                <ToggleNav options={orderStatusNav} activeTab="delivered"/>
                <OrderCancelled/>
                {
                    Array(6).fill(null).map(() => {
                        return (
                            <OrderDelivered />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default OrderPage;