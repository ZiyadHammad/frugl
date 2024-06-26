import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Sidebar from "../components/Sidebar";

const ChildLayout = () => {
  

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <ToastContainer />
      <div className="lg:flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default ChildLayout;
