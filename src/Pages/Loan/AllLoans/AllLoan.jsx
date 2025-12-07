import React, { useEffect, useState } from 'react'

const AllLoan = () => {

    const [loans, setLoans] = useState([])

    useEffect(() => {
        fetch('/loan.json')
            .then(res => res.json())
            .then(data => setLoans(data))
    }, [])

    console.log(loans)

    return (
        <div className="space-y-10">
            <div className="font-bold text-2xl md:text-4xl">
                <h1>Available Loans ({loans.length}) </h1>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    loans.map((loan, index) => (
                        <div key={index} className="border p-5 flex gap-4 rounded-xl ">
                            <div className="w-full">
                                <img className="max-w-[200px] w-full min-h-fit h-full object-cover rounded-xl" src={loan.loanImage} alt="" />
                            </div>
                            <div className="flex flex-col justify-between gap-2 md:gap-0">
                                <h1 className="text-lg md:text-xl font-bold text-base-content">{loan.loanTitle}</h1>
                                <div className="flex justify-between">
                                    <h1>{loan.loanCategory}</h1>
                                    <h1>{loan.interest}</h1>
                                </div>
                                <div>
                                    <h1 className="font-bold text-xl">${loan.maxLoanLimit}</h1>
                                </div>
                                <div className="w-full">
                                    <button className="btn btn-primary w-full">View Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllLoan
