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

    const chartData = adminStats?.recentApplications?.map((loan) => ({
        name: loan.loanTitle,
        value: Number(loan.loanAmount)
    })) || []

    return (
        <div className="space-y-5 p-5 border border-base-100 bg-base-300/45 rounded-2xl shadow-sm shadow-base-100 gap-5">
            <div>
                <h1 className="font-bold text-2xl">Overall Statistics</h1>
            </div>
            <div>
                <LineChart
                    style={{ width: '100%', maxWidth: '100%', maxHeight: '50vh', aspectRatio: 1.618 }}
                    responsive
                    data={chartData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line connectNulls type="monotone" dataKey="value" stroke="#14B8A6" fill="#14B8A6" />
                </LineChart>
            </div>
        </div>
    )
}

export default AdminLineChart
