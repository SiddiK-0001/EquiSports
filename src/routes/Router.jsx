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
import Update from "../pages/Update";
import About from "../pages/About";




const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://server-site-phi.vercel.app/equis')
            },
        
            {
                path: "/about",
                element: <About></About>,
                
            },
            {
                path: "/all",
                element: <AllEquipment></AllEquipment>,
                loader: () => fetch('https://server-site-phi.vercel.app/equis')
            },
            {
                path: "/add",
                element: <PrivateRoute><Add></Add></PrivateRoute>
            },
            {
                path: "/my",
                element: <PrivateRoute><My></My></PrivateRoute>,
            
            },

            {
                path: "/equi/:id",
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-site-phi.vercel.app/equiss/${params.id}`)
            },
        
            {
                path: "/equi/item/:itemName",
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-site-phi.vercel.app/equi/item/${params.itemName}`)
            }
            

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