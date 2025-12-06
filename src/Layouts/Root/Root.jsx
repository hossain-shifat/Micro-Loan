import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../Shared/Navbar/Navbar'
import Footer from '../../Shared/Footer/Footer'

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-base-100 min-h-screen p-3 md:p-10">
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}

export default Root
