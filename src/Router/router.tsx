import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home_one/Home";
import Home_two from "../Pages/Home_two/Home_two";
import SuccessStory from "../Pages/SuccessStory/SuccessStory";
import StudentProfile from "../Pages/StudentProfile/StudentProfile";
import ExamZone from "../Pages/Home_two/ExamZone/ExamZone";
import VerificationForm from "../Pages/SignIn/VerificationForm/VerificationForm";
import LiveExpert from "../Pages/Home_two/LiveExpert/LiveExpert";

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
        path: "/examzone",
        element: <ExamZone />,
      },
      {
        path: "/live-expert",
        element: <LiveExpert />,
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
        path: "/verification",
        element: <VerificationForm />,
      },
      {
        path: "/studentprofile",
        element: <StudentProfile />,
      },
    ],
  },
]);
