import { useQuery } from '@tanstack/react-query'
import React from 'react'

const AdminDashboard = () => {

    const { isLoading, data: stats = [] } = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin/overview/stats`)
            return res.data.result
        }
    })

    console.log(stats)

    return (
        <div>
            <h1>Admin dahsboard</h1>
        </div>
    )
}

export default AdminDashboard
