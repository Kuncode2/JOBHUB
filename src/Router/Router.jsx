import { createBrowserRouter, } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
const router = createBrowserRouter([
    {
        path: "/",     // this is the root path
        element: <App />,
        children: [
            { path: "/", element: <Home />},
        ],
    },
]);
export default router 