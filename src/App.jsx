import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Route/Route'
import { useTheme } from './Hooks/ThemeHook/useTheme'

const App = () => {
    const [theme] = useTheme()

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
