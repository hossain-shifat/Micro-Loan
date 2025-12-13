import React, { useState } from 'react'
import useAxiosSecure from '../../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../../../Components/Loading/Loading'
import { ArrowLeft, ArrowRight, Edit } from 'lucide-react'

const RecentApplication = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6

    const axiosSecure = useAxiosSecure()
    const { data: adminStats = [], isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin/dashboard-stats`)
            return res.data
        }
    })

    const applications = adminStats?.recentApplications || []

    const totalPages = Math.ceil(applications.length / itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    const paginatedApplications = applications.slice(startIndex, endIndex)


    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="space-y-10 p-5 md:p-10 border border-base-100 bg-base-300/45 rounded-2xl shadow-sm shadow-base-100">
            <div>
                <h1 className="font-bold text-2xl">Recent Application</h1>
            </div>
            <div>
                <div className="overflow-x-auto no-scrollbar rounded-box border border-base-content/5 bg-base-100">
                    <table className="table table-sm">
                        <thead>
                            <tr className="text-center">
                                <th>Sl</th>
                                <th>Loan Id</th>
                                <th>Borrower Name</th>
                                <th>Borrower Email</th>
                                <th>Loan Amount</th>
                                <th>Status</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paginatedApplications.map((application, index) => (
                                    <tr key={index} className="text-center">
                                        <th>{startIndex + index + 1}</th>
                                        <th>{application.loanId}</th>
                                        <th>{application.firstName} {application.lastName}</th>
                                        <th><h1>{application.email}</h1></th>
                                        <th>${application.loanAmount}</th>
                                        <th>{application.status}</th>
                                        <th>
                                            {
                                                new Date(application.createdAt).toLocaleDateString()
                                            }
                                        </th>
                                        <th>
                                            <div className="space-x-2">
                                                <div className="tooltip tooltip-top" data-tip='Edit'>
                                                    <button className="btn btn-neutral btn-outline btn-sm"><Edit size={18} />Edit</button>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center items-center gap-3 mt-5">
                    <button className="btn btn-primary btn-sm btn-square rounded-full" disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)} >
                        <ArrowLeft size={18} />
                    </button>

                    {
                        [...Array(totalPages).keys()].map(number => {
                            const page = number + 1
                            const isActive = currentPage === page

                            return (
                                <button key={page} onClick={() => setCurrentPage(page)} className={`w-5 h-5 flex items-center justify-center text-sm text-center transition rounded-full ${isActive ? 'bg-primary text-white' : 'border border-base-300 hover:bg-base-200'} `}>
                                    {page}
                                </button>
                            )
                        })
                    }

                    <button className="btn btn-primary btn-sm btn-square rounded-full" disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)} >
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RecentApplication
