import React from 'react'
import useAxiosSecure from '../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { BookOpenText, Edit, Eye, EyeClosed, Trash2 } from 'lucide-react'

const AllLoans = () => {

    const axiosSecure = useAxiosSecure()

    const { refetch, data: loans = [] } = useQuery({
        queryKey: ['loans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans`)
            return res.data
        }
    })


    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl">All Loans</h1>
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
                                <th>Created By</th>
                                <th>Show on Home</th>
                                <th>Admin Action</th>
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
                                        <td>{loan.email}</td>
                                        <td>
                                            <button className="btn btn-success btn-outline btn-square">{loan.showOnHome ? <Eye size={20} /> : <EyeClosed size={20} />}</button>
                                        </td>
                                        <td className="flex gap-2">
                                            <button className="btn btn-square hover:bg-primary">
                                                <Edit size={16} />
                                            </button>
                                            <button className="btn btn-square hover:bg-primary">
                                                <BookOpenText size={16} />
                                            </button>
                                            <button className="btn btn-square hover:bg-primary">
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
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

export default AllLoans
