import React from 'react'
import useAuth from '../../Hooks/UseAuth/useAuth'
import useRole from '../../Hooks/Role/useRoll'
import Loading from '../../Components/Loading/Loading'


const ManagerRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const { role, roleLoading } = useRole()

    if (loading || roleLoading) {
        return <Loading />
    }

    if (role !== 'manager') {
        return <Forbidden />
    }


    return children
}

export default ManagerRoute
