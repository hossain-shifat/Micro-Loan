import { Menu, MoonIcon, SunIcon, User } from 'lucide-react'
import React from 'react'
import Logo from '../../Components/Logo/Logo'
import { useTheme } from '../../Hooks/ThemeHook/useTheme'
import { Link, NavLink } from 'react-router'
import useAuth from '../../Hooks/UseAuth/useAuth'

const Navbar = () => {

    const [theme, toggleTheme] = useTheme()
    const { user, logOut } = useAuth()

    const links =
        <>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/all-loans'><li>All Loans</li></NavLink>
            <NavLink to='/aboutUs'><li>About Us</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
            {
                user &&
                <>
                    <NavLink to='/dashboard'><li>Dashboard</li></NavLink>
                </>
            }
        </>


    const handleLogout = () => {
        logOut()
    }



    return (
        <div className="navbar bg-base-200 border border-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-square btn-sm hover:bg-transparent hover:border-none hover:shadow-none lg:hidden">
                        <Menu />
                    </div>
                    {/* mobile view */}
                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 *:p-2 *:font-bold *:text-base-content shadow">
                        {links}
                    </ul>
                </div>
                <Logo style={'pl-2 md:pl-4'} />
            </div>
            {/* large screen view */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal *:px-4 *:py-2 *:font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <button onClick={toggleTheme} className="size-10 p-2 flex items-center justify-center bg-base-100 shadow rounded-lg transition hover:scale-105 active:scale-95 cursor-pointer">
                    {
                        theme === "light"
                            ? (<MoonIcon className=" text-black dark:text-gray-200" size={23} stroke='black' />)
                            : (<SunIcon className="size-5 text-yellow-400" size={23} />)
                    }
                </button>
                {
                    user ?
                        <div className="flex gap-4 items-center">
                            <div>
                                <User />
                            </div>
                            <button onClick={handleLogout} className="btn btn-error btn-outline">Logout</button>
                        </div>
                        :
                        <>
                            <Link to='/login' className="btn btn-primary">Login</Link>
                            <Link to='/register' className="btn btn-primary">Register</Link>
                        </>
                }
            </div>
        </div>
    )
}

export default Navbar
