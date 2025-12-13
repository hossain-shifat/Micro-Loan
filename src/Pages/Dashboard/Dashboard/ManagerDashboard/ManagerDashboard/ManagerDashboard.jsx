import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ManagerStats from '../ManagerStats/ManagerStats'
import FadeIn from '../../../../../Components/Animations/FadeIn/FadeIn'
import ManagerPieChart from '../ManagerPieChart/ManagerPieChart'

const ManagerDashboard = () => {
    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-2xl">Dahsboard Overview</h1>
            </div>
            <div className="space-y-10">
                <FadeIn>
                    <ManagerStats />
                </FadeIn>
                <FadeIn>
                    <ManagerPieChart />
                </FadeIn>
            </div>
        </div>
    )
}

export default ManagerDashboard
