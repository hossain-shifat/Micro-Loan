import axios from 'axios'
import React from 'react'

const useAxios = () => {

    const axiosInstance = axios.create({
    baseURL: 'https://loan-bee-server.vercel.app'
    })

    return axiosInstance
}

export default useAxios
