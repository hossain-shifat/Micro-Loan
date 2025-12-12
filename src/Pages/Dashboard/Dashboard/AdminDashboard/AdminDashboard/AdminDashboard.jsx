import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loading from '../../../../../Components/Loading/Loading'
import AdminStats from '../AdminStats/AdminStats'

const AdminDashboard = () => {

    const { isLoading, data: stats = [] } = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin/overview/stats`)
            return res.data.result
        }
    })

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div>
                <h1 className="font-bold text-2xl md:text-2xl">Dahsboard Overview</h1>
            </div>
            <div>
                <AdminStats />
            </div>
        </div>
    )
}

export default AdminDashboard
