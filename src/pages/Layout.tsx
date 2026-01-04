import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/UI/NavBar'

export default function Layout() {

    const navOpts = [
        {
            key: "home",
            label: "Home"
        },
        {
            key: "shop",
            label: "Shop"
        },
        {
            key: "about",
            label: "About"
        },
        {
            key: "contact",
            label: "Contact"
        }
    ]

    return (
        <div>
            <NavBar navOpts={navOpts} />

            <Outlet />
        </div>
    )
}
