import React, { useRef, useState } from 'react'
import useAxios from '../../../../Hooks/Axios/Axios/useAxios'
import { useQuery } from '@tanstack/react-query'
import { ChevronDown, ScanSearch } from 'lucide-react'

const LoanApplications = () => {

    const modalRef = useRef()
    const axiosSecure = useAxios()
    const [loan, setLoan] = useState([])
    const [statusFilter, setStatusFilter] = useState('all')

    const { isLoading, data: applications = [], refetch } = useQuery({
        queryKey: ['applications', statusFilter],
        queryFn: async () => {
            let url = '/applications'
            if (statusFilter !== 'all') {
                url += `?status=${statusFilter}`;
            }
            const res = await axiosSecure.get(url);
            return res.data
        }
    })

    const handleModal = (application) => {
        modalRef.current.showModal()
        setLoan(application)
    }

    console.log(loan)

    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl">Loan Applications ({applications.length})</h1>
            </div>
            <div className="space-y-2">
                <div className="dropdown dropdown-bottom flex justify-end">
                    <div tabIndex={0} role="button" className="btn m-1">
                        {statusFilter === 'all' ? 'All' : statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)}<ChevronDown size={18} />
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                        <li><a onClick={() => setStatusFilter('all')}>All</a></li>
                        <li><a onClick={() => setStatusFilter('pending')}>Pending</a></li>
                        <li><a onClick={() => setStatusFilter('approved')}>Approved</a></li>
                        <li><a onClick={() => setStatusFilter('rejected')}>Rejected</a></li>
                    </ul>
                </div>
                <div className="overflow-x-auto no-scrollbar rounded-box border border-base-content/5 bg-base-100">
                    <table className="table">
                        <thead>
                            <tr className="text-center">
                                <th>Sl</th>
                                <th>Loan Id</th>
                                <th>User Info</th>
                                <th>Loan Amount</th>
                                <th>Status</th>
                                <th>Approved/Reject Date</th>
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
                                            <div className="grid justify-center text-start">
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
                                            <div className="space-x-2">
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
                        <h3 className="font-bold text-lg text-center">Application Details</h3>
                        <div className="p-4 gap-3 flex justify-between">
                            <div className="flex flex-col justify-between p-4 border border-primary bg-primary/4 rounded-xl">
                                <h1>Loan Title: {loan.loanTitle}</h1>
                                <h1>Borrower Name: {loan.firstName} {loan.lastName}</h1>
                                <h1>Borrower Email: {loan.email}</h1>
                                <h1>Date: {new Date(loan.createdAt).toLocaleString()}</h1>
                            </div>
                            <div className="flex flex-col justify-between p-4 border border-primary bg-primary/4 rounded-xl">
                                <h1>Loan Amount: ${loan.loanAmount}</h1>
                                <h1>Interest Rate: {loan.interestRate}%</h1>
                                <h1>Loan Id: {loan.loanId}</h1>
                                <h1>Approved At: {new Date(loan.statusUpdatedAt).toLocaleString()}</h1>
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

export default LoanApplications
