import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full min-h-screen bg-theme">
      <div className="container max-w-10xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;