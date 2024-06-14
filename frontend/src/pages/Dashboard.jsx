import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <Outlet context={[userInfo]} />
      </div>
    </div>
  );
};

export default Dashboard;
