import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../Hooks/UseAuth/useAuth'
import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import Loading from '../../../Components/Loading/Loading'
import Swal from 'sweetalert2'

const ApplyLoan = () => {

    const { user } = useAuth()
    const { id } = useParams()

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const axiosSecure = useAxiosSecure()

    const { isLoading, data: loans = [] } = useQuery({
        queryKey: ['loans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans`)
            return res.data
        }
    })

    const handleApplyLoan = (data) => {
        axiosSecure.post('/applications', data)
            .then(res => {
                if (res.data.insertedId) {
                    reset()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Application has been Submitted",
                        showConfirmButton: false,
                        theme: 'auto',
                        timer: 1500
                    })
                }
            })
    }

    if (isLoading) {
        return <Loading />
    }

    const loan = loans.find((l) => l._id === id);

    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-2xl font-bold md:text-4xl">Apply Loan</h1>
            </div>
            <div className="max-w-[500px] w-full mx-auto border border-base-200 rounded-2xl bg-base-200 p-5 sm:p-10">
                <div>
                    <h1 className="font-bold text-2xl text-center pb-4">Fill the Form to Procced</h1>
                </div>
                <form onSubmit={handleSubmit(handleApplyLoan)}>
                    <div className="space-y-3">
                        <div className="grid gap-2 w-full">
                            <label>First Name</label>
                            <input type="text" placeholder="First Name" {...register('firstName', { required: true })} className="input input-md w-full focus-within:outline-none" />
                            {errors.firstName?.type === 'required' && <p className="text-red-500">First name is required!</p>}
                        </div>
                        <div className="grid gap-2 w-full">
                            <label>Last Name</label>
                            <input type="text" placeholder="Last Name" {...register('lastName', { required: true })} className="input input-md w-full focus-within:outline-none" />
                            {errors.lastName?.type === 'required' && <p className="text-red-500">Last name is required!</p>}
                        </div>
                        <div className="grid gap-2 w-full">
                            <label>Email</label>
                            <input type="text" readOnly defaultValue={user.email} placeholder="Email" {...register('email', { required: true })} className="input input-md w-full focus-within:outline-none" />
                            {errors.email?.type === 'required' && <p className="text-red-500">Email is required!</p>}
                        </div>
                        <div className="grid gap-2 w-full">
                            <label>Loan Title</label>
                            <input type="text" readOnly defaultValue={loan.loanTitle} placeholder="Loan Title" {...register('loanTitle', { required: true })} className="input input-md w-full focus-within:outline-none" />
                            {errors.loanTitle?.type === 'required' && <p className="text-red-500">Loan title is required!</p>}
                        </div>

                        <div className="grid gap-2 w-full">
                            <label>Interest Rate (%)</label>
                            <input type="phone" readOnly defaultValue={loan.interestRate} placeholder="Interest Rate" {...register('interestRate', { required: true })} className="input input-md w-full focus-within:outline-none" />
                            {errors.interestRate?.type === 'required' && <p className="text-red-500">Interest rate is required!</p>}
                        </div>
                        <div className="grid gap-2 w-full">
                            <label>Contact Number</label>
                            <input type="text" placeholder="Contact Number" {...register('contactNumber', { required: true })} className="input input-md w-full focus-within:outline-none" />
                            {errors.contactNumber?.type === 'required' && <p className="text-red-500">Contact Number is required!</p>}
                        </div>
                        <div className="grid gap-2 w-full">
                            <label>National Id / Passport Number</label>
                            <input type="text" placeholder="National Id / Passport Number" {...register('idNumber', { required: true })} className="input input-md w-full focus-within:outline-none" />
                            {errors.idNumber?.type === 'required' && <p className="text-red-500">National Id / Passport Number is required!</p>}
                        </div>
                        <div className="grid gap-2 w-full">
                            <label>Income Source</label>
                            <input type="text" placeholder="Income Source" {...register('incomeSource', { required: true })} className="input input-md w-full focus-within:outline-none" />
                            {errors.incomeSource?.type === 'required' && <p className="text-red-500">Income Source is required!</p>}
                        </div>
                        <div className="grid gap-2 w-full">
                            <label>Monthly Income</label>
                            <input type="text" placeholder="Monthly Income" {...register('monthlyIncome', { required: true })} className="input input-md w-full focus-within:outline-none" />
                            {errors.monthlyIncome?.type === 'required' && <p className="text-red-500">Monthly Income is required!</p>}
                        </div>
                        <div className="grid gap-2 w-full">
                            <label>Loan Amount</label>
                            <input type="text" placeholder="Loan Amount" {...register('loanAmount', { required: true })} className="input input-md w-full focus-within:outline-none" />
                            {errors.loanAmount?.type === 'required' && <p className="text-red-500">Loan Amount is required!</p>}
                        </div>
                        <div className="grid gap-2 w-full">
                            <label>Reason for Loan</label>
                            <textarea placeholder="Reason for Loan" {...register('reasonForLoan', { required: true })} className="textarea textarea-md w-full focus-within:outline-none"></textarea>
                            {errors.reasonForLoan?.type === 'required' && <p className="text-red-500"> Reason for Loan is Required!</p>}
                        </div>
                        <div className="grid gap-2 w-full">
                            <label>Address</label>
                            <input type="text" placeholder="Address" {...register('address', { required: true })} className="input input-md w-full focus-within:outline-none" />
                            {errors.address?.type === 'required' && <p className="text-red-500">Address is required!</p>}
                        </div>
                        <div className="grid gap-2 w-full">
                            <label>Extra Notes</label>
                            <textarea placeholder="Extra Notes" {...register('extraNotes', { required: true })} className="textarea textarea-md w-full focus-within:outline-none"></textarea>
                            {errors.extraNotes?.type === 'required' && <p className="text-red-500"> Extra Notes is Required!</p>}
                        </div>
                        <div className="w-full mt-5">
                            <button className="btn btn-primary w-full">Apply For Loan</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ApplyLoan
