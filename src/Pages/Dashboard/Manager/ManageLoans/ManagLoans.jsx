import React from 'react'
import useAuth from '../../../../Hooks/UseAuth/useAuth'
import useAxiosSecure from '../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../../Components/Loading/Loading'
import { Edit, Trash2 } from 'lucide-react'
import Swal from 'sweetalert2'

const ManagLoans = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { isLoading, data: loans = [], refetch } = useQuery({
        queryKey: ['loans', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans?email=${user.email}`)
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
                <h1 className="font-bold text-2xl md:text-4xl">Manage Loans</h1>
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
                                <th>Action</th>
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
                                        <td className="flex gap-2 justify-center">
                                            <button className="btn btn-square btn-primary">
                                                <Edit size={18} />
                                            </button>
                                            <button onClick={() => handleDelete(loan._id)} className="btn btn-square btn-error">
                                                <Trash2 size={18} />
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

export default ManagLoans
