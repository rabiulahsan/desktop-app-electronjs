import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import HomePage from "../Components/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
      { path: "/home", element: <HomePage></HomePage> },
    ],
  },
]);
