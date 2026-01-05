import { Bell, Gift, Heart, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

export const NavBar = ({ navOpts }: { navOpts?: Record<string, any>[] }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <div className="w-full h-60px border-b-1 p-3 border-b-[var(--primary)] flex items-center gap-5">
            {/* Logo and Name */}
            <div className="flex gap-2 justify-center items-center" onClick={()=>navigate('/home')}>
                <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] p-2 text-white font-bold w-12 h-12 rounded-md flex justify-center items-center">
                    <Gift />
                </div>
                <h1 className="text-[var(--primary)] text-3xl">GlowGift</h1>
            </div>
            {/* search bar  and navigations opts*/}
            <div className="w-full flex items-center gap-2 relative">
                <input id="search" placeholder="" className=" w-full peer p-2 px-5 rounded-full focus-visible:outline-none focus-visible:ring-[var(--secondary)] focus-visible:ring-[2px]" />
                <label htmlFor="search">
                    <Search className="text-[var(--primary)]" />
                </label>
                {/* Navigation options */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 flex justify-between items-center gap-8 p-1 transition-all duration-300 peer-focus-within:opacity-0 peer-focus-within:pointer-events-none">
                    {
                        navOpts?.map((opt, i) => {
                            return (
                                <Button key={i} variant="nav" className="hover:!text-[var(--primary)] text-lg hover:!bg-transparent">
                                    {opt?.label}
                                </Button>
                            )
                        })
                    }
                </div>
            </div>
            {/* other options */}
            <div className="flex items-center justify-center gap-2">
                {/* notification */}
                <Button variant="nav">
                    <Bell />
                </Button>
                {/* wishlist */}
                <Button variant="nav" onClick={()=>{navigate('/wishlist')}}>
                    <Heart />
                </Button>
                {/* user */}
                <Button variant="nav">
                    <User />
                </Button>
                {/* cart */}
                <Button variant="nav">
                    <ShoppingCart />
                </Button>
            </div>

        </div>
    )
}