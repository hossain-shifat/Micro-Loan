import { createBrowserRouter } from "react-router";
import Root from "../../Layouts/Root/Root";
import Home from "../../Pages/Home/Home/Home";
import AuthLayout from "../../Layouts/AuthLayout/AuthLayout";
import Register from "../../Pages/Auth/Register/Register";
import Login from "../../Pages/Auth/Login/Login";
import AllLoan from "../../Pages/Loan/AllLoans/AllLoan";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoanDetails from "../../Pages/Loan/LoanDetails/LoanDetails";
import DashbordLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import UserManagement from "../../Pages/Dashboard/Admin/UserManagement/UserManagement";
import AddLoan from "../../Pages/Dashboard/Manager/AddLoan/AddLoan";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/all-loans',
                Component: AllLoan
            },
            {
                path: '/loan-details/:id',
                element: <PrivateRoute><LoanDetails /></PrivateRoute>
            },
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashbordLayout /></PrivateRoute>,
        children: [
            {
                index: true,
                Component: Dashboard
            },
            {
                path: 'user-management',
                Component: UserManagement
            },
            {
                path: 'add-loans',
                Component: AddLoan
            },
        ]
    }
])
