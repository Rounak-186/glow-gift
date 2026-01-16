import { Camera, User } from "lucide-react";
import { Button } from "../components/UI/Button";

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
                    <div className="font-semibold text-2xl">My Orders</div>
                    <Button className="!rounded-full">Continue Shopping</Button>
                </div>
                <div className="space-y-4">
                    {
                        Array(6).fill(null).map(() => {
                            return (
                                <OrderCard />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

const OrderCard = () => {
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

                <div className="flex justify-between items-center bg-gray-200 p-1 px-2 rounded-sm">
                    <div className="grid grid-cols-3 gap-2  min-w-[300px]">
                        <span className="font-semibold text-left">Order Id</span>
                        <span className="col-span-2 text-right">yadIUgohasvzoifciph</span>
                        <span className="font-semibold text-left">Date</span>
                        <span className="col-span-2 text-right">01/08/2025</span>
                    </div>
                    {/* invoice */}
                    <div>
                        <button className="bg-[var(--accent)] text-white font-semibold p-3 rounded-sm ">
                            View Invoice
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;