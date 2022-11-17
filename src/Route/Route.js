import { createBrowserRouter } from "react-router-dom";
import Auth from "../Layout/Auth";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Checkout from "../Pages/Home/Services/Checkout/Checkout";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {

        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/Details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://genious-car-server-liart.vercel.app/services/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivetRoute><Checkout></Checkout></PrivetRoute>,
                loader: ({ params }) => fetch(`https://genious-car-server-liart.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivetRoute><Orders></Orders></PrivetRoute>,
            },

        ]
    },
    {
        path: '/',
        element: <Auth></Auth>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default router