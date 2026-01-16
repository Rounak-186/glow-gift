import { Camera, User } from "lucide-react";
import { Button } from "../components/UI/Button";
import OrderDelivered from "../components/UI/OrderDelivered";

const Profile = () => {
    return (
        <div className="w-full max-w-7xl mx-auto my-10 ">
            <div className="flex items-center gap-8">
                {/* profile pic */}
                <div className="relative rounded-full p-4 flex items-center justify-center border-4 border-[var(--primary)] text-[var(--primary)] w-[150px] h-[150px]">
                    <User size={70} />
                </div>

                {/* name and edit profile */}
                <div className="text-left">
                    <h3 className="text-xl font-semibold">Rounak Mohata</h3>
                    <p>rounakmohata0186@gamil.com</p>
                    <Button variant="secondary" className="!py-1 !mt-4 !w-fit !rounded-full !text-white !bg-[var(--accent)]">
                        Edit Profile
                    </Button>
                </div>
            </div>

            {/* phone no & address */}
            <div className="shadow-[5px_5px_10px_rgba(0,0,0,0.15)] py-2 rounded-lg my-10">
                <div className="border-b px-3 py-1 flex items-center gap-5">
                    <span className="font-semibold w-[100px] text-left">Phone No.</span>
                    <span>9434232157</span>
                </div>
                <div className=" px-3 py-1 flex items-center gap-5">
                    <span className="font-semibold w-[100px] text-left">Address</span>
                    <span>chandikar Lane, Purulia-723101, West Bengal</span>
                </div>
            </div>

            {/* orders */}
            <div>
                <div className="flex justify-between items-center mb-7">
                    <div className="font-semibold text-2xl">Recent Orders</div>
                    <Button className="!rounded-full">Continue Shopping</Button>
                </div>
                <div className="space-y-4 ">
                    {
                        Array(3).fill(null).map(() => {
                            return (
                                <OrderDelivered />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};


// Coupon card
const CouponCard = () => {
    return(
        <div>

        </div>
    )
}

export default Profile;