
import { Eye, EyeClosed } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../Hooks/UseAuth/useAuth'
import { Link, useLocation, useNavigate } from 'react-router'
import SocialLogin from '../SocialLogin/SocialLogin'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit } = useForm()
    const { singInUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = (data) => {
        singInUser(data.email, data.password)
            .then(result => {
                console.log(result)
                navigate(location.state?.from?.pathname || "/");
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="max-w-full mx-auto md:mx-15">
            <div class="w-full max-w-[450px] p-7 rounded-2xl">
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="space-y-1">
                        <h1 className="font-bold text-4xl">Welcome Back</h1>
                        <p className="">Login to continue</p>
                    </div>
                    <div className="my-4">
                        <label className="text-lg">Email</label>
                        <input type="email" placeholder='Email' {...register('email')} className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                    </div>
                    <div className="my-4">
                        <label>Password</label>
                        <div className="relative">
                            <input type={showPassword ? 'text' : 'password'} placeholder='Password' {...register('password')} className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3 cursor-pointer">{showPassword ? <EyeClosed /> : <Eye />}</span>
                        </div>
                    </div>
                    <div className="my-4">
                        <Link to="/forget-password" className="text-[#71717A] underline cursor-pointer">Forget Password?</Link>
                    </div>
                    <div className="w-full my-4">
                        <button className="btn btn-primary w-full text-black font-bold text-[1.1rem] rounded-xl">Login</button>
                    </div>
                    <p>Don't have any account? <Link state={location.state} to='/register' className="hover:underline text-primary cursor-pointer">Register</Link></p>
                </form>
                <div>
                    <div className="flex justify-center items-center gap-2 my-2">
                        <hr className="w-[45%]" />
                        <h1>Or</h1>
                        <hr className="w-[45%]" />
                    </div>
                    <div className="w-full">
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
