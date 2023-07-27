import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home_one/Home";
import Home_two from "../Pages/Home_two/Home_two";
import SuccessStory from "../Pages/SuccessStory/SuccessStory";
import StudentProfile from "../Pages/StudentProfile/StudentProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/hometwo",
        element: <Home_two />,
      },
      {
        path: "/success",
        element: <SuccessStory />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/studentprofile",
        element: <StudentProfile />,
      },
    ],
  },
]);
