import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import useAxiosSecure from '../../../../../Hooks/Axios/AxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManagerAreaChart = () => {

    const axiosSecure = useAxiosSecure()
    const { data: managerStats = [], isLoading } = useQuery({
        queryKey: ['manager-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/manager/dashboard-stats`)
            return res.data
        }
    })

    console.log(managerStats)

    const chartData = managerStats?.topLoans?.map(loan => ({
        name: loan.loanTitle,
        value: Number(loan.totalAmount)
    }))

    return (
        <div className="space-y-5 p-5 border border-base-100 bg-base-300/45 rounded-2xl shadow-sm shadow-base-100 gap-5">
            <div>
                <h1 className="font-bold text-2xl">Overall Statistics</h1>
            </div>
            <div>
                <AreaChart style={{ width: '100%', maxWidth: '100%', maxHeight: '50vh', aspectRatio: 1.618 }} responsive data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: 0, }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#14B8A6" fill="#14B8A6" />
                </AreaChart>
            </div>
        </div>
    )
}

export default ManagerAreaChart
