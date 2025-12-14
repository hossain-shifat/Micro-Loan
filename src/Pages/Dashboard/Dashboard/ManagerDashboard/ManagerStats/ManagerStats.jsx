import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import FadeIn from '../../../../../Components/Animations/FadeIn/FadeIn'


const ManagerStats = () => {

    const axiosSecure = useAxiosSecure()
    const { data: managerStats = [], isLoading } = useQuery({
            queryKey: ['manager-stats'],
            queryFn: async () => {
                const res = await axiosSecure.get(`/manager/dashboard-stats`)
                return res.data
            }
        })

    return (
        <div className="grid md:grid-cols-3 gap-3 items-stretch content-stretch p-5 border border-base-100 bg-base-300/45 rounded-2xl shadow-sm shadow-base-100">
            <FadeIn className="h-full" duration={1} delay={0.5}>
                <div className="flex flex-col justify-center items-center h-full text-center p-2 md:p-5 border border-base-100 bg-base-100 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:border-primary">
                    <h1 className="font-bold md:text-xl">My Loans</h1>
                    <p className="font-bold text-xl">{managerStats.totalLoans}</p>
                </div>
            </FadeIn>
            <FadeIn className="h-full" duration={1} delay={0.6}>
                <div className="flex flex-col justify-center items-center h-full text-center p-2 md:p-5 border border-base-100 bg-base-100 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:border-primary">
                    <h1 className="font-bold md:text-xl">Pending Applications</h1>
                    <p className="font-bold text-xl">{managerStats.pendingApplications}</p>
                </div>
            </FadeIn>
            <FadeIn className="h-full" duration={1} delay={0.7}>
                <div className="flex flex-col justify-center items-center h-full text-center p-2 md:p-5 border border-base-100 bg-base-100 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:border-primary">
                    <h1 className="font-bold md:text-xl">Approved Applications</h1>
                    <p className="font-bold text-xl">{managerStats.approvedApplications}</p>
                </div>
            </FadeIn>
        </div>
    )
}

export default ManagerStats
