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
import Commonpage from "../Pages/Dashboard/Commonpage";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../component/AllUsers";
import UserCart from "../component/UserCart";
import AddClass from "../Pages/Dashboard/MyClass/AddClass";

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
    element: <PrivateRoute><Dashboard/></PrivateRoute>,    
    children: [
      {
        path: 'commonpage',
        element: <Commonpage/>
      },
      {
        path: 'Addclass',
        element: <AddClass/>
      },
      {
        path: 'myclass',
        element: <MyClass/>
      },
      {
        path: 'allusers',
        element: <PrivateRoute><AllUsers/></PrivateRoute>
      },
      {
        path: 'cart',
        element: <UserCart/>
      },
    ],
  },
]);
