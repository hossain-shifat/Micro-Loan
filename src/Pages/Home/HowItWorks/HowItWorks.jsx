import React from 'react'
import { process } from '../../../assets/assets'

const HowItWorks = () => {
    return (
        <div className="border border-base-200 bg-base-200 shadow-sm p-2 md:p-10 py-5 rounded-xl space-y-5 md:space-y-15">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl text-center">How it Works</h1>
            </div>
            <div className="space-y-4">
                {
                    process.map((step, index) => (
                        <div className={`flex flex-col gap-4 md:gap-20 items-center ${index % 2 !== 0 ? "md:flex-row-reverse md:px-10" : "md:flex-row md:px-10"}`}>
                            <div className="w-full md:w-80">
                                <img className="w-full h-auto object-cover rounded-xl p-4 md:p-0" src={step.img} alt="" />
                            </div>
                            <div className="space-y-4 p-4 max-w-[600px]">
                                <h1 className="font-bold text-2xl">{step.title}</h1>
                                <p>{step.details}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HowItWorks
