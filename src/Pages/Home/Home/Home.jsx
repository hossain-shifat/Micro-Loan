import React from 'react'
import Banner from '../Banner/Banner'
import HowItWorks from '../HowItWorks/HowItWorks'
import FadeIn from '../../../Components/Animations/FadeIn/FadeIn'

const Home = () => {
    return (
        <div className="space-y-10">
            <FadeIn>
                <Banner />
            </FadeIn>
            <FadeIn>
                <HowItWorks />
            </FadeIn>
        </div>
    )
}

export default Home
