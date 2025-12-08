import React, { useState } from 'react'
import useAxiosSecure from '../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'
import { Handshake, ShieldPlus, ShieldUser, ShieldX, User, UserStar } from 'lucide-react'

const UserManagement = () => {

    const axiosSecure = useAxiosSecure()

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data
        }
    })



    const updateUserAction = (user, status) => {
        const roleInfo = { role: status }
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {

                    Swal.fire({
                        title: "Change User Role?",
                        text: `Are you sure you want to make ${user.displayName} a ${status}?`,
                        icon: "warning",
                        showCancelButton: true,
                        theme: 'auto',
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            refetch()
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `${user.displayName} is marked as ${status}`,
                                showConfirmButton: false,
                                timer: 2000
                            });
                        }
                    });
                }
            })
    }

    const handleMakeManager = (user) => {
        updateUserAction(user, 'manager')
    }

    const handleMakeBorrower = (user) => {
        updateUserAction(user, 'borrower')
    }
    const handleMakeUser = (user) => {
        updateUserAction(user, 'user')
    }


    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl">All Users</h1>
            </div>
            <div>
                <div className="overflow-x-auto no-scrollbar rounded-box border border-base-content/5 bg-base-100">
                    <table className="table">
                        <thead>
                            <tr className="text-center">
                                <th>Sl</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Join at</th>
                                <th>Role</th>
                                <th>Admin Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr key={index} className="text-center">
                                        <th>{index + 1}</th>
                                        <td>{user.displayName}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {
                                                new Date(user.createdAt).toLocaleString()
                                            }
                                        </td>
                                        <td>{user.role}</td>
                                        <td className="flex justify-center items-center">
                                            {
                                                user.role !== 'admin' ?
                                                    <div className="space-x-1 flex items-center relative">
                                                        <div className="group relative" >
                                                            <button onClick={() => handleMakeUser(user)} className="btn btn-primary btn-outline btn-sm btn-square" ><User size={18} /></button>
                                                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 hidden group-hover:block text-xs bg-base-300 p-1 rounded-md whitespace-nowrap shadow">Promote to User</span>
                                                        </div>
                                                        <div className="group relative">
                                                            <button onClick={() => handleMakeBorrower(user)} className="btn btn-primary btn-outline btn-sm btn-square"><Handshake size={18} /></button>
                                                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 hidden group-hover:block text-xs bg-base-300 p-1 rounded-md whitespace-nowrap shadow">Promote to Borrower</span>
                                                        </div>
                                                        <div className="group relative">
                                                            <button onClick={() => handleMakeManager(user)} className="btn btn-primary btn-outline btn-sm btn-square"><UserStar size={18} /></button>
                                                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 hidden group-hover:block text-xs bg-base-300 p-1 rounded-md whitespace-nowrap shadow">Promote to Manager</span>
                                                        </div>
                                                    </div>
                                                    :
                                                    <button disabled={user.role === 'admin' && true} className="btn btn-outline btn-sm btn-square"><ShieldUser size={18} /></button>
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserManagement
