import React from 'react'
import { journeyTimeline } from '../../../assets/assets'
import FadeIn from '../../../Components/Animations/FadeIn/FadeIn'

const OurJourney = () => {
    return (
        <div className="space-y-10">
            <div className="space-y-3">
                <h1 className="font-bold text-2xl md:text-4xl text-center">Our Journey</h1>
                <p className="text-center px-4">From a Small Startup to a Trusted Technology Partner</p>
            </div>
            <div className="max-w-[900px] mx-auto p-4">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {
                        journeyTimeline.map((timeLine, index) => (
                            <li key={index}>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary" >
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <FadeIn duration={0.4} className={`${index % 2 === 0 ? "timeline-start mb-10 md:text-end" : "timeline-end mb-10"}`}>
                                    <time className="font-mono italic text-primary">{timeLine.year}</time>
                                    <div className="text-lg font-black">{timeLine.title}</div>
                                    <p>{timeLine.detail}</p>
                                </FadeIn>
                                <hr className="bg-primary"/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default OurJourney
