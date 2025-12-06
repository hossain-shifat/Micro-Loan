import { createBrowserRouter } from "react-router";
import Root from "../../Layouts/Root/Root";
import Home from "../../Pages/Home/Home/Home";
import AuthLayout from "../../Layouts/AuthLayout/AuthLayout";
import Register from "../../Pages/Auth/Register/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children:[
            {
                path: '/register',
                Component: Register
            }
        ]
    }
])
