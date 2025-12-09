import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../Hooks/UseAuth/useAuth'
import { useNavigate } from 'react-router'
import useAxiosSecure from '../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import axios from 'axios'
import { toast } from 'react-toastify'

const UpdateProfile = () => {

    const { register, handleSubmit } = useForm()
    const { user, updateUserProfile } = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()


    const handleUpdate = (data) => {
        const profileImg = data.photo[0]
        const formData = new FormData()
        formData.append('image', profileImg)

        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_HOST}`, formData)
            .then(res => {
                const photoURL = res.data.data.url

                const userInfo = {
                    displayName: data.name,
                    photoURL: photoURL
                }
                axiosSecure.patch('/users/profile', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user created in the database')
                        }
                    })


                const userProfile = {
                    displayName: data.name,
                    photoURL: photoURL
                }
                updateUserProfile(userProfile)
                    .then(res => {
                        console.log(res)
                        toast.success('Profile Updated!')
                        navigate(location.state?.from?.pathname || "/")
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
    }


    return (
        <div className="max-w-full mx-auto md:mx-15">
            <div className="w-full max-w-[450px] p-7 rounded-2xl">
                <form onSubmit={handleSubmit(handleUpdate)}>
                    <div className="space-y-1">
                        <h1 className="font-bold text-4xl">Update Profile</h1>
                        <p className="">Edit your profile</p>
                    </div>
                    <div className="my-4">
                        <label className="text-lg">Name</label>
                        <input type="name" defaultValue={user.displayName} placeholder='Name' {...register('name')} className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                    </div>
                    <div>
                        <label className="text-lg">Image</label>
                        <label className="flex w-full border rounded-xl">
                            <span className="w-full flex justify-center items-center bg-primary rounded-l-xl font-bold text-white text-center">Choose File</span>
                            <input type="file" {...register('photo', { required: true })} className="w-full p-3 bg-base-100 rounded-xl focus-within:outline-none placeholder:text-[#94A3B8] text-base-content text-md" />
                        </label>
                    </div>
                    <div className="w-full my-4">
                        <button className="btn btn-primary w-full text-white font-bold text-[1.1rem] rounded-xl">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateProfile
