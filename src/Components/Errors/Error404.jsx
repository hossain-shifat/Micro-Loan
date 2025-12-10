import React from 'react'
import { assets } from '../../assets/assets'
import { Undo2 } from 'lucide-react'
import { Link } from 'react-router'

const Error404 = () => {
    return (
        <div className="min-h-dvh flex flex-col justify-center items-center h-full bg-primary/90">
            <div className="-space-y-10 md:-space-y-20">
                <h1 className="font-bold text-3xl text-center">Page Not Found!</h1>
                <h1 className="text-[12rem] md:text-[20rem] font-pacifico font-bold">404</h1>
            </div>
            <div>
                <Link to='/' className="btn bg-transparent border-2 border-white"><Undo2 size={18}/> Go Home</Link>
            </div>
        </div>
    )
}

export default Error404
