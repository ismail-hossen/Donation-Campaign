import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";

const myCreatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home>, loader: () => fetch("data.json") },
      { path: "/donation", element: <Donation></Donation> },
      { path: "/statistics", element: <Statistics></Statistics> },
    ],
  },
]);

export default myCreatedRoutes;
