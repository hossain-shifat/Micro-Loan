import React from 'react'
import useRole from '../../../../Hooks/Role/useRoll'
import Loading from '../../../../Components/Loading/Loading'
import BorrowerDashboard from '../BorrowerDashboard/BorrowerDashboard'
import AdminDashboard from '../AdminDashboard/AdminDashboard/AdminDashboard'
import ManagerDashboard from '../ManagerDashboard/ManagerDashboard/ManagerDashboard'

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
