import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Pages/Home/Homepage";
import ErrorPage from "../Shared/ErrorPage";
import Signup from "../registerLogin/Signup";
import Login from "../registerLogin/Login";

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
    ],
  },
]);
