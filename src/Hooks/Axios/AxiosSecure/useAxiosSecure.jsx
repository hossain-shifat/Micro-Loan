import axios from 'axios'
import React, { useEffect } from 'react'


const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosSecure = () => {


    useEffect(() => {
        // interceptor request
        const requestInterceptors = axiosSecure.interceptors.request.use((config) => {
            config.headers.Authorization = `Bearer ${user?.accessToken}`
            return config
        })
    }, [])

    return axiosSecure
}

export default useAxiosSecure
