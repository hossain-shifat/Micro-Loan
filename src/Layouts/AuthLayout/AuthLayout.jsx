import React from 'react'
import AuthNav from '../../Components/AuthNav/AuthNav'
import { Outlet } from 'react-router'
import { assets } from '../../assets/assets'

const AuthLayout = () => {
    return (
        <div>
            <AuthNav />
            <div className="flex justify-around gap-20 items-center m-4 md:m-10 border border-base-200 bg-base-200 rounded-2xl">
                <div className="flex-1">
                    <div className="max-w-full mx-auto">
                        <Outlet />
                    </div>
                </div>
                <div className="hidden md:block flex-1 p-10">
                    <div className="flex flex-col gap-25 justify-center items-center h-full min-h-screen">
                        <div>
                            <img className="max-w-96" src={assets.auth} alt="" />
                        </div>
                        <div className="max-w-96 w-full space-y-3">
                            <h1 className="font-bold text-4xl">Introducing Powerful New Tools</h1>
                            <p>By reviewing past loan activities and patterns, users can make better, more informed decisions. As the scale and impact of these choices increase, having accurate insights becomes even more important.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
