import { createBrowserRouter } from "react-router";
import Root from "../../Layouts/Root/Root";


const route = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
            }
        ]
    }
])
