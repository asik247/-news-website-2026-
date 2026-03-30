import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home";
import CategoriesNews from "../Pages/CategoriesNews";

const router = createBrowserRouter([
    {path:'/',Component:Root,children:[
        {index:true,Component:Home},
        {
            path:'categoriesNews/:id',
            loader:()=>fetch("/news.json"),
            Component:CategoriesNews
        }
    ]}
])
export default router;