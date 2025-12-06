import React from 'react'
import { assets } from '../../../assets/assets'
import { ArrowRight } from 'lucide-react'
import SplitText from '../../../Components/Animations/SplitText/SplitText'
import FadeIn from '../../../Components/Animations/FadeIn/FadeIn'

const Banner = () => {
    return (
        <FadeIn>
            <div className="flex flex-col md:flex-row-reverse gap-10 justify-between items-center ">
                <div className="flex-1">
                    <FadeIn delay={0.5}>
                        <img src={assets.bank} alt="" />
                    </FadeIn>
                </div>
                <div className="space-y-4 flex-1">
                    <SplitText text={'Quick and Easy Loans for Your Financial Needs.'} style={'font-bold text-3xl md:text-4xl text-base-content'} />
                    <div className="space-y-5">
                        <FadeIn>
                            <p>Our loan services offer a hassle-free and streamlined borrowing experience, providing you with the funds you need in a timely manner to meet your financial requirements.</p>
                        </FadeIn>
                        <button className="btn btn-primary btn-outline flex justify-center items-center rounded-full">Get started <ArrowRight size={18} /></button>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}

export default Banner
