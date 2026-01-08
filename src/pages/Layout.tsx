import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/UI/NavBar'
import { Footer } from '../components/UI/Footer'

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
        <div className="min-h-screen flex flex-col">
            <NavBar navOpts={navOpts} />

            {/* Page content */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Fixed footer */}
            <Footer className="flex-end"/>
        </div>
    )
}
