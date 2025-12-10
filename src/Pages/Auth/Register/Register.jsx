import { ArrowUp, ClockFading, Eye, EyeClosed, User } from 'lucide-react'
import React, { useState } from 'react'
import { assets } from '../../../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import SocialLogin from '../SocialLogin/SocialLogin'
import useAxiosSecure from '../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import useAuth from '../../../Hooks/UseAuth/useAuth'
import axios from 'axios'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'


const Register = () => {

    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { registerUser, updateUserProfile } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const axiosSecure = useAxiosSecure()

    const handleRegistration = (data) => {

        const profileImg = data.photo[0]

        registerUser(data.email, data.password)
            .then((result) => {
                console.log(result.user)

                const formData = new FormData()
                formData.append('image', profileImg)

                axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_HOST}`, formData)
                    .then(res => {
                        const photoURL = res.data.data.url

                        //create user in database
                        const userInfo = {
                            email: data.email,
                            displayName: data.name,
                            photoURL: photoURL,
                            applyFor: data.applyFor
                        }
                        axiosSecure.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user created in the database')
                                }
                            })

                        // update use in firebase
                        const userProfile = {
                            displayName: data.name,
                            photoURL: photoURL
                        }
                        updateUserProfile(userProfile)

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Account Registered Successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(location.state?.from?.pathname || "/")

                    })
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="max-w-full mx-auto md:mx-15">
            <div className="w-full max-w-[450px] p-7 rounded-2xl">
                <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
                    <div className="mb-10">
                        <h1 className="font-bold text-4xl">Create an Account</h1>
                        <p>Sign up to continue.</p>
                    </div>
                    {/* name feild */}
                    <div className="grid gap-2">
                        <label className="text-lg">Name</label>
                        <input type="text" placeholder='Name' {...register('name', { required: true })} className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                        {errors.name?.type === 'required' && <p className="text-red-500">Name is Required!</p>}
                    </div>
                    {/* image upload feild */}
                    <div className="grid gap-2">
                        <label className="text-lg">Image</label>
                        <label className="flex w-full border rounded-xl">
                            <span className="w-full flex justify-center items-center bg-primary rounded-l-xl font-bold text-white text-center">Choose File</span>
                            <input type="file" {...register('photo', { required: true })} className="w-full p-3 bg-base-100 rounded-xl focus-within:outline-none placeholder:text-[#94A3B8] text-base-content text-md" />
                        </label>
                        {errors.photo?.type === 'required' && <p className="text-red-500">Image is Required!</p>}
                    </div>
                    {/* role dropdown */}
                    <div>
                        <fieldset className="fieldset">
                            <div>
                                <label className="text-lg">Select Role</label>
                                <select {...register("applyFor", { required: true })} className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] text-base-content text-md" defaultValue="borrower" >
                                    <option value="borrower">Borrower</option>
                                    <option value="manager">Manager</option>
                                </select>
                            </div>
                        </fieldset>
                        {errors.applyFor?.type === 'required' && <p className="text-red-500">Role is Required!</p>}
                    </div>
                    {/* email feild */}
                    <div className="grid gap-2">
                        <label className="text-lg">Email</label>
                        <input type="email" placeholder='Email' {...register('email', { required: true })} className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                        {errors.email?.type === 'required' && <p className="text-red-500">Email is Required!</p>}
                    </div>
                    {/* password feild */}
                    <div className="grid gap-2">
                        <label>Password</label>
                        <div className="relative">
                            <input type={showPassword ? 'text' : 'password'} placeholder='Password' {...register('password', { required: true, minLength: 6 })} className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3 cursor-pointer">{showPassword ? <EyeClosed /> : <Eye />}</span>
                            {errors.password?.type === 'required' && <p className="text-red-500">Password is Required!</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters or longer</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have an uppercase, at least one lowercase, atleast one number and at least one special character</p>}
                        </div>
                    </div>
                    <div className="w-full my-2">
                        <button className="btn btn-primary w-full text-white font-bold text-[1.1rem] rounded-xl">Register</button>
                    </div>
                    <p>Already have an account? <Link to='/login' className="hover:underline text-primary cursor-pointer">Login</Link></p>
                </form>
                <div>
                    <div className="flex justify-center items-center gap-2 my-1">
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

export default Register
