import React from 'react'
import Logo from '../Logo/Logo'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from '../../Hooks/ThemeHook/useTheme'

const AuthNav = () => {
    const [theme, toggleTheme] = useTheme()
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <Logo style={'pl-4'} />
            </div>
            <div className="navbar-end gap-4">
                <button onClick={toggleTheme} className="size-10 p-2 flex items-center justify-center bg-base-100 shadow rounded-lg transition hover:scale-105 active:scale-95 cursor-pointer">
                    {
                        theme === "light"
                            ? (<MoonIcon className=" text-black dark:text-gray-200" size={23} stroke='black' />)
                            : (<SunIcon className="size-5 text-yellow-400" size={23} />)
                    }
                </button>
                <button className="btn btn-warning btn-outline">Help</button>
            </div>
        </div>
    )
}

export default AuthNav
