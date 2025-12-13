import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import FadeIn from '../../../Components/Animations/FadeIn/FadeIn'

const GetInTouch = () => {
    return (
        <div className="space-y-10">
            <div className="space-y-3">
                <h1 className="text-center font-bold text-2xl md:text-4xl p-4">Get In Touch</h1>
                <p className="text-center px-8">Ready to start your digital transformation journey? We'd love to hear from you.</p>
            </div>
            <div className="grid md:grid-cols-3 p-4 gap-3 md:gap-5">
                <FadeIn delay={0.3} duration={0.8}>
                    <div className="p-4 space-y-3 border border-base-100 bg-base-100 rounded-xl shadow-gray-400/50text-center">
                        <Mail size={30} className="max-w-full mx-auto" />
                        <h1>Email</h1>
                        <p>loanbee@gmail.com</p>
                    </div>
                </FadeIn>
                <FadeIn delay={0.4} duration={0.8}>
                    <div className="p-4 space-y-3 border border-base-100 bg-base-100 rounded-xl shadow-gray-400/50text-center">
                        <Phone size={30} className="max-w-full mx-auto" />
                        <h1>Phone</h1>
                        <p>+8801234895349</p>
                    </div>
                </FadeIn>
                <FadeIn delay={0.5} duration={0.8}>
                    <div className="p-4 space-y-3 border border-base-100 bg-base-100 rounded-xl shadow-gray-400/50text-center">
                        <MapPin size={30} className="max-w-full mx-auto" />
                        <h1>Office</h1>
                        <p>Dhaka,Bangladesh</p>
                    </div>
                </FadeIn>
            </div>
            <FadeIn>
                <div className="flex gap-3 justify-center items-center">
                    <button className="btn btn-primary">Get Start</button>
                    <button className="btn btn-primary btn-outline">Schedule a Call</button>
                </div>
            </FadeIn>
        </div>
    )
}

export default GetInTouch
