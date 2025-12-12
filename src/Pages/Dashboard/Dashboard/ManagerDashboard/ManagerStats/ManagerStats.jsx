import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import FadeIn from '../../../../../Components/Animations/FadeIn/FadeIn'
import useAuth from '../../../../../Hooks/UseAuth/useAuth'

const ManagerStats = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: loans = [] } = useQuery({
        queryKey: ['loans', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans?email=${user.email}`)
            return res.data
        }
    })

    const { data: pending = [] } = useQuery({
        queryKey: ['pending-applications'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/applications?status=pending`)
            return res.data
        }
    })

    const { data: approved = [] } = useQuery({
        queryKey: ['approved-applications'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/applications?status=approved`)
            return res.data
        }
    })


    return (
        <div className="grid grid-cols-3 gap-3 items-stretch content-stretch">
            <FadeIn className="h-full" duration={1} delay={0.5}>
                <div className="flex flex-col justify-center items-center h-full text-center p-2 md:p-5 border border-base-100 bg-base-100 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:border-primary">
                    <h1 className="font-bold md:text-xl">My Loans</h1>
                    <p className="font-bold text-xl">{loans.length}</p>
                </div>
            </FadeIn>
            <FadeIn className="h-full" duration={1} delay={0.6}>
                <div className="flex flex-col justify-center items-center h-full text-center p-2 md:p-5 border border-base-100 bg-base-100 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:border-primary">
                    <h1 className="font-bold md:text-xl">Pending Applications</h1>
                    <p className="font-bold text-xl">{pending.length}</p>
                </div>
            </FadeIn>
            <FadeIn className="h-full" duration={1} delay={0.7}>
                <div className="flex flex-col justify-center items-center h-full text-center p-2 md:p-5 border border-base-100 bg-base-100 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:border-primary">
                    <h1 className="font-bold md:text-xl">Approved Applications</h1>
                    <p className="font-bold text-xl">{approved.length}</p>
                </div>
            </FadeIn>
        </div>
    )
}

export default ManagerStats
