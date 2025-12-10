import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router'
import useAuth from '../../Hooks/UseAuth/useAuth'
import Loading from '../../Components/Loading/Loading'
import useRole from '../../Hooks/Role/useRoll'
import SuspendModal from '../../Components/SuspendModal/SuspendModal'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    const { role } = useRole()

    if (role === 'suspended') {
        return <SuspendModal />
    }

    if (loading) {
        return <Loading />
    }

    if (!user) {
        return <Navigate state={{ from: location }} to="/login" replace></Navigate>
    }
    return children
}

export default PrivateRoute
