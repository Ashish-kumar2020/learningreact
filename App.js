import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";

const AppLayput = ()=>{
    return(
        <div className="app">
            <Header/>
           <Outlet/>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayput/>,
        children:[
            {
                path:'/',
                element: <Body/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ]
    }
])



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router = {router}/>);