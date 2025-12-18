import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import useAxiosSecure from '../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import useAuth from '../../../Hooks/UseAuth/useAuth'
import { assets } from '../../../assets/assets'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

const SocialLogin = () => {

    const { singInGoogle } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()

    const handleSingInPopUp = () => {
        singInGoogle()
            .then(result => {

                // create user in the database
                const userInfo = {
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.photoURL
                }

                axiosSecure.post('/users', userInfo)
                    .then(res => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Account Registered Successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(location.state?.from?.pathname || "/");
                    })

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <button onClick={handleSingInPopUp} className="btn bg-white text-black border-[#e5e5e5] w-full"><img src={assets.google} className="w-7 h-7" alt="" />Register with Google</button>
        </div>
    )
}

export default SocialLogin
