import React, { useRef, useState } from 'react'
import useAxiosSecure from '../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import useAuth from '../../../../Hooks/UseAuth/useAuth'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../../Components/Loading/Loading'
import Swal from 'sweetalert2'
import { ArrowLeft, BadgeCheck, Download, Mail } from 'lucide-react'
import { Link } from 'react-router'

const MyLoans = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const modalRef = useRef()
    const [selectedPayment, setSelectedPayment] = useState([])

    const { isLoading, data: applications = [], refetch } = useQuery({
        queryKey: ['my-loans', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/applications?email=${user.email}`)
            return res.data
        }
    })

    const { isLoading: paymentLoading, data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`)
            return res.data
        }
    })

    const { data: loans = [] } = useQuery({
        queryKey: ['loans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans`)
            return res.data
        }
    })


    const handleCancle = (id) => {
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
                axiosSecure.delete(`/applications/${id}`)
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


    const handlePayment = async (application) => {
        const res = await axiosSecure.post('/payment-checkout-session', {
            applicationId: application._id,
            loanId: application.loanId,
            loanTitle: application.loanTitle,
            firstName: application.firstName,
            lastName: application.lastName,
            email: application.email,
            contactNumber: application.contactNumber
        });

        window.location.href = res.data.url;
    }

    const handleModal = (id) => {
        modalRef.current.showModal()
        const payment = payments.find(p => p.applicationId === id)
        setSelectedPayment(payment)
    }

    if (isLoading || paymentLoading) {
        return <Loading />
    }

    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl p-4">My Loans ({applications.length})</h1>
            </div>
            <div>
                <div className="overflow-x-auto no-scrollbar rounded-box border border-base-content/5 bg-base-100">
                    <table className="table">
                        <thead>
                            <tr className="text-center">
                                <th>Sl</th>
                                <th>Loan Id</th>
                                <th>Loan Loan Info</th>
                                <th>Loan Amount</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                applications.map((application, index) => {
                                    const matchedLoan = loans.find(l => l.loanId === application.loanId)
                                    return (
                                        <tr key={index} className="text-center">
                                            <th>{index + 1}</th>
                                            <th>{application.loanId}</th>
                                            <th className="flex justify-center">
                                                <div className="text-start">
                                                    <div>
                                                        <h1>Loan title: {application.loanTitle}</h1>
                                                    </div>
                                                    <div>
                                                        <h1>Borrower Name: {application.firstName} {application.lastName}</h1>
                                                        <h1>Borrower Email: {application.email}</h1>
                                                        <h1>Income Source: {application.incomeSource}</h1>
                                                        <h1>Montly Income: ${application.monthlyIncome}</h1>
                                                        <h1>Address: {application.address}</h1>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>${application.loanAmount}</th>
                                            <th>{application.status}</th>
                                            <th>
                                                <div className="flex gap-2 flex-col md:flex-row">
                                                    <Link to={matchedLoan ? `/loan-details/${matchedLoan._id}` : '#'}><button className="btn btn-accent btn-outline">View</button></Link>
                                                    {
                                                        application.paymentStatus === 'paid'
                                                            ?
                                                            <button onClick={() => handleModal(application._id)} className="btn btn-success btn-outline">Paid</button>
                                                            :
                                                            <button onClick={() => handlePayment(application)} className="btn btn-warning btn-outline ">Pay</button>
                                                    }
                                                    {
                                                        application.status === 'pending' &&
                                                        <button onClick={() => handleCancle(application._id)} className="btn btn-error btn-outline ">Cancel</button>
                                                    }
                                                </div>
                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-xl text-center">Payment Details</h3>
                        <div className="p-4 md:p-10 border border-base-200 my-4 rounded-xl">
                            <div className="text-center space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-center items-center py-4">
                                        <span className="flex justify-center items-center w-15 h-15 rounded-full bg-green-100"><BadgeCheck stroke='green' /></span>
                                    </div>
                                    <div className="space-y-2">
                                        <h1 className="font-bold text-2xl text-green-400">Payment Successful!</h1>
                                        <p>Your payment has been processed successfully. You will receive a confirmation email shortly.</p>
                                    </div>
                                </div>
                                <div className="pb-2 border-b-2 border-base-200">
                                    <div className="flex justify-between items-center">
                                        <h1>Amount</h1>
                                        <p>${selectedPayment.amount}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4 space-y-3">
                                <div className="flex justify-between items-center">
                                    <h1>Transaction ID</h1>
                                    <p className="p-0.5 px-1 text-[0.8rem] rounded-sm border border-base-200">{selectedPayment.transactionId}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1>Payment Details</h1>
                                    <p className="">**** 4242</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1>Date</h1>
                                    <p className="">{new Date(selectedPayment.paitAt).toLocaleString()}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1>Merchant</h1>
                                    <p className="">LoanBee</p>
                                </div>
                            </div>
                            <div className=" text-center py-5">
                                <p className="flex justify-center items-center gap-2"><Mail size={18} /> Receipt sent to {selectedPayment.customerEmail}</p>
                            </div>
                            <div className="space-y-2 w-full">
                                <button className="btn btn-primary w-full text-black"><Download size={18} />Download Receipt</button>
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

export default MyLoans
