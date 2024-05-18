import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default Layout;
