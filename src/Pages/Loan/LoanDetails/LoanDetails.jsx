import React from 'react'
import useAxiosSecure from '../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../Components/Loading/Loading'
import { Link, useParams } from 'react-router'
import useRole from '../../../Hooks/Role/useRoll'

const LoanDetails = () => {

    const { role, roleLoading } = useRole()
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()

    const { isLoading, data: loans = [] } = useQuery({
        queryKey: ['loans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans`)
            return res.data
        }
    })

    if (isLoading || roleLoading) {
        return <Loading />
    }

    const similarLoans = loans.slice(0, 6)

    const loan = loans.find((l) => l._id === id);
    console.log(loan)

    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl">Loan Details</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-2">
                <div className="hidden md:block md:col-span-1 md:row-span-2 p-5 border border-base-200 bg-base-200 rounded-2xl shadow-sm">
                    <div className="py-5">
                        <h1 className="font-bold text-xl md:text-2xl">Similar Loans</h1>
                    </div>
                    <div className="space-y-2">
                        {
                            similarLoans.map((loan, index) => (
                                <div key={index} className="flex justify-between items-center p-4 border border-base-300 bg-base-300 rounded-xl">
                                    <div className="flex gap-3">
                                        <div>
                                            <img className="w-12 h-12 object-cover rounded-lg" src={loan.photo} alt="" />
                                        </div>
                                        <div>
                                            <h1 className="font-bold text-md">{loan.loanTitle}</h1>
                                            <p className="font-bold text-lg">${loan.maxLoanLimit}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link to={`/loan-details/${loan._id}`}><button className="btn btn-primary">View</button></Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="md:col-span-2 border border-base-200 p-5 bg-base-200 rounded-2xl shadow-sm">
                    <div className="flex gap-5 items-center">
                        <div className="">
                            <img className="w-55 h-60 object-cover rounded-xl" src={loan.photo} alt="" />
                        </div>
                        <div>
                            <div className="flex flex-col justify-between h-full space-y-5">
                                <div className="space-y-2">
                                    <h1 className="font-bold  text-xl md:text-2xl">{loan.loanTitle}</h1>
                                    <div className="grid grid-cols-3 gap-3 items-center border-b-2 border-primary pb-5 border-dashed">
                                        <p>Category: {loan.loanCategory}</p>
                                        <p className="border-l-2 p-2 border-r-2">Interest Rate: {loan.interestRate}%</p>
                                        <p>Emi Plans: {loan.EMIPlans}</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="font-bold text-xl">Description:</h1>
                                    <p>{loan.description}</p>
                                </div>
                                <div className="flex justify-end mt-4">
                                    <Link to={`/apply-loan/${loan._id}`}><button disabled={role === 'user' || 'borrower' ? false : true} className="btn btn-primary">Apply Now</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 md:col-start-2 border p-8 border-base-200 bg-base-200 rounded-2xl shadow-sm">
                    <div className="space-y-3">
                        <h2 className="font-bold text-xl md:text-2xl">Important Information</h2>
                        <div className="space-y-3">
                            <div>
                                <h3 className="font-semibold">Loan Rules</h3>
                                <ul className="list-disc list-inside text-sm">
                                    <li>Ensure timely EMI payments to avoid penalties.</li>
                                    <li>Provide accurate personal and financial information.</li>
                                    <li>Loans are subject to approval based on eligibility.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold">Privacy Policy</h3>
                                <p className="text-sm">Your personal data is securely stored and will never be shared with third parties without consent. We comply with all privacy regulations.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Safety Assurance</h3>
                                <p className="text-sm">
                                    Our platform uses secure servers and encryption to keep your financial data safe. All transactions are monitored to prevent fraud.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LoanDetails
