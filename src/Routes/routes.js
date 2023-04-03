import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../Layout/Main/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DashboardLayout from "../Layout/Dashboard/DashboarLayout";
import PostContent from "../components/dashboard/postContent";
import TaskDetails from "../components/TaskDetails";
import UpdatePage from "../pages/UpdatePage";
import UpdateModal from "../components/dashboard/UpdateModal";


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
        {
            path:"/job-details/:id",
            element:<TaskDetails/>
        },
       
    
      ],
    },
    {
        path:"/dashboard",
        element:<DashboardLayout/>,
        children:[
            {
                path:"/dashboard/add-content",
                element:<PostContent/>
            },
            {
              path:"/dashboard/update_page",
              element:<UpdatePage/>
            },
            {
              path:"/dashboard/update_page/:id",
              element:<UpdateModal/>
            }
         
           
        ]
     }
  ]);