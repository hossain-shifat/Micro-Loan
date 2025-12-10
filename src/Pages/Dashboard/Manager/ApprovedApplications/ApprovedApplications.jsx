import { useQuery } from '@tanstack/react-query'
import React, { useRef, useState } from 'react'
import useAxiosSecure from '../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import { ScanSearch, SquareCheckBig, Trash2, X } from 'lucide-react'
import Swal from 'sweetalert2'
import Loading from '../../../../Components/Loading/Loading'

const ApprovedApplications = () => {

    const modalRef = useRef()
    const [loan, setLoan] = useState([])
    const axiosSecure = useAxiosSecure()

    const { isLoading, data: applications = [], refetch } = useQuery({
        queryKey: ['approved-applications'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/applications?status=approved`)
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
                        if (res.data.success) {
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
        })
    }




    const handleReject = (application) => {
        updateStatusAction(application, 'rejected')
    }

    const handleModal = (application) => {
        modalRef.current.showModal();
        const matchedLoan = loans.find(loan => loan.loanId === application.loanId)
        setLoan(matchedLoan);
    }

    const handleRemove = (id) => {
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
                            });
                        }
                    })
            }
        });
    };


    if (isLoading) {
        return <Loading/>
    }


    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl">Approved Application ({applications.length})</h1>
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
                                <th>Approved Date</th>
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
                                                new Date(application.statusUpdatedAt).toLocaleDateString()
                                            }
                                        </th>
                                        <th>
                                            <div className="flex gap-2">
                                                <div onClick={() => handleReject(application)} className="tooltip tooltip-top" data-tip='Reject'>
                                                    <button className="btn btn-error btn-outline btn-sm btn-square"><X size={18} /></button>
                                                </div>
                                                <div onClick={() => handleModal(application)} className="tooltip tooltip-top" data-tip='View Details'>
                                                    <button className="btn btn-warning btn-outline btn-sm btn-square"><ScanSearch size={18} /></button>
                                                </div>
                                                <div onClick={() => handleRemove(application._id)} className="tooltip tooltip-top" data-tip='Delete'>
                                                    <button className="btn btn-error btn-outline btn-sm btn-square"><Trash2 size={18} /></button>
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

export default ApprovedApplications
