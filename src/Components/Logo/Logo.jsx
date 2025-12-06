import React from 'react'

const Logo = ({style}) => {
    return (
        <div>
            <h1 className={`font-bold text-xl md:text-2xl ${style}`}>Loan<span className="text-primary">Bee</span></h1>
        </div>
    )
}

export default Logo
