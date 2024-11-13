import React from "react";
import ReactDOM from "react-dom/client";
import{ createBrowserRouter, RouterProvider } from 'react-router-dom';
// import '../index.html'
import LoginPage from "./routes/login";
import CategoriesPage from "./routes/categories";
import EntertainmentPage from "./routes/entertainment";

import DashboardPage from "./routes/Dashboard";
import ErrorPage from "./routes/404";
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardPage/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/categories",
        element: <CategoriesPage />,
    },
    {
        path:"/entertainment",
        element: <EntertainmentPage/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)