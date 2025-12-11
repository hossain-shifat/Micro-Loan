import { Mail, MapPin, Phone, Twitter } from 'lucide-react'
import React from 'react'
import FadeIn from '../../Components/Animations/FadeIn/FadeIn'
import { toast } from 'react-toastify'

const Contact = () => {

    const handleSubmit = (e) => {
            e.preventDefault()
            if (!e.target.name.value || !e.target.email.value) {
                return
            }
            toast.success('We will contact you soon')
            e.target.reset()
        }

    return (
        <div className="my-10 space-y-10 border border-base-300 bg-base-200 py-5 rounded-2xl shadow-sm">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl text-center">Contact Us</h1>
                <p className="text-center">Any question or remarks? Just write us a message!</p>
            </div>
            <div className="p-4 grid md:grid-cols-2 gap-4">
                <FadeIn>
                    <div className="p-4 flex flex-col space-y-10 justify-between items-center border border-base-100 bg-base-100 py-8 rounded-2xl shadow-sm">
                        <div>
                            <h1 className="font-bold text-xl">Contact Information</h1>
                            <p>Say Something to start live chat</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-2 items-center">
                                <Mail size={30} />
                                <p>loanbee@gmail.com</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Phone size={30} />
                                <p>+8801234895349</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MapPin size={30} />
                                <p>Dhaka,Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="p-6 py-8 border border-base-100 bg-base-100 rounded-2xl shadow-sm">
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <FadeIn>
                                    <h1 className="font-bold text-3xl">Let's Talk Loans</h1>
                                </FadeIn>
                                <FadeIn>
                                    <p className="">Have questions about our microloans? Contact us and our team will guide you every step of the way.</p>
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
                                <FadeIn>
                                    <div className="grid gap-2 w-full">
                                        <label>Ask Questions?</label>
                                        <textarea placeholder="Ask Questions?" className="textarea textarea-md w-full focus-within:outline-none bg-base-100 border"></textarea>
                                    </div>
                                </FadeIn>
                            </div>
                            <FadeIn>
                                <div className="w-full my-4">
                                    <button className="btn btn-primary w-full font-bold text-[1.1rem] rounded-xl">Send</button>
                                </div>
                            </FadeIn>
                        </form>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}

export default Contact
