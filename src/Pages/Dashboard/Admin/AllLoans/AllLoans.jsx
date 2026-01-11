import React, { useRef, useState } from 'react'
import useAxiosSecure from '../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { BookOpenText, Edit, Eye, EyeClosed, Trash2 } from 'lucide-react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const AllLoans = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm()

    const loanCategories = ["Personal Loan", "Home Loan", "Car Loan", "Business Loan", "Education Loan", "Medical Loan", "Travel Loan", "Emergency Loan"]

    const modalRef = useRef()
    const detailsRef = useRef()
    const [updateLoan, setUpdateLoan] = useState([])
    const [loanDetails, setLoanDetails] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All")
    const axiosSecure = useAxiosSecure()

    const { refetch, data: loans = [] } = useQuery({
        queryKey: ['loans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans`)
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
                            })
                        }
                    })
            }
        })
    }


    const handleDetailsModal = (loan) => {
        detailsRef.current.showModal()
        setLoanDetails(loan)
    }


    const handleModal = (loan) => {
        modalRef.current.showModal()
        setUpdateLoan(loan)
        setLoanDetails(loan)
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
                            });
                        }
                    })
            })
    }


    const handleShowOnHomeToggle = (loan) => {
        const updatedValue = !loan.showOnHome
        const updateInfo = { showOnHome: updatedValue }
        axiosSecure.patch(`/loans/${loan._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        icon: "success",
                        title: `Loan ${updatedValue ? "shown" : "hidden"} on Home`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }


    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl p-4">All Loans</h1>
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
                                <th>
                                    <div className="flex w-full items-center">
                                        <h1>Category by: </h1>
                                        <select className="select w-full select-sm border-none focus-within:outline-none" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} >
                                            <option value="All">All</option>
                                            {loanCategories.map((cat, idx) => (
                                                <option key={idx} value={cat}>
                                                    {cat}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </th>
                                <th>Show on Home</th>
                                <th>Admin Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loans.filter(loan => selectedCategory === "All" || loan.loanCategory === selectedCategory).map((loan, index) => (
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
                                        <td>{loan.loanCategory}</td>
                                        <td>
                                            <input type="checkbox" className="checkbox checkbox-primary checkbox-sm rounded-sm" checked={loan.showOnHome || false} onChange={() => handleShowOnHomeToggle(loan)} />
                                        </td>
                                        <td className="flex gap-2">
                                            <button onClick={() => handleModal(loan)} className="btn btn-square hover:bg-primary"><Edit size={18} /></button>
                                            <button onClick={() => handleDetailsModal(loan)} className="btn btn-square hover:bg-primary"><BookOpenText size={18} /></button>
                                            <button onClick={() => handleDelete(loan._id)} className="btn btn-square hover:bg-error"><Trash2 size={18} /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                {/* Details Modal */}
                <dialog ref={detailsRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-2xl text-center">Loan Detail</h3>
                        <div className="p-4">
                            <div className="flex flex-col md:flex-row gap-5 items-center">
                                <div className="">
                                    <img className="w-60 h-45 object-cover rounded-xl" src={loanDetails.photo} alt="" />
                                </div>
                                <div>
                                    <div className="flex flex-col justify-between h-full space-y-5">
                                        <div className="space-y-2">
                                            <h1 className="font-bold  text-xl md:text-2xl">loan Title: {loanDetails.loanTitle}</h1>
                                            <div className="grid md:grid-cols-3 gap-3 items-center border-b-2 border-primary pb-5 p-2 border-dashed">
                                                <p>Category: {loanDetails.loanDetailsCategory}</p>
                                                <p className="md:border-l-2 md:p-2 md:border-r-2">Interest Rate: {loanDetails.interestRate}%</p>
                                                <p>Emi Plans: {loanDetails.EMIPlans}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="font-bold text-xl">Description:</h1>
                                            <p>{loanDetails.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                {/* if there is a button in form, it will close the modal*/}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

                {/* update modal */}
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
                                        <input type="checkbox" checked={updateLoan.showOnHome} {...register("showOnHome")} className="toggle toggle-primary" />
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

export default AllLoans
