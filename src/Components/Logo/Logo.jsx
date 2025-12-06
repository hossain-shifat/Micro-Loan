import React from 'react'
import { Link } from 'react-router'

const Logo = ({style}) => {
    return (
        <div>
            <Link to='/'><h1 className={`font-bold text-xl md:text-2xl cursor-pointer ${style}`}>Loan<span className="text-primary">Bee</span></h1></Link>
        </div>
    )
}

export default Logo
