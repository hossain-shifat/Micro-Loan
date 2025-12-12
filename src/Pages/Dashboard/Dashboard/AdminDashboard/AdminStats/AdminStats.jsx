import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import FadeIn from '../../../../../Components/Animations/FadeIn/FadeIn'

const AdminStats = () => {

    const axiosSecure = useAxiosSecure()
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data
        }
    })

    const { data: applications = [] } = useQuery({
        queryKey: ['applications'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/applications`)
            return res.data
        }
    })

    const { data: loans = [] } = useQuery({
        queryKey: ['loans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans`)
            return res.data
        }
    })

    return (
        <div className="grid grid-cols-9 gap-3">
            <FadeIn className="col-span-3 w-full" duration={1} delay={0.5}>
                <div className="flex flex-col justify-center items-center text-center p-2 md:p-5 border border-base-100 bg-base-100 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:border-primary">
                    <h1 className="font-bold md:text-xl">Total Users</h1>
                    <p className="font-bold text-xl">{users.length}</p>
                </div>
            </FadeIn>
            <FadeIn className="col-span-3 w-full" duration={1} delay={0.6}>
                <div className="flex flex-col justify-center items-center text-center p-2 md:p-5 border border-base-100 bg-base-100 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:border-primary">
                    <h1 className="font-bold md:text-xl">Total Applications</h1>
                    <p className="font-bold text-xl">{applications.length}</p>
                </div>
            </FadeIn>
            <FadeIn className="col-span-3 w-full" duration={1} delay={0.7}>
                <div className="flex flex-col justify-center items-center text-center p-2 md:p-5 border border-base-100 bg-base-100 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:border-primary">
                    <h1 className="font-bold md:text-xl">Total Loans</h1>
                    <p className="font-bold text-xl">{loans.length}</p>
                </div>
            </FadeIn>
        </div>
    )
}

export default AdminStats
