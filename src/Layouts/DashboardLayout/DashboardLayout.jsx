import { Clock, DollarSign, HandCoins, Home, Inbox, LaptopMinimalCheck, MoonIcon, NotepadText, PanelRightClose, SunIcon, User, Users, ChevronDown, LogOut, Settings } from 'lucide-react'
import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router'
import Logo from '../../Components/Logo/Logo';
import useAuth from '../../Hooks/UseAuth/useAuth';
import useRole from '../../Hooks/Role/useRoll';
import { useTheme } from '../../Hooks/ThemeHook/useTheme';
import toast from 'react-hot-toast';

const DashbordLayout = () => {
    const [menu, setMenu] = useState('menu')
    const [theme, toggleTheme] = useTheme()
    const { user, logOut } = useAuth()
    const { role } = useRole()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logOut();
            toast.success('Logged out successfully!');
            navigate('/login');
        } catch (error) {
            toast.error('Failed to logout. Please try again.');
            console.error('Logout error:', error);
        }
    };

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" defaultChecked={window.innerWidth >= 1024} />
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

                        {/* Profile Dropdown */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="flex gap-2 items-center cursor-pointer hover:bg-base-100 p-2 rounded-lg transition-colors">
                                <div>
                                    <img className="w-10.5 h-10.5 rounded-full object-cover" src={user.photoURL} alt="" />
                                </div>
                                <div className="leading-5">
                                    <h1 className="font-bold capitalize">{user.displayName}</h1>
                                    <p className="text-sm">{role}</p>
                                </div>
                                <ChevronDown size={18} className="text-base-content/60" />
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-lg z-[1] w-52 p-2 shadow-lg border border-base-300 mt-2">
                                <li>
                                    <Link to='/dashboard/my-profile' className="flex items-center gap-3 hover:bg-primary/10">
                                        <User size={18} />
                                        <span>My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard' className="flex items-center gap-3 hover:bg-primary/10">
                                        <Settings size={18} />
                                        <span>Settings</span>
                                    </Link>
                                </li>
                                <div className="divider my-1"></div>
                                <li>
                                    <button onClick={handleLogout} className="flex items-center gap-3 hover:bg-error/10 text-error">
                                        <LogOut size={18} />
                                        <span>Logout</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </nav>
                <div className="m-3 md:m-5 p-2 md:p-10 rounded-2xl min-h-screen bg-base-200 border-base-200 inset-shadow-2xs shadow-sm">
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
                        <div className="space-y-2 *:shadow *:shadow-base-300 *:border-base-300 *:bg-base-100 *:rounded-lg text-[0.9rem]">
                            <li className="mt-2">
                                <Link to="/dashboard" onClick={() => setMenu("dashboard")} className={`${menu === "dashboard" ? "activeDashMenu" : ""} is-drawer-close:tooltip is-drawer-close:tooltip-right`}>
                                    <h1 className="flex justify-center items-center"><Home size={18} /></h1>
                                    <span className="is-drawer-close:hidden">Dashboard</span>
                                </Link>
                            </li>
                            {
                                role !== "admin" && role !== "manager" &&
                                <>
                                    <li className="mt-2">
                                        <Link to="/dashboard/my-loans" onClick={() => setMenu("my-loans")} className={`${menu === "my-loans" ? "activeDashMenu" : ""} is-drawer-close:tooltip is-drawer-close:tooltip-right`}>
                                            <h1 className="flex justify-center items-center"><DollarSign size={18} /></h1>
                                            <span className="is-drawer-close:hidden">My Loans</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/my-profile" onClick={() => setMenu("my-profile")} className={`${menu === "my-profile" ? "activeDashMenu" : ""} is-drawer-close:tooltip is-drawer-close:tooltip-right`}>
                                            <h1 className="flex justify-center items-center"><User size={18} /></h1>
                                            <span className="is-drawer-close:hidden">My Profile</span>
                                        </Link>
                                    </li>
                                </>
                            }

                            {/* admin routes */}
                            {
                                role === 'admin' &&
                                <>
                                    <li>
                                        <Link to="/dashboard/all-loans" onClick={() => setMenu("all-loans")} className={`${menu === "all-loans" ? "activeDashMenu" : ""} is-drawer-close:tooltip is-drawer-close:tooltip-right`}>
                                            <h1 className="flex justify-center items-center"><HandCoins size={18} /></h1>
                                            <span className="is-drawer-close:hidden">All Loans</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/loan-applications" onClick={() => setMenu("loan-applications")} className={`${menu === "loan-applications" ? "activeDashMenu" : ""} is-drawer-close:tooltip is-drawer-close:tooltip-right`}>
                                            <h1 className="flex justify-center items-center"><Inbox size={18} /></h1>
                                            <span className="is-drawer-close:hidden">Loan Applications</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/user-management" onClick={() => setMenu("user-management")} className={`${menu === "user-management" ? "activeDashMenu" : ""} is-drawer-close:tooltip is-drawer-close:tooltip-right`}>
                                            <h1 className="flex justify-center items-center"><Users size={18} /></h1>
                                            <span className="is-drawer-close:hidden">User Management</span>
                                        </Link>
                                    </li>
                                </>
                            }
                            {/* manager routes */}
                            {
                                role === 'manager' &&
                                <>
                                    <li>
                                        <Link to="/dashboard/add-loans" onClick={() => setMenu("add-loans")} className={`${menu === "add-loans" ? "activeDashMenu" : ""} is-drawer-close:tooltip is-drawer-close:tooltip-right`}>
                                            <h1 className="flex justify-center items-center"><HandCoins size={18} /></h1>
                                            <span className="is-drawer-close:hidden">Add Loan</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/manage-loans" onClick={() => setMenu("manage-loans")} className={`${menu === "manage-loans" ? "activeDashMenu" : ""} is-drawer-close:tooltip is-drawer-close:tooltip-right`}>
                                            <h1 className="flex justify-center items-center"><NotepadText size={18} /></h1>
                                            <span className="is-drawer-close:hidden">Manage Loans</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/pending-applications" onClick={() => setMenu("pending-application")} className={`${menu === "pending-application" ? "activeDashMenu" : ""} is-drawer-close:tooltip is-drawer-close:tooltip-right`}>
                                            <h1 className="flex justify-center items-center"><Clock size={18} /></h1>
                                            <span className="is-drawer-close:hidden">Pending Application</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/approved-applications" onClick={() => setMenu("approved-application")} className={`${menu === "approved-application" ? "activeDashMenu" : ""} is-drawer-close:tooltip is-drawer-close:tooltip-right`}>
                                            <h1 className="flex justify-center items-center"><LaptopMinimalCheck size={18} /></h1>
                                            <span className="is-drawer-close:hidden">Approved Application</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/my-profile" onClick={() => setMenu("my-profile")} className={`${menu === "my-profile" ? "activeDashMenu" : ""} is-drawer-close:tooltip is-drawer-close:tooltip-right`}>
                                            <h1 className="flex justify-center items-center"><User size={18} /></h1>
                                            <span className="is-drawer-close:hidden">My Profile</span>
                                        </Link>
                                    </li>
                                </>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashbordLayout
