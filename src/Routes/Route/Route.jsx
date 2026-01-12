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
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard/Dashboard";
import UserManagement from "../../Pages/Dashboard/Admin/UserManagement/UserManagement";
import AddLoan from "../../Pages/Dashboard/Manager/AddLoan/AddLoan";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllLoans from "../../Pages/Dashboard/Admin/AllLoans/AllLoans";
import ApplyLoan from "../../Pages/Loan/ApplyLoan/ApplyLoan";
import MyLoans from "../../Pages/Dashboard/User/MyLoans/MyLoans";
import ManagerRoute from "../ManagerRoute/ManagerRoute";
import PendingApplications from "../../Pages/Dashboard/Manager/PendingApplications/PendingApplications";
import ApprovedApplications from "../../Pages/Dashboard/Manager/ApprovedApplications/ApprovedApplications";
import LoanApplications from "../../Pages/Dashboard/Admin/LoanApplications/LoanApplications";
import ManageLoans from "../../Pages/Dashboard/Manager/ManageLoans/ManageLoans";
import MyProfile from "../../Pages/MyProfile/MyProfile";
import UpdateProfile from "../../Pages/Auth/UpdateProfile/UpdateProfile";
import Error404 from "../../Components/Errors/Error404";
import PaymentSuccess from "../../Pages/PaymentSuccess/PaymentSuccess";
import About from "../../Pages/About/About/About";
import Contact from "../../Pages/Contact/Contact";
import BlogPage from "../../Pages/Blog/BlogPage";
import HelpSupport from "../../Pages/HelpSupport/HelpSupport";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error404 />,
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
                path: '/about',
                Component: About
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/blogs',
                Component: BlogPage
            },
            {
                path: '/help',
                Component: HelpSupport
            },
            {
                path: '/loan-details/:id',
                element: <PrivateRoute><LoanDetails /></PrivateRoute>
            },
            {
                path: '/apply-loan/:id',
                element: <PrivateRoute><ApplyLoan /></PrivateRoute>
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
            {
                path: '/update-profile',
                Component: UpdateProfile
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
                path: 'my-loans',
                Component: MyLoans
            },
            {
                path: 'my-profile',
                Component: MyProfile
            },
            {
                path: 'payment-success',
                Component: PaymentSuccess
            },
            // admin route
            {
                path: 'user-management',
                element: <AdminRoute><UserManagement /></AdminRoute>
            },
            {
                path: 'all-loans',
                element: <AdminRoute><AllLoans /></AdminRoute>
            },
            {
                path: 'loan-applications',
                element: <AdminRoute><LoanApplications /></AdminRoute>
            },

            // manager route
            {
                path: 'add-loans',
                element: <ManagerRoute><AddLoan /></ManagerRoute>
            },
            {
                path: 'manage-loans',
                element: <ManagerRoute><ManageLoans /></ManagerRoute>
            },
            {
                path: 'pending-applications',
                element: <ManagerRoute><PendingApplications /></ManagerRoute>
            },
            {
                path: 'approved-applications',
                element: <ManagerRoute><ApprovedApplications /></ManagerRoute>
            },
        ]
    }
])
