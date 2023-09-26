import { NavbarSimple } from "../components/Header/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-10/12 mx-auto">
      <NavbarSimple></NavbarSimple>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
