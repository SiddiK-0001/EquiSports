import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllEquipment from "../pages/AllEquipment";
import Add from "../pages/Add";
import My from "../pages/My";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Layout from "../layout/Layout";
import ViewDetails from "../pages/ViewDetails";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/equi')
            },
            {
                path: "/all",
                element: <AllEquipment></AllEquipment>,
                loader: () => fetch('http://localhost:3000/equi')
            },
            {
                path: "/add",
                element: <PrivateRoute><Add></Add></PrivateRoute>
            },
            {
                path: "/my",
                element: <PrivateRoute><My></My></PrivateRoute>,
                loader: () => fetch('http://localhost:3000/equi')
            },

            {
                path: "/equi/:id",
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/equi/${params.id}`)
            },

        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },


    {
        path: "*",
        element: <Error></Error>,
    },
])

export default Router;