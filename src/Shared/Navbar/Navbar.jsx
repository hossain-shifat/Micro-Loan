import { Menu, MoonIcon, SunIcon, User, ChevronDown, LogOut, Settings, UserCircle } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'
import Logo from '../../Components/Logo/Logo'
import { useTheme } from '../../Hooks/ThemeHook/useTheme'
import { Link, NavLink } from 'react-router'
import useAuth from '../../Hooks/UseAuth/useAuth'

const Navbar = () => {
    const [theme, toggleTheme] = useTheme()
    const { user, logOut } = useAuth()
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const profileRef = useRef(null)

    // Close profile dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleLogout = () => {
        logOut()
        setIsProfileOpen(false)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const loggedOutLinks = (
        <>
            <NavLink to='/' onClick={closeMobileMenu}>
                <li className="transition-colors duration-200 hover:text-white">Home</li>
            </NavLink>
            <NavLink to='/all-loans' onClick={closeMobileMenu}>
                <li className="transition-colors duration-200 hover:text-white">All Loans</li>
            </NavLink>
            <NavLink to='/about' onClick={closeMobileMenu}>
                <li className="transition-colors duration-200 hover:text-white">About Us</li>
            </NavLink>
            <NavLink to='/contact' onClick={closeMobileMenu}>
                <li className="transition-colors duration-200 hover:text-white">Contact</li>
            </NavLink>
        </>
    )

    const loggedInLinks = (
        <>
            <NavLink to='/' onClick={closeMobileMenu}>
                <li className="transition-colors duration-200 hover:text-white">Home</li>
            </NavLink>
            <NavLink to='/all-loans' onClick={closeMobileMenu}>
                <li className="transition-colors duration-200 hover:text-white">All Loans</li>
            </NavLink>
            <NavLink to='/dashboard' onClick={closeMobileMenu}>
                <li className="transition-colors duration-200 hover:text-white">Dashboard</li>
            </NavLink>
            <NavLink to='/about' onClick={closeMobileMenu}>
                <li className="transition-colors duration-200 hover:text-white">About Us</li>
            </NavLink>
            <NavLink to='/contact' onClick={closeMobileMenu}>
                <li className="transition-colors duration-200 hover:text-white">Contact</li>
            </NavLink>
            <NavLink to='/dashboard' onClick={closeMobileMenu}>
                <li className="transition-colors duration-200 hover:text-white">Dashboard</li>
            </NavLink>
        </>
    )

    return (
        <nav className="sticky top-0 z-50 w-full bg-base-200 border-b border-base-300 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left Section - Logo & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        {/* Mobile Menu Button */}
                        <ul
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-base-300 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            <Menu size={24} className="text-base-content" />
                        </ul>

                        <Logo style={''} />
                    </div>

                    {/* Center Section - Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        <ul className="menu menu-horizontal *:px-3 gap-1">
                            {user ? loggedInLinks : loggedOutLinks}
                        </ul>
                    </div>

                    {/* Right Section - Theme Toggle & Auth */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-lg bg-base-100 hover:bg-base-300 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <MoonIcon size={20} className="text-base-content" />
                            ) : (
                                <SunIcon size={20} className="text-warning" />
                            )}
                        </button>

                        {/* Auth Section */}
                        {user ? (
                            <div className="relative" ref={profileRef}>
                                {/* Profile Dropdown Button */}
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="flex items-center gap-2 p-1.5 pr-3 rounded-lg bg-base-100 hover:bg-base-300 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
                                >
                                    <img
                                        src={user.photoURL}
                                        alt="Profile"
                                        className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20"
                                    />
                                    <ChevronDown
                                        size={16}
                                        className={`hidden sm:block text-base-content transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {/* Dropdown Menu */}
                                {isProfileOpen && (
                                    <div className="absolute right-0 mt-2 w-56 bg-base-100 rounded-lg shadow-xl border border-base-300 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                        {/* User Info Header */}
                                        <div className="px-4 py-3 bg-base-200 border-b border-base-300">
                                            <p className="text-sm font-semibold text-base-content truncate">
                                                {user.displayName || 'User'}
                                            </p>
                                            <p className="text-xs text-base-content/60 truncate">
                                                {user.email}
                                            </p>
                                        </div>

                                        {/* Menu Items */}
                                        <div className="py-2">
                                            <Link
                                                to="/dashboard/my-profile"
                                                onClick={() => setIsProfileOpen(false)}
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-base-content hover:bg-base-200 transition-colors duration-150"
                                            >
                                                <UserCircle size={18} />
                                                My Profile
                                            </Link>
                                            <Link
                                                to="/dashboard"
                                                onClick={() => setIsProfileOpen(false)}
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-base-content hover:bg-base-200 transition-colors duration-150"
                                            >
                                                <Settings size={18} />
                                                Dashboard
                                            </Link>
                                        </div>

                                        {/* Logout Button */}
                                        <div className="border-t border-base-300 py-2">
                                            <button
                                                onClick={handleLogout}
                                                className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-error hover:bg-error/10 transition-colors duration-150"
                                            >
                                                <LogOut size={18} />
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link
                                    to="/login"
                                    className="btn btn-sm btn-ghost normal-case font-semibold hover:bg-base-300"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="btn btn-sm btn-primary normal-case font-semibold"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-base-100 border-t border-base-300 shadow-lg animate-in slide-in-from-top duration-200">
                    <div className="px-4 py-3 space-y-1">
                        <ul className="menu menu-sm gap-1">
                            {user ? loggedInLinks : loggedOutLinks}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
