import { useQuery } from '@tanstack/react-query'
import React from 'react'
import BorrowerStats from '../BorrowerStats/BorrowerStats'
import FadeIn from '../../../../../Components/Animations/FadeIn/FadeIn'
import useAxiosSecure from '../../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'

const BorrowerDashboard = () => {

    const axiosSecure = useAxiosSecure()
    const { data: borrowerStats = [], isLoading } = useQuery({
        queryKey: ['borrower-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/borrower/dashboard-stats`)
            return res.data
        }
    })

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
