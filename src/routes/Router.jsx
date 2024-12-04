import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllEquipment from "../pages/AllEquipment";
import Add from "../pages/Add";
import My from "../pages/My";
import Login from "../pages/Login";
import Register from "../pages/Register";



const Router = createBrowserRouter([
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
        element:<Add></Add>
    },
    {
        path: "/my",
        element:<My></My>
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