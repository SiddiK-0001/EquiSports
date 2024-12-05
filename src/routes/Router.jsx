import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllEquipment from "../pages/AllEquipment";
import Add from "../pages/Add";
import My from "../pages/My";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Layout from "../layout/Layout";



const Router = createBrowserRouter([
{
    path:"/",
    element:<Layout></Layout>,
    children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/all",
            element:<AllEquipment></AllEquipment>
        },
        {
            path: "/add",
            element:<PrivateRoute><Add></Add></PrivateRoute>
        },
        {
            path: "/my",
            element:<PrivateRoute><My></My></PrivateRoute>
        },
    ]
},
{
    path: "/login",
    element:<Login></Login>
},
{
    path: "/register",
    element:<Register></Register>
},


    {
        path: "*",
        element: <Error></Error>,
    },
])

export default Router;