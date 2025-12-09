import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxios from '../../../Hooks/Axios/Axios/useAxios'
import { Link } from 'react-router'
import Loading from '../../../Components/Loading/Loading'

const AvailableLoans = () => {

    const axiosInstance = useAxios()

    const { isLoading, data: loans = [] } = useQuery({
        queryKey: ['loans'],
        queryFn: async () => {
            const res = await axiosInstance.get(`/home-loans`)
            return res.data
        }
    })

    const { isLoading: loansLoading, data: featuredLoans = [] } = useQuery({
        queryKey: ['featured'],
        queryFn: async () => {
            const res = await axiosInstance.get(`/home-loans/featured`)
            return res.data
        }
    })

    const combinedLoans = [
        ...loans,
        ...featuredLoans.filter(
            loan => !loans.some(l => l._id === loan._id)
        )
    ]

    if (isLoading || loansLoading) {
        return <Loading />
    }

    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl">Available Loan</h1>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    combinedLoans.filter(loan => loan.showOnHome === true).map((loan, index) => (
                        <div key={index} className="flex p-5 gap-5 border border-base-100 bg-base-100 w-full rounded-xl">
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
                                    <Link to={`/loan-details/${loan._id}`}><button className="btn btn-primary w-full">View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AvailableLoans
