import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../Shared/Navbar/Navbar'

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-base-100 min-h-screen">
                <Outlet />
            </div>
        </div>
    )
}

export default Root
