import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";


const Router = createBrowserRouter([
    {
        path: "/",
        element:<Home></Home>
    },


    {
        path: "*",
        element: <Error></Error>,
    },
])

export default Router;