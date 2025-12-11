import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="p-4 space-y-8">
                <h1 className="font-bold text-center text-2xl md:text-4xl">About Us</h1>
                <p className="text-center max-w-[900px] mx-auto">LoanBee is a smart, user-friendly microloan management platform designed to make borrowing easier, faster, and more transparent. Our goal is to simplify the entire loan process — from discovering the right loan to applying, getting approval, and managing payments.</p>
                <div className="flex justify-center items-center gap-3">
                    <button className="btn btn-primary">Get In Touch</button>
                    <button className="btn btn-primary btn-outline">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Header
