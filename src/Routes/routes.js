import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import Main from "../Layout/Main/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../Layout/Dashboard/DashboarLayout";
import DashboardLayout from "../Layout/Dashboard/DashboarLayout";

 export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
    
      ],
    },
    {
        path:"/dashboard",
        element:<DashboardLayout/>,
        children:[
            // {
            //     path:"/dashboard",
            //     element:<PostContent/>
            // },
            // {
            //     path:"/dashboard/content",
            //     element: <PostContent/>
            // },
            // {
            //     path:"/dashboard/contentList",
            //     element:<ContentList/>
            // },
            // {
            //     path:"/dashboard/contentList/:id",
            //     element: <UpdatePage/>
            // }
        ]
     }
  ]);