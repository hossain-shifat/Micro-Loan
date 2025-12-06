import React, { useEffect, useState } from 'react'
import FadeIn from '../../../Components/Animations/FadeIn/FadeIn'

const FAQ = () => {

    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        fetch('/faq.json')
            .then(res => res.json())
            .then(data => setFaqs(data))
    }, [])

    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl text-center">FAQ</h1>
            </div>
            <div className="space-y-1">
                {
                    faqs.map((faq, index) => (
                        <div key={index} className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
                            <div className="collapse-title font-bold text-md">{faq.question}</div>
                            <div className="collapse-content text-sm">{faq.answer}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FAQ
