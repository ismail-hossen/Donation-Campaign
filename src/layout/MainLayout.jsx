import { NavbarSimple } from "../components/Header/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <NavbarSimple></NavbarSimple>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
