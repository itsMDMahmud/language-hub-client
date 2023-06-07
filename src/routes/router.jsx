import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Pages/Home/Homepage";
import ErrorPage from "../Shared/ErrorPage";
import Login from "../registerLogin/Login";
import Signup from "../registerLogin/Signup";
import Instructors from "../component/Instructors/Instructors";
import Classes from "../component/Classes/Classes";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import Dashboard from "../Layout/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Homepage/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "signup",
        element: <Signup/>
      },
      {
        path: "instructors",
        element: <Instructors/>
      },
      {
        path: "classes",
        element: <Classes/>
      },      
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,    
    children: [
      {
        path: 'myclass',
        element: <MyClass/>
      }
    ],
  },
]);
