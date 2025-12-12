import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const AdminLineChart = () => {

    const axiosSecure = useAxiosSecure()
    const { data: adminStats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin/dashboard-stats`)
            return res.data
        }
    })

    const chartData = adminStats?.monthlyTrends?.map((item) => ({
        name: `${item.month}-${item.year}`,
        count: item.count,
        totalAmount: item.totalAmount,
    })) || []

    return (
        <div className="space-y-5 p-5 border border-base-100 bg-base-300/45 rounded-2xl shadow-sm shadow-base-100 gap-5">
            <div>
                <h1 className="font-bold text-2xl">Overall Statistics</h1>
            </div>
            <div style={{ width: "100%" }} className="flex flex-col md:flex-row justify-center gap-5">
                <LineChart style={{ width: "100%", maxWidth: "900px", maxHeight: "30vh", aspectRatio: 1.518, }} data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" />
                </LineChart>
                <LineChart style={{ width: "100%", maxWidth: "700px", maxHeight: "30vh", aspectRatio: 1.618, }} data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line connectNulls type="monotone" dataKey="totalAmount" stroke="#82ca9d" fill="#82ca9d" />
                </LineChart>
            </div>
        </div>
    )
}

export default AdminLineChart
