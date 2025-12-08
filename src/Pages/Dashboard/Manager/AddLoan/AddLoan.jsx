import React from 'react'
import { useForm } from 'react-hook-form'
import { assets } from '../../../../assets/assets'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import axios from 'axios'
import useAuth from '../../../../Hooks/UseAuth/useAuth'

const AddLoan = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm()

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const loanCategories = ["Personal Loan", "Home Loan", "Car Loan", "Business Loan", "Education Loan", "Medical Loan", "Travel Loan", "Emergency Loan"];

    const handleLoanSubmit = (data) => {

        const photoLoan = data.photo[0];

        const formData = new FormData()
        formData.append('image', photoLoan)

        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_HOST}`, formData)
            .then(res => {
                const loanImg = res.data.data.url

                const loanInfo = {
                    ...data,
                    photo: loanImg,
                    name: user.displayName,
                    email: user.email,
                }

                axiosSecure.post('/loans', loanInfo)
                    .then(res => {
                        if (res.data.insertedId) {
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

    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-2xl font-bold md:text-4xl">Add Loan</h1>
            </div>
            <div className="max-w-[500px] w-full mx-auto border border-base-200 rounded-2xl bg-base-200 p-5 sm:p-10">
                <div>
                    <h1 className="font-bold text-2xl text-center pb-4">Fill the Form to Procced</h1>
                </div>
                <form onSubmit={handleSubmit(handleLoanSubmit)}>
                    <div className="space-y-3">
                        <div className="grid gap-2 w-full">
                            <label>Loan Title</label>
                            <input type="text" placeholder="Loan Title" {...register('loanTitle', { required: true })} className="input input-md w-full focus-within:outline-none" />
                            {errors.loanTitle?.type === 'required' && <p className="text-red-500">Loan title is required!</p>}
                        </div>
                        <fieldset className="grid gap-2 w-full">
                            <label>Loan Category</label>
                            <select defaultValue="" {...register('loanCategory', { required: true })} className="select w-full focus-within:outline-none">
                                <option value="" disabled>Pick a Category</option>
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
                            <input type="text" placeholder="Interest Rate" {...register('interestRate', { required: true })} className="input input-md w-full focus-within:outline-none" />
                            {errors.interestRate?.type === 'required' && <p className="text-red-500">Interest rate is required!</p>}
                        </div>
                        <div className="grid gap-2 w-full">
                            <label>Max Loan Limit</label>
                            <input type="text" placeholder="Max Loan Limit" {...register('maxLoanLimit', { required: true })} className="input input-md w-full focus-within:outline-none" />
                            {errors.maxLoanLimit?.type === 'required' && <p className="text-red-500">Max loan limit is required!</p>}
                        </div>
                        <div className="grid gap-2 w-full">
                            <label>Required Documents</label>
                            <input type="text" placeholder="Required Documents" {...register('requiredDocuments', { required: true })} className="input input-md w-full focus-within:outline-none" />
                            {errors.requiredDocuments?.type === 'required' && <p className="text-red-500">Required documents is required!</p>}
                        </div>
                        <div className="grid gap-2 w-full">
                            <label>EMI Plans</label>
                            <input type="text" placeholder="EMI Plans" {...register('EMIPlans', { required: true })} className="input input-md w-full focus-within:outline-none" />
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
                            <textarea placeholder="Description" {...register('description', { required: true })} className="textarea textarea-md w-full focus-within:outline-none"></textarea>
                            {errors.description?.type === 'required' && <p className="text-red-500"> Description is Required!</p>}
                        </div>
                        <div className="my-6 px-2 flex justify-between gap-2 w-full">
                            <label>Show on Home</label>
                            <input type="checkbox" {...register("showOnHome")} className="toggle toggle-primary" />
                        </div>
                        <div className="w-full mt-5">
                            <button className="btn btn-primary w-full">Submit Loan</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddLoan
