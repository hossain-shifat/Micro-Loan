import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ManagerStats from '../ManagerStats/ManagerStats'
import FadeIn from '../../../../../Components/Animations/FadeIn/FadeIn'

const ManagerDashboard = () => {
    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-2xl">Dahsboard Overview</h1>
            </div>
            <div>
                <FadeIn>
                    <ManagerStats />
                </FadeIn>
            </div>
        </div>
    )
}

export default ManagerDashboard
