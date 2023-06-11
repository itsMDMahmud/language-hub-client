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
import EnrolledClasses from "../Pages/Dashboard/student/EnrolledClasses";
import History from "../Pages/Dashboard/student/History";
import Payment from "../Pages/Dashboard/student/Payment";
import AdminRoute from "./AdminRoute";
import ApprovalPage from "../component/ApprovalPage";

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
        path: 'addclass',
        element: <AddClass/>
      },
      {
        path: 'enrolled',
        element: <EnrolledClasses/>
      },
      {
        path: '/dashboard/payment/:_id',
        element: <Payment/>,

      },
      {
        path: 'history',
        element: <History></History>
      },
      {
        path: 'myclass',
        element: <MyClass/>
      },
      {
        path: 'allusers',
        element: <AdminRoute><AllUsers/></AdminRoute>
      },
      {
        path: 'approvalPage',
        element: <AdminRoute><ApprovalPage/></AdminRoute>
      },
      {
        path: 'cart',
        element: <UserCart/>
      },
    ],
  },
]);
