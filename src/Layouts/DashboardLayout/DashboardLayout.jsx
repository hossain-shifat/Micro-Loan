
import { Home, MoonIcon, PanelRightClose, SunIcon, Users } from 'lucide-react'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router'
import Logo from '../../Components/Logo/Logo';
import useAuth from '../../Hooks/UseAuth/useAuth';
import useRole from '../../Hooks/Role/useRoll';
import { useTheme } from '../../Hooks/ThemeHook/useTheme';

const DashbordLayout = () => {
    const [menu, setMenu] = useState('menu')

    const [theme, toggleTheme] = useTheme()

    const { user } = useAuth()

    const { role } = useRole()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-200 border-b border-base-200 flex justify-between">
                    <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost hover:bg-transparent hover:border-none hover:shadow-none" >
                        <PanelRightClose size={25} />
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

                <div className="m-3 md:m-5 p-5 md:p-10 rounded-2xl min-h-screen bg-base-200">
                    <Outlet />
                </div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        <div className="is-drawer-close:hidden is-drawer-open:p-3 is-drawer-open:border-b border-base-200">
                            <Logo />
                        </div>
                        <div className="space-y-2 text-[0.9rem]">
                            <li className="pt-2">
                                <Link to="/dashboard" onClick={() => setMenu("dashboard")} className={`${menu === "/dashboard" ? "activeDashMenu" : ""} is-drawer-close:tooltip is-drawer-close:tooltip-right`}>
                                    <h1 className="flex justify-center items-center"><Home size={18} /></h1>
                                    <span className="is-drawer-close:hidden">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/user-management" onClick={() => setMenu("user-management")} className={`${menu === "user-management" ? "activeDashMenu" : ""} is-drawer-close:tooltip is-drawer-close:tooltip-right`}>
                                    <h1 className="flex justify-center items-center"><Users size={18} /></h1>
                                    <span className="is-drawer-close:hidden">User Management</span>
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>




    );
};

export default DashbordLayout
