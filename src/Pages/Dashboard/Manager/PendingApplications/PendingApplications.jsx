import { useQuery } from '@tanstack/react-query'
import React, { useRef, useState } from 'react'
import useAxiosSecure from '../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import { ScanSearch, SquareCheckBig, X } from 'lucide-react'
import Swal from 'sweetalert2'

const PendingApplications = () => {

    const modalRef = useRef()
    const [loan, setLoan] = useState([])
    const axiosSecure = useAxiosSecure()

    const { isLoading, data: applications = [], refetch } = useQuery({
        queryKey: ['pending-applications'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/applications?status=pending`)
            return res.data
        }
    })


    const { data: loans = [] } = useQuery({
        queryKey: ['loans'],
        queryFn: async () => {
            const res = await axiosSecure.get('/loans');
            return res.data;
        }
    });


    const updateStatusAction = (application, status) => {

        Swal.fire({
            title: `${status} application`,
            text: `Are you sure to ${status} the application?`,
            icon: "warning",
            showCancelButton: true,
            theme: 'auto',
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {

            if (result.isConfirmed) {
                const statusInfo = { status }
                axiosSecure.patch(`/applications/${application._id}/status`, statusInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `Application ${status} successfully!`,
                                showConfirmButton: false,
                                timer: 2000
                            })
                        }
                    })
            }
        })
    }



    const handleApproved = (application) => {
        updateStatusAction(application, 'approved')
    }

    const handleReject = (application) => {
        updateStatusAction(application, 'rejected')
    }

    const handleModal = (application) => {
        const matchedLoan = loans.find(loan => loan.loanId === application.loanId) || {};
        setLoan(matchedLoan)
        modalRef.current.showModal()
    };


    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl">Pending Application ({applications.length})</h1>
            </div>
            <div>
                <div className="overflow-x-auto no-scrollbar rounded-box border border-base-content/5 bg-base-100">
                    <table className="table">
                        <thead>
                            <tr className="text-center">
                                <th>Sl</th>
                                <th>Loan Id</th>
                                <th>User Info</th>
                                <th>Loan Amount</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                applications.map((application, index) => (
                                    <tr key={index} className="text-center">
                                        <th>{index + 1}</th>
                                        <th>{application.loanId}</th>
                                        <th>
                                            <div>
                                                <h1>{application.firstName} {application.lastName}</h1>
                                                <h1>{application.email}</h1>
                                            </div>
                                        </th>
                                        <th>${application.loanAmount}</th>
                                        <th>{application.status}</th>
                                        <th>
                                            {
                                                new Date(application.createdAt).toLocaleDateString()
                                            }
                                        </th>

                                        <th>
                                            <div className="flex gap-2">
                                                <div className="tooltip tooltip-top" data-tip='Approve'>
                                                    <button onClick={() => handleApproved(application)} className="btn btn-accent btn-outline btn-sm btn-square"><SquareCheckBig size={18} /></button>
                                                </div>
                                                <div onClick={() => handleReject(application)} className="tooltip tooltip-top" data-tip='Reject'>
                                                    <button className="btn btn-error btn-outline btn-sm btn-square"><X size={18} /></button>
                                                </div>
                                                <div onClick={() => handleModal(application)} className="tooltip tooltip-top" data-tip='View Details'>
                                                    <button className="btn btn-warning btn-outline btn-sm btn-square"><ScanSearch size={18} /></button>
                                                </div>
                                            </div>
                                        </th>
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
                        <h3 className="font-bold text-2xl text-center">Loan Detail</h3>
                        <div className="p-4">
                            <div className="flex flex-col md:flex-row gap-5 items-center">
                                <div className="">
                                    <img className="w-40 h-45 object-cover rounded-xl" src={loan.photo} alt="" />
                                </div>
                                <div>
                                    <div className="flex flex-col justify-between h-full space-y-5">
                                        <div className="space-y-2">
                                            <h1 className="font-bold  text-xl md:text-2xl">Loan Title: {loan.loanTitle}</h1>
                                            <div className="grid md:grid-cols-3 gap-3 items-center border-b-2 border-primary pb-5 p-2 border-dashed">
                                                <p>Category: {loan.loanCategory}</p>
                                                <p className="md:border-l-2 md:p-2 md:border-r-2">Interest Rate: {loan.interestRate}%</p>
                                                <p>Emi Plans: {loan.EMIPlans}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="font-bold text-xl">Description:</h1>
                                            <p>{loan.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )
}

export default PendingApplications
