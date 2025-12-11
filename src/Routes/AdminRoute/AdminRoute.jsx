import React from 'react'
import useAuth from '../../Hooks/UseAuth/useAuth'
import useRole from '../../Hooks/Role/useRoll'
import Loading from '../../Components/Loading/Loading'
import Forbidden from '../../Components/Forbidden/Forbidden'


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const { role, roleLoading } = useRole()

    if (loading || roleLoading) {
        return <Loading />
    }

    if (role !== 'admin') {
        return <Forbidden />
    }


    return children
}

export default AdminRoute
