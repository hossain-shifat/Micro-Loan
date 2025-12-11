import React from 'react'
import useRole from '../../../../Hooks/Role/useRoll'
import Loading from '../../../../Components/Loading/Loading'
import AdminDashboard from '../AdminDashboard/AdminDashboard'
import ManagerDashboard from '../ManagerDashboard/ManagerDashboard'
import BorrowerDashboard from '../BorrowerDashboard/BorrowerDashboard'

const Dashboard = () => {
    const { role, roleLoading } = useRole()

    if (roleLoading) {
        return <Loading />
    }
    if (role === 'admin') {
        return <AdminDashboard />
    }
    else if (role === 'manager') {
        return <ManagerDashboard />
    }
    else {
        return <BorrowerDashboard />
    }

}

export default Dashboard
