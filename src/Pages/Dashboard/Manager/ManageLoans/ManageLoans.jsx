import React, { useRef, useState } from 'react'
import useAuth from '../../../../Hooks/UseAuth/useAuth'
import useAxiosSecure from '../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../../Components/Loading/Loading'
import { Edit, Trash2 } from 'lucide-react'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const ManageLoans = () => {


    const { register, handleSubmit, formState: { errors }, } = useForm()

    const loanCategories = ["Personal Loan", "Home Loan", "Car Loan", "Business Loan", "Education Loan", "Medical Loan", "Travel Loan", "Emergency Loan"]

    const modalRef = useRef()
    const [updateLoan, setUpdateLoan] = useState([])
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { isLoading, data: loans = [], refetch } = useQuery({
        queryKey: ['loans', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans?email=${user.email}`)
            return res.data
        }
    })


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Delete application',
            text: 'Are you sure you want to delete this application?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/loans/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                icon: 'success',
                                title: 'Deleted successfully!',
                                showConfirmButton: false,
                                timer: 2000
                            });
                        }
                    })
            }
        });
    };

    const handleModal = (loan) => {
        modalRef.current.showModal()
        setUpdateLoan(loan)
    }

    const handleUpdate = (data) => {
        const photoLoan = data.photo[0];

        const formData = new FormData()
        formData.append('image', photoLoan)

        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_HOST}`, formData)
            .then(res => {
                const loanImg = res.data.data.url

                const loanInfo = {
                    ...data,
                    photo: loanImg
                }

                axiosSecure.patch(`/loans/${updateLoan._id}`, loanInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            modalRef.current.close()
                            refetch()
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Loan Submitted",
                                showConfirmButton: false,
                                timer: 2000
                            })
                        }
                    })
            })
    }


    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl">Manage Loans</h1>
            </div>
            <div>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                    <table className="table">
                        <thead>
                            <tr className="text-center">
                                <th>Sl</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Interest</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loans.map((loan, index) => (
                                    <tr key={index} className="text-center">
                                        <th>{index + 1}</th>
                                        <td>
                                            {
                                                <img className="w-10 h-10 object-cover mx-auto rounded-sm" src={loan.photo} alt="" />
                                            }
                                        </td>
                                        <td>{loan.loanTitle}</td>
                                        <td>{loan.interestRate}%</td>
                                        <td>{loan.loanCategory}</td>
                                        <td className="flex gap-2 justify-center">
                                            <button onClick={() => handleModal(loan)} className="btn btn-square btn-primary"><Edit size={18} /></button>
                                            <button onClick={() => handleDelete(loan._id)} className="btn btn-square btn-error"><Trash2 size={18} /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-xl text-center">Update</h3>
                        <div className="p-5 bg-base-200 rounded-2xl mt-3">
                            <form onSubmit={handleSubmit(handleUpdate)}>
                                <div className="space-y-3">
                                    <div className="grid gap-2 w-full">
                                        <label>Loan Title</label>
                                        <input type="text" defaultValue={updateLoan.loanTitle} placeholder="Loan Title" {...register('loanTitle', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                        {errors.loanTitle?.type === 'required' && <p className="text-red-500">Loan title is required!</p>}
                                    </div>
                                    <fieldset className="grid gap-2 w-full">
                                        <label>Loan Category</label>
                                        <select defaultValue="" {...register('loanCategory', { required: true })} className="select w-full focus-within:outline-none">
                                            <option defaultValue={updateLoan.loanCategory} disabled>Pick a Category</option>
                                            {loanCategories.map((category, index) => (
                                                <option key={index} value={category}>
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.loanCategory && (<p className="text-red-500">Loan category is required!</p>)}
                                    </fieldset>

                                    <div className="grid gap-2 w-full">
                                        <label>Interest Rate</label>
                                        <input type="text" defaultValue={updateLoan.interestRate} placeholder="Interest Rate" {...register('interestRate', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                        {errors.interestRate?.type === 'required' && <p className="text-red-500">Interest rate is required!</p>}
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Max Loan Limit</label>
                                        <input type="text" defaultValue={updateLoan.maxLoanLimit} placeholder="Max Loan Limit" {...register('maxLoanLimit', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                        {errors.maxLoanLimit?.type === 'required' && <p className="text-red-500">Max loan limit is required!</p>}
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Required Documents</label>
                                        <input type="text" defaultValue={updateLoan.requiredDocuments} placeholder="Required Documents" {...register('requiredDocuments', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                        {errors.requiredDocuments?.type === 'required' && <p className="text-red-500">Required documents is required!</p>}
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>EMI Plans</label>
                                        <input type="text" defaultValue={updateLoan.EMIPlans} placeholder="EMI Plans" {...register('EMIPlans', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                        {errors.EMIPlans?.type === 'required' && <p className="text-red-500">EMI plans is required!</p>}
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label className="text-lg">Image</label>
                                        <label className="flex w-full border border-base-100 rounded-xl">
                                            <span className="w-full h-12 flex justify-center items-center bg-primary rounded-l-xl font-bold text-white text-center">Choose File</span>
                                            <input type="file" {...register('photo', { required: true })} className="w-full p-3 bg-base-100 rounded-l-0 rounded-r-xl focus-within:outline-none placeholder:text-[#94A3B8] text-base-content text-md" />
                                        </label>
                                        {errors.photo?.type === 'required' && <p className="text-red-500">Image is Required!</p>}
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Description</label>
                                        <textarea placeholder="Description" defaultValue={updateLoan.description} {...register('description', { required: true })} className="textarea textarea-md w-full focus-within:outline-none"></textarea>
                                        {errors.description?.type === 'required' && <p className="text-red-500"> Description is Required!</p>}
                                    </div>
                                    <div className="my-6 px-2 flex justify-between gap-2 w-full">
                                        <label>Show on Home</label>
                                        <input type="checkbox" {...register("showOnHome")} className="toggle toggle-primary" />
                                    </div>
                                    <div className="w-full mt-5">
                                        <button className="btn btn-primary w-full">Update Loan</button>
                                    </div>
                                </div>
                            </form>
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

export default ManageLoans
