import { useQuery } from '@tanstack/react-query'
import React from 'react'
import BorrowerStats from '../BorrowerStats/BorrowerStats'
import FadeIn from '../../../../../Components/Animations/FadeIn/FadeIn'

const BorrowerDashboard = () => {
    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-2xl p-4">Dahsboard Overview</h1>
            </div>
            <div>
                <FadeIn>
                    <BorrowerStats />
                </FadeIn>
            </div>
        </div>
    )
}

export default BorrowerDashboard
