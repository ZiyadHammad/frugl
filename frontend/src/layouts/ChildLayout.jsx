import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";


const ChildLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  )
}

export default ChildLayout