import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loading from '../../../../../Components/Loading/Loading'
import AdminStats from '../AdminStats/AdminStats'
import FadeIn from '../../../../../Components/Animations/FadeIn/FadeIn'
import AdminLineChart from '../AdminLineChart/AdminLineChart'
import AdminPieChart from '../AdminPieChart/AdminPieChart'

const AdminDashboard = () => {
    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-2xl">Dahsboard Overview</h1>
            </div>
            <div className="space-y-10">
                <FadeIn>
                    <AdminStats />
                </FadeIn>
                <FadeIn>
                    <AdminLineChart />
                </FadeIn>
                <FadeIn>
                    <AdminPieChart />
                </FadeIn>
            </div>
        </div>
    )
}

export default AdminDashboard
