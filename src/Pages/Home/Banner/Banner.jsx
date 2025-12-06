import React from 'react'
import { assets } from '../../../assets/assets'
import { ArrowRight } from 'lucide-react'

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse gap-5 md:gap-10 justify-between items-center border border-base-100 p-4 md:p-10 rounded-xl shadow-sm">
            <div className="flex-1">
                <img src={assets.bank} alt="" />
            </div>
            <div className="space-y-4 flex-1">
                <h1 className="font-bold text-3xl md:text-4xl text-base-content">Quick and Easy Loans for Your Financial Needs.</h1>
                <p>Our loan services offer a hassle-free and streamlined borrowing experience, providing you with the funds you need in a timely manner to meet your financial requirements.</p>
                <button className="btn btn-secondary btn-outline flex justify-center items-center">Get started <ArrowRight size={18}/></button>
            </div>
        </div>
    )
}

export default Banner
