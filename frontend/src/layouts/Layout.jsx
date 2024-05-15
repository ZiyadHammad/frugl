import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../lib/fetch/users";
import Loader from '../components/Loader'

const Layout = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const response = await getUser();
        setUser(response);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setLoading(false);
      }
    };

    checkLoggedInUser();
  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <div className="w-full min-h-screen bg-theme">
      <div className="container max-w-10xl">
        <Outlet context={[user, setUser]} />
      </div>
    </div>
  );
};

export default Layout;