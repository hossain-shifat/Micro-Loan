import React from 'react'
import { process } from '../../../assets/assets'
import FadeInScroll from '../../../Components/Animations/FadeInScroll/FadeInScorll'
import FadeIn from '../../../Components/Animations/FadeIn/FadeIn'

const HowItWorks = () => {
    return (
        <div className="py-5 space-y-5 md:space-y-15">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl p-4 text-center">How it Works</h1>
            </div>
            <div className="space-y-4">
                {
                    process.map((step, index) => (
                        <FadeInScroll key={index} delay={0.2} duration={0.8}>
                            <div className={`flex flex-col gap-4 md:gap-20 items-center ${index % 2 !== 0 ? "md:flex-row-reverse md:px-10" : "md:flex-row md:px-10"}`}>
                                <FadeIn>
                                    <div className="w-full md:w-80">
                                        <img className="w-full h-auto object-cover rounded-xl p-4 md:p-0" src={step.img} alt="" />
                                    </div>
                                </FadeIn>
                                <div className="space-y-4 p-4 max-w-[600px]">
                                    <FadeIn delay={0.5}>
                                        <h1 className="font-bold text-2xl">{step.title}</h1>
                                    </FadeIn>
                                    <FadeIn delay={0.6}>
                                        <p>{step.details}</p>
                                    </FadeIn>
                                </div>
                            </div>
                        </FadeInScroll>
                    ))
                }
            </div>
        </div>
    )
}

export default HowItWorks
