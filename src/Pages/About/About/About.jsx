import React from 'react'
import Header from '../Header/Header'
import FadeIn from '../../../Components/Animations/FadeIn/FadeIn'

const About = () => {
    return (
        <div className="my-10 *:border *:border-base-300 *:bg-base-200 *:py-5 *:rounded-2xl *:shadow-sm">
            <FadeIn>
                <Header />
            </FadeIn>
        </div>
    )
}

export default About
