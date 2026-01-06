import { Gift, Instagram, Mail, Phone, Youtube } from "lucide-react"
import { Button } from "./Button"
import { Input } from "./Input"
import { useNavigate } from "react-router-dom"

export const Footer = () => {

    const navigate = useNavigate()

    return (
        <div className="bg-[#48373c] text-white w-full">
            {/* Subscribe option */}
            <div className="border-gray-600 border-b flex justify-between px-5 py-3">
                <div className="text-left">
                    <h2 className="font-semibold text-2xl">Stay Connected</h2>
                    <p className="text-sm">Get exclusive offers and gift ideas delivered to your inbox</p>
                </div>
                <div className="flex items-center gap-3 max-w-xl w-full">
                    <input id="search" placeholder="Enter email" className=" w-full peer p-1 px-5 border-1 rounded-full focus-visible:outline-none focus-visible:border-[var(--secondary)] focus-visible:border-[2px]" />
                    <Button className="text-sm rounded-full! p-1! px-3!">Subscribe</Button>
                </div>
            </div>

            <div className="flex items-start justify-between p-10 border-b border-gray-600">
                <div className="flex flex-col gap-2 items-start w-75">
                    <div className="flex gap-2 justify-center items-center" onClick={() => navigate('/home')}>
                        <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] p-2 text-white font-bold w-12 h-12 rounded-md flex justify-center items-center">
                            <Gift />
                        </div>
                        <h1 className="text-[var(--primary)] text-3xl">GlowGift</h1>
                    </div>
                    <p className="text-left">Creating memorable moments with perfect gifts for every occasion. Premium quality, heartfelt gestures.</p>
                    {/* social media buttons */}
                    <div className="flex items-center gap-3">
                        <Button variant="primary" className="!p-1 rounded-lg">
                            <Instagram />
                        </Button>
                        <Button variant="primary" className="!p-1 rounded-lg">
                            <Youtube />
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center items-start gap-15">
                    {/* quick links */}
                    <div className="flex flex-col gap-1">
                        <h4 className="text-gray-200 font-semibold text-xl border-b">Quick Links</h4>
                        <Button variant="link" className="!p-1">Home</Button>
                        <Button variant="link" className="!p-1">Shop</Button>
                        <Button variant="link" className="!p-1">About</Button>
                        <Button variant="link" className="!p-1">Contact</Button>
                    </div>
                    {/* get in touch */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-white font-bold text-2xl text-left">Get in Touch</h3>
                        {/* phone */}
                        <div className="flex items-center gap-3">
                            <span className="text-[var(--primary)] "><Phone size={20} /></span>
                            <span>9434232157</span>
                        </div>
                        {/* mail */}
                        <div className="flex items-center gap-3">
                            <span className="text-[var(--primary)] "><Mail size={20} /></span>
                            <span>glowgift-support@gmail.com</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center px-10 py-2">
                <p>© 2026 GlowGift. All rights reserved. </p>
                <div className="flex items-center gap-2">
                    <Button variant="link" className="text-[var(--primary)]!">Privacy Policy</Button>
                    <Button variant="link" className="text-[var(--primary)]!">Terms & Conditions</Button>
                </div>
            </div>
        </div>
    )
}