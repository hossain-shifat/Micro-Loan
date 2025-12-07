import React, { useState } from 'react'
import useAxiosSecure from '../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'
import { ShieldPlus, ShieldX } from 'lucide-react'

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
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
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


    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl">Users</h1>
            </div>
            <div>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
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
                                                    <div className="space-x-2">
                                                        <button onClick={() => handleMakeBorrower(user)} className="btn btn-primary">Make Borrower</button>
                                                        <button onClick={() => handleMakeManager(user)} className="btn btn-primary">Make Manager</button>
                                                    </div>
                                                    :
                                                    <button disabled={user.role === 'admin' && true} className="btn btn-error">Admin</button>
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
