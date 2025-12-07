
import { Bike, CircleCheckBig, CircleDollarSign, Home, ListCheck, ListChecks, MoonIcon, Motorbike, Package2, PanelRightClose, SunIcon, Users } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router'
import Logo from '../../Components/Logo/Logo';
import useAuth from '../../Hooks/UseAuth/useAuth';
import useRole from '../../Hooks/Role/useRoll';
import { useTheme } from '../../Hooks/ThemeHook/useTheme';

const DashbordLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [menu, setMenu] = useState('menu')

    const [theme, toggleTheme] = useTheme()

    const { user } = useAuth()

    const handleDrawerToggle = () => {
        if (window.innerWidth >= 1024) {
            setIsCollapsed(prev => !prev);
        }
    };

    const { role } = useRole()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            {/* PAGE CONTENT */}
            <div className="drawer-content">
                <nav className="navbar w-full bg-base-200 border-b border-base-200 flex justify-between">
                    <label htmlFor="my-drawer-4" onClick={handleDrawerToggle} className="btn btn-square btn-ghost hover:bg-transparent hover:border-none hover:shadow-none" >
                        <PanelRightClose size={25} className={`${isCollapsed ? "rotate-180" : ""}`} />
                    </label>
                    <nav className="navbar-end flex gap-4 max-w-[300px] w-full pr-5">
                    <button onClick={toggleTheme} className="size-10 p-2 flex items-center justify-center bg-base-100 shadow rounded-lg transition hover:scale-105 active:scale-95 cursor-pointer">
                        {
                            theme === "light"
                                ? (<MoonIcon className=" text-black dark:text-gray-200" size={23} stroke='black' />)
                                : (<SunIcon className="size-5 text-yellow-400" size={23} />)
                        }
                    </button>
                        <div className="flex gap-2">
                            <div>
                                <img className="w-10.5 h-10.5 rounded-full object-cover" src={user.photoURL} alt="" />
                            </div>
                            <div className="leading-5">
                                <h1 className="font-bold">{user.displayName}</h1>
                                <p>{role}</p>
                            </div>
                        </div>
                    </nav>
                </nav>

                <div className="m-3 md:m-5 p-5 md:p-10 rounded-2xl min-h-screen bg-base-100">
                    <Outlet />
                </div>
            </div>

            {/* SIDEBAR */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <div className={`min-h-full bg-base-200 transition-all ${isCollapsed ? "w-14 items-center" : "w-64"}`}>
                    <ul className="menu w-full *:text-base-content">
                        <div className="mb-3 is-drawer-close:border-b border-base-300">
                            <div className="flex justify-start py-2 px-4">
                                {!isCollapsed ? <div className="flex justify-start py-2 px-4"><Logo /></div> : <Link to='/' className="flex justify-center items-center mt-3"><Home /></Link>}
                            </div>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashbordLayout
