import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="w-full min-h-screen bg-theme">
      <div className="container max-w-10xl">
        <Navbar />
        <ToastContainer />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
