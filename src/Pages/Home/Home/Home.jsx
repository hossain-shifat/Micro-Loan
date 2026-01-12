import React from 'react'
import Banner from '../Banner/Banner'
import HowItWorks from '../HowItWorks/HowItWorks'
import FadeIn from '../../../Components/Animations/FadeIn/FadeIn'
import Reviews from '../Reviews/Reviews'
import FAQ from '../FAQ/FAQ'
import NewsLetter from '../NewsLetter/NewsLetter'
import AvailableLoans from '../AvailableLoans/AvailableLoans'
import Statistics from '../Statistics/Statistics'
import LoanCategories from '../LoanCategories/LoanCategories'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import CallToAction from '../CallToAction/CallToAction'

const Home = () => {
    return (
        <div className="space-y-10 *:border *:border-base-200 *:bg-base-200 *:p-4 *:md:p-10 *:rounded-xl *:shadow-sm">
            <FadeIn>
                <Banner />
            </FadeIn>
            <FadeIn>
                <Statistics />
            </FadeIn>
            <FadeIn>
                <AvailableLoans />
            </FadeIn>
            <FadeIn>
                <LoanCategories />
            </FadeIn>
            <FadeIn>
                <WhyChooseUs />
            </FadeIn>
            <FadeIn>
                <HowItWorks />
            </FadeIn>
            <FadeIn>
                <Reviews />
            </FadeIn>
            <FadeIn>
                <CallToAction />
            </FadeIn>
            <FadeIn>
                <FAQ />
            </FadeIn>
            <FadeIn>
                <NewsLetter />
            </FadeIn>
        </div>
    )
}

export default Home
