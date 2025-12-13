import React from 'react'
import useAxiosSecure from '../../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import useAuth from '../../../../../Hooks/UseAuth/useAuth';
import Loading from '../../../../../Components/Loading/Loading';
import FadeIn from '../../../../../Components/Animations/FadeIn/FadeIn';

const AdminPieChart = () => {

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const axiosSecure = useAxiosSecure()
    const { data: adminStats = [], isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin/dashboard-stats`)
            return res.data
        }
    })

    if (isLoading) {
        return <Loading />
    }

    const pieData = adminStats.usersByRole?.map(user => ({
        name: user.role,
        value: user.count
    })) || []

    console.log(pieData)

    return (
        <div className="space-y-5 ">
            <div className="flex flex-col md:flex-row *:p-5 *:md:p-10 *:border *:border-base-100 *:bg-base-300/45 *:rounded-2xl *:shadow-sm *:shadow-base-100 gap-5 *:min-h-[10vh]">
                <FadeIn>
                    <div className="flex-1 grid gap-5 justify-center items-center max-w-dvw w-full mx-auto">
                        <div>
                            <h1 className="font-bold text-2xl">User Role Statistics</h1>
                        </div>
                        <div style={{ width: '100%', height: 350 }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie data={pieData} dataKey="value" nameKey="name" outerRadius='100%' fill="#8884d8" label isAnimationActive={true} >
                                        {pieData.map((entry, index) => (
                                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="flex-1 grid gap-5">
                        <div>
                            <h1 className="font-bold text-2xl text-center">Recent Users</h1>
                        </div>
                        <div className="overflow-x-auto no-scrollbar">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        adminStats.recentUsers?.map(recentUser => (
                                            <tr key={recentUser._id}>
                                                <td>{recentUser.displayName}</td>
                                                <td>{recentUser.email}</td>
                                                <td>{recentUser.role}</td>
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

export default AdminPieChart
