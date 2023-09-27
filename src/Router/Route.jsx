import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetails from "../pages/Donation/DonationDetails";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const myCreatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/donation", element: <Donation></Donation> },
      { path: "/statistics", element: <Statistics></Statistics> },
      {
        path: "/donation-details/:id",
        element: <DonationDetails></DonationDetails>,
      },
    ],
  },
]);

export default myCreatedRoutes;
