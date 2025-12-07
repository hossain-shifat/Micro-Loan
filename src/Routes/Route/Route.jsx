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
                path: '/loan-details',
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
        element: <PrivateRoute><DashbordLayout /></PrivateRoute>
    }
])
