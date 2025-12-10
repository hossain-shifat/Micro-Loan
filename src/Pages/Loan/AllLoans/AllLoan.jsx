import React, { useEffect, useState } from 'react'
import FadeIn from '../../../Components/Animations/FadeIn/FadeIn'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../Components/Loading/Loading'
import useAxiosSecure from '../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import { Link } from 'react-router'

const AllLoan = () => {

    const axiosSecure = useAxiosSecure()

    const { isLoading, data: loans = [] } = useQuery({
        queryKey: ['loans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans`)
            return res.data
        }
    })

    if (isLoading) {
        return <Loading />
    }


    return (
        <div className="space-y-10">
            <div className="font-bold text-2xl md:text-4xl">
                <h1>Available Loans ({loans.length}) </h1>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    loans.map((loan, index) => (
                        <FadeIn key={index} delay={0.1 * index}>
                            <div key={index} className="flex p-5 gap-5 border border-base-200 bg-base-200 w-full rounded-xl">
                                <div>
                                    <img className="w-40 h-40 object-cover rounded-xl" src={loan.photo} alt="" />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h1 className="font-bold text-xl">{loan.loanTitle}</h1>
                                        <h1 className="">{loan.loanCategory}</h1>
                                        <h1 className="font-bold text-2xl">${loan.maxLoanLimit}</h1>
                                    </div>
                                    <div className="w-full">
                                        <Link to={`/loan-details/${loan._id}`}><button className="btn btn-primary">View Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))
                }
            </div>
        </div>
    )
}

export default AllLoan
