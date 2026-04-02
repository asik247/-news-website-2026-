import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home";
import CategoriesNews from "../Pages/CategoriesNews";
import Details from "../Components/Details";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Login";
import Registation from "../Components/Registation";

const router = createBrowserRouter([
    {
        path: '/', Component: Root, children: [
            { index: true, Component: Home },
            {
                path: 'categoriesNews/:id',
                loader: () => fetch("/news.json"),
                Component: CategoriesNews
            },
            {
                path: 'details/:id',
                loader: ({ params }) => fetch("/news.json").then(res => res.json()).then(data => data.find(n => n.id == params.id)),
                Component: Details
            },

        ]
    },
      {
        path: 'auth',
        Component: AuthLayout,
        children:[
            {path:'login',Component:Login},
            {path:'registation',Component:Registation}
        ]
    }
])
export default router;