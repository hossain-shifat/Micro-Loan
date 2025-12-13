import React, { useRef, useState } from 'react'
import useAxiosSecure from '../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'
import { Ban, Edit, Search, ShieldUser, Trash2 } from 'lucide-react'
import { useForm } from 'react-hook-form'

const UserManagement = () => {

    const modalRef = useRef()
    const [search, setSearch] = useState('')
    const [selectedUser, setSelectedUser] = useState([])
    const axiosSecure = useAxiosSecure()

    const { register: registerRole, handleSubmit: submitRole, formState: { errors: roleErrors } } = useForm()
    const { register: registerSuspend, handleSubmit: submitSuspend, formState: { errors: suspendErrors }, reset: resetSuspend } = useForm()

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users', search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?search=${search}`)
            return res.data
        }
    })



    const updateUserAction = (user, status) => {
        modalRef.current.close()
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
                const roleInfo = { role: status };
                axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `${user.displayName} is now a ${status}`,
                                showConfirmButton: false,
                                timer: 2000
                            })
                        }
                    })
            }
        })
    }

    const handleModal = (user) => {
        modalRef.current.showModal()
        setSelectedUser(user)
    }


    const handleRole = (data) => {
        console.log(data)
        const status = data.role
        updateUserAction(selectedUser, status)
    }


    const handleSuspend = async (data) => {
        modalRef.current.close()
        Swal.fire({
            title: "Suspend User?",
            text: `Are you sure you want to suspend ${selectedUser.displayName}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, suspend!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const suspendInfo = {
                    reason: data.suspendReason,
                    feedback: data.suspendFeedback
                }
                const res = await axiosSecure.patch(`/users/${selectedUser._id}/suspend`, suspendInfo)
                if (res.data.modifiedCount) {
                    refetch()
                    resetSuspend()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${selectedUser.displayName} has been suspended`,
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            }
        })
    }



    const handleDelete = (id) => {
        Swal.fire({
            title: 'Delete User',
            text: 'Are you sure you want to delete this User?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                icon: 'success',
                                title: 'User deleted successfully!',
                                showConfirmButton: false,
                                timer: 2000
                            })
                        }
                    })
            }
        })
    }


    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl p-4">All Users</h1>
            </div>
            <div className="space-y-2">
                <div>
                    <label className="input focus-within:outline-none border border-base-100">
                        <Search size={16} />
                        <input onChange={(e) => setSearch(e.target.value)} type="search" className="grow" placeholder="Search" />
                    </label>
                </div>
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
                                                            <button onClick={() => handleModal(user)} className="btn btn-primary btn-outline btn-sm btn-square" ><Edit size={18} /></button>
                                                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 hidden group-hover:block text-xs bg-base-300 p-1 rounded-md whitespace-nowrap shadow">Update User</span>
                                                        </div>
                                                        <div className="group relative">
                                                            <button onClick={() => handleDelete(user._id)} className="btn btn-error btn-outline btn-sm btn-square"><Trash2 size={18} /></button>
                                                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 hidden group-hover:block text-xs bg-base-300 p-1 rounded-md whitespace-nowrap shadow">Delete User</span>
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
                <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-xl text-center">Update User</h3>
                        <div className="p-5 bg-base-200 rounded-2xl mt-3">
                            {/* name of each tab group should be unique */}
                            <div className="tabs tabs-lift">
                                <label className="tab flex gap-2 items-center">
                                    <input type="radio" name="my_tabs_4" defaultChecked />
                                    <Edit size={14} stroke='blue' />
                                    Update Role
                                </label>
                                <div className="tab-content bg-base-100 border-base-300 p-6">
                                    <form onSubmit={submitRole(handleRole)} className=" border border-base-300 rounded-xl p-4 space-y-3">
                                        <fieldset className="fieldset space-y-3">
                                            <label className="label">
                                                <span className="label-text">Select Role</span>
                                            </label>
                                            <select defaultValue={selectedUser.role || "Pick a role"} className="select select-bordered w-full border-base-200 focus-within:outline-none" {...registerRole("role", { required: true })} >
                                                <option disabled>Pick a role</option>
                                                <option value="borrower">Borrower</option>
                                                <option value="manager">Manager</option>
                                            </select>
                                            <span className="label-text-alt">This action will update the user role.</span>
                                        </fieldset>
                                        <div className="w-full">
                                            <button className="btn btn-primary w-full">Update user Role</button>
                                        </div>
                                    </form>
                                </div>
                                <label className="tab flex gap-2 items-center">
                                    <input type="radio" name="my_tabs_4" />
                                    <Ban size={14} stroke='red' />
                                    Suspend User
                                </label>
                                <div className="tab-content space-y-3 bg-base-100 border-base-300 p-6">
                                    <div>
                                        <h1 className="font-bold text-xl">Suspend User</h1>
                                    </div>
                                    <form onSubmit={submitSuspend(handleSuspend)}>
                                        <div>
                                            <div className="grid gap-2 w-full">
                                                <label>Suspend Reason</label>
                                                <textarea placeholder="suspendReason" {...registerSuspend('suspendReason', { required: true })} className="textarea textarea-md w-full focus-within:outline-none"></textarea>
                                                {suspendErrors.suspendReason?.type === 'required' && <p className="text-red-500"> Suspend Reason is Required!</p>}
                                            </div>
                                            <div className="grid gap-2 w-full">
                                                <label>Suspend Feedback</label>
                                                <textarea placeholder="Suspend Feedback" {...registerSuspend('suspendFeedback', { required: true })} className="textarea textarea-md w-full focus-within:outline-none"></textarea>
                                                {suspendErrors.suspendFeedback?.type === 'required' && <p className="text-red-500"> Suspend Feedback is Required!</p>}
                                            </div>
                                            <div className="w-full mt-5">
                                                <button className="btn btn-primary w-full">Suspend User</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )
}

export default UserManagement
