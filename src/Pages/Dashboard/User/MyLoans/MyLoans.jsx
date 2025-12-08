import React from 'react'
import useAxiosSecure from '../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import useAuth from '../../../../Hooks/UseAuth/useAuth'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../../Components/Loading/Loading'
import { BadgeCent, SquarePen, X } from 'lucide-react'
import Swal from 'sweetalert2'

const MyLoans = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { isLoading, data: applications = [], refetch } = useQuery({
        queryKey: ['my-loans', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/applications?email=${user.email}`)
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
                                });
                            }
                        })
                }
            });
        };



    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl">My Loans ({applications.length})</h1>
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
                                applications.map((application, index) => (
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
                                            <div className="space-x-2">
                                                <div className="tooltip tooltip-top" data-tip='Edit'>
                                                    <button className="btn btn-accent btn-outline btn-sm btn-square"><SquarePen size={18} /></button>
                                                </div>
                                                {
                                                    application.status === 'pending' &&
                                                    <div className="tooltip tooltip-top" data-tip='Cancel'>
                                                        <button onClick={()=>handleCancle(application._id)} className="btn btn-error btn-outline btn-sm btn-square"><X size={18} /></button>
                                                    </div>
                                                }
                                                <div className="tooltip tooltip-top" data-tip='Pay'>
                                                    <button className="btn btn-warning btn-outline btn-sm btn-square"><BadgeCent size={18} /></button>
                                                </div>
                                            </div>
                                        </th>
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

export default MyLoans
