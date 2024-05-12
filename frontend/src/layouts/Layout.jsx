import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { getUser } from "../lib/fetch/users";

const Layout = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkLoggedInUser = async () => {
      const response = await getUser();
      console.log(response);
      setUser(response);
    };

    checkLoggedInUser();
  }, []);

  return (
    <div className="w-full min-h-screen bg-theme">
      <div className="container max-w-10xl">
        <Outlet context={[user, setUser]} />
      </div>
    </div>
  );
};

export default Layout;