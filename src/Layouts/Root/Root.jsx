import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../Shared/Navbar/Navbar'
import Footer from '../../Shared/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import { useTheme } from '../../Hooks/ThemeHook/useTheme'

const Root = () => {
    const [theme] = useTheme()
    return (
        <div>
            <Navbar />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={theme}
                style={{
                    width: '350px',
                    margin: '10px 20px'
                }}
            />
            <div className="bg-base-100 min-h-screen p-3 md:p-10">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root
