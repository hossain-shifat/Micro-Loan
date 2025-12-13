import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import useAxiosSecure from '../../../../../Hooks/Axios/AxiosSecure/useAxiosSecure';
import Loading from '../../../../../Components/Loading/Loading';
import FadeIn from '../../../../../Components/Animations/FadeIn/FadeIn';
import { Eye, ScanSearch } from 'lucide-react';
import { Link } from 'react-router';


const ManagerPieChart = () => {

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#845EC2', '#D65DB1', '#FF6F91', '#4D96FF', '#6BCF63', '#F9A826', '#1F77B4', '#2CA02C', '#FF7F0E', '#D62728', '#9467BD', '#8C564B', '#E377C2', '#7F7F7F', '#17BECF', '#BCBD22', '#3A86FF', '#8338EC', '#FB5607', '#FF006E', '#00B4D8'];

    const axiosSecure = useAxiosSecure()
    const { data: managerStats = [], isLoading } = useQuery({
        queryKey: ['manager-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/manager/dashboard-stats`)
            return res.data
        }
    })

    if (isLoading) {
        return <Loading />
    }

    const pieData = managerStats.topLoans?.map(loan => ({
        name: loan.loanTitle,
        value: Number(loan.totalAmount)
    })) || []


    return (
        <div className="space-y-5">
            <div className="flex flex-col md:flex-row *:p-5 *:border *:border-base-100 *:bg-base-300/45 *:rounded-2xl *:shadow-sm *:shadow-base-100 gap-5">
                <FadeIn className="flex-1">
                    <div className="flex-1 grid gap-3 justify-center items-center max-w-dvw w-full mx-auto">
                        <div>
                            <h1 className="font-bold text-2xl text-center">User Role Statistics</h1>
                        </div>
                        <div style={{ width: '100%', maxWidth: 550, height: 350 }}>
                            <ResponsiveContainer >
                                <PieChart responsive>
                                    <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8" label isAnimationActive={true} >
                                        {pieData.map((entry, index) => (
                                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {
                                pieData.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm">
                                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                        <span className="max-w-[120px] truncate">{item.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </FadeIn>
                <FadeIn className="flex-1" delay={0.8}>
                    <div className="grid gap-5">
                        <div>
                            <h1 className="font-bold text-2xl text-center">Recent Loans</h1>
                        </div>
                        <div className="overflow-x-auto no-scrollbar">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Amount</th>
                                        <th>Show On Home</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        managerStats.recentLoans?.map(loan => (
                                            <tr key={loan.loanId}>
                                                <td>{loan.loanTitle}</td>
                                                <td>{loan.maxLoanLimit}</td>
                                                <td>
                                                    {loan.showOnHome ? "true" : "false"}
                                                </td>
                                                <td>
                                                    <div className="tooltip tooltip-top" data-tip='View Detalis'>
                                                        <Link to='/dashboard/manage-loans'><button className="btn btn-warning btn-sm btn-square"><ScanSearch size={18} /></button></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}

export default ManagerPieChart
