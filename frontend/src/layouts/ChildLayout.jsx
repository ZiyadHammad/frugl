import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

const ChildLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="lg:flex-1 lg:p-10">
        <Outlet />
      </div>
    </div>
  )
}

export default ChildLayout