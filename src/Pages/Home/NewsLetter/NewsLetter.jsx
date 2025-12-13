import React from 'react'
import FadeIn from '../../../Components/Animations/FadeIn/FadeIn'
import { assets } from '../../../assets/assets'
import { toast } from 'react-toastify'

const NewsLetter = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!e.target.name.value || !e.target.email.value) {
            return
        }
        toast.success('Subscribed successfully! 🎉 Check your inbox for updates.')
        e.target.reset()
    }

    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl p-4 text-center">Newsletter</h1>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <div className="flex-1 max-w-[550px]">
                    <img src={assets.newsLetter} className="w-full object-cover" alt="" />
                </div>
                <div className="w-full max-w-[450px] p-7 rounded-2xl flex-1">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <FadeIn>
                                <h1 className="font-bold text-3xl">Stay Ahead with LoanBee</h1>
                            </FadeIn>
                            <FadeIn>
                                <p className="">Subscribe to receive the latest loan offers, tips, and updates straight to your inbox.</p>
                            </FadeIn>
                        </div>
                        <div className="my-4 *:my-4">
                            <FadeIn>
                                <label className="text-lg">Name</label>
                                <input type="text" placeholder='Name' name='name' className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                            </FadeIn>
                            <FadeIn>
                                <label className="text-lg">Email</label>
                                <input type="email" placeholder='Email' name='email' className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                            </FadeIn>
                        </div>
                        <FadeIn>
                            <div className="w-full my-4">
                                <button className="btn btn-primary w-full font-bold text-[1.1rem] rounded-xl">Subscribe</button>
                            </div>
                        </FadeIn>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
