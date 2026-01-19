import { ShoppingBag } from "lucide-react";
import { Button } from "../components/UI/Button";

const CouponsPage = () => {
    return (
        <div className="h-full flex flex-col">

            {/* Header */}
            <div className="w-full bg-linear-to-br from-(--primary) to-(--secondary) p-10 text-white flex justify-between items-center">
                <div className="text-left">
                    <h1 className="font-semibold text-4xl">My Coupons</h1>
                    <p>All your coupons in one place</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Button
                        variant="outline"
                        className="rounded-full! py-1! hover:text-gray-700! hover:bg-gray-200! !hover:brightness-100"
                    >
                        <span>Continue Shopping</span>
                        <span className="flex justify-center items-center">
                            <ShoppingBag size={20} strokeWidth={2} />
                        </span>
                    </Button>
                </div>
            </div>

            {/* Center area (remaining space) */}
            <div className="flex-1 flex justify-center items-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-600">
                        This Service is Temporarily Out of Service.
                    </h2>
                    <p>Sorry For the Inconvenience</p>
                </div>
            </div>
        </div>
    );
};

export default CouponsPage;