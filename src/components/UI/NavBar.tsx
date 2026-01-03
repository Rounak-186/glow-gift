import { Gift, Search } from "lucide-react";
import React from "react";
import { Input } from "./Input";

export const NavBar = ({ navOpts }: { navOpts?: Record<string, any>[] }) => {
    return (
        <div className="w-full h-60px border-b-1 p-3 border-b-[var(--primary)] mb-4 flex items-center gap-5">
            {/* Logo and Name */}
            <div className="flex gap-2 justify-center items-center">
                <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] p-2 text-white font-bold w-12 h-12 rounded-md flex justify-center items-center">
                    <Gift />
                </div>
                <h1 className="text-[var(--primary)] text-3xl">GlowGift</h1>
            </div>
            {/* search bar */}
            <div className="w-full flex items-center gap-2">
                <input id="search" placeholder="" className="group w-full p-2 px-5 rounded-full focus-visible:outline-none focus-visible:ring-[var(--secondary)] focus-visible:ring-[2px]" />
                <label htmlFor="search">
                    <Search className="text-[var(--primary)]" />
                </label>
            </div>
        </div>
    )
}