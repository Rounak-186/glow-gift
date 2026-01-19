import React from 'react'
import { Dropdown } from './DropDown'
import { Button } from './Button'
import { HandHelping, LogOut, Package, Settings, Ticket, User } from 'lucide-react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

const ProfileDropDown = ({ open, onClose }: { open: boolean, onClose: () => void }) => {

    const navigate = useNavigate();


    const dropdownOpts = [
        {
            icon: <Settings />,
            label: "Settings",
            onClick: () => { },
            className:""
        },
        {
            icon: <Package />,
            label: "Orders",
            onClick: () => {navigate('/orders')},
            className:""
        },
        {
            icon: <Ticket />,
            label: "Coupons",
            onClick: () => {navigate('/coupons') },
            className:""
        },
        {
            icon: <LogOut />,
            label: "Logout",
            onClick: () => { },
            className:"bg-red-600! text-white! font-semibold! hover:bg-red-800! rounded-none! "
        }        
    ];


    return (
        <Dropdown open={open} onClose={onClose} className='flex flex-col gap-2 bg-[#37232fa8] backdrop-blur-sm'>
            {/* Profile */}
            <Button variant="nav" onClick={()=>navigate('/profile')} className='group flex items-center gap-3 text-white! border-b-2 border-[var(--secondary)]! !hover:brightness-100 rounded-md! rounded-b-none! p-2!'>
                <div className="rounded-full border-white group-hover:border-[var(--primary)] transition-all duration-300 border-2 p-2">
                    <User />
                </div>
                <div className='border-l-2 p-3'>
                    <h2 className='font-semibold'>Rounak Mohata</h2>
                    <p>9434232157</p>
                </div>
            </Button>
            {
                dropdownOpts.map((opt)=>{
                    return(
                        <Button variant="nav" className={clsx("flex items-center  p-2! text-white! rounded-md!",opt.className)} onClick={opt.onClick}>
                            {opt.icon}
                            {opt.label}
                        </Button>
                    )                    
                })
            }
        </Dropdown>
    )
}

export default ProfileDropDown
