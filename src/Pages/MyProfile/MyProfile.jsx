import React from 'react'
import useAuth from '../../Hooks/UseAuth/useAuth'
import useRole from '../../Hooks/Role/useRoll'
import { Edit } from 'lucide-react'
import { Link } from 'react-router'

const MyProfile = () => {

    const { user, logOut } = useAuth()
    const { role } = useRole()

    const handleLogout = () =>{
        logOut()
    }

    return (
        <div className="max-w-[650px] mx-auto min-h-dvh flex justify-center items-center">
            <div className="space-y-3 p-5 border border-base-100 bg-base-100 rounded-2xl shadow-sm">
                <div>
                    <img className="w-full h-65 object-cover rounded-xl mx-auto" src={user.photoURL} alt="" />
                </div>
                <div className="px-2 space-y-2">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-xl">My Profile</h1>
                        <div className="tooltip tooltip-top" data-tip='Update Profile'>
                            <Link to='/update-profile'><button className="btn btn-primary btn-square btn-sm"><Edit size={16} /></button></Link>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <h1 className="font-bold text-md">Name:</h1>
                        <p className="font-semibold text-md capitalize flex gap-1">{user.displayName} <span className="capitalize"> ({role})</span></p>
                    </div>
                    <div className="flex gap-3">
                        <h1>Email:</h1>
                        <p>{user.email}</p>
                    </div>
                    <div className="flex gap-3">
                        <h1>Phone:</h1>
                        <p>+880123xxxxxxx</p>
                    </div>
                    <div className="flex gap-3">
                        <h1>Address:</h1>
                        <p>Savar,Dhaka</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={handleLogout} className="btn btn-error btn-outline">logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile
