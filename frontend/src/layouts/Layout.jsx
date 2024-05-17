import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, logoutUser } from "../lib/fetch/users";

import Navbar from "../components/Navbar";
import Loader from '../components/Loader'

const Layout = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    auth: false
  });
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const response = await getUser();
        setUser(response);
      } catch (error) {
        console.log('User is not logged in')
      } finally {
        setLoading(false);
      }
    };

    checkLoggedInUser();
  }, []);

  const handleSignOut = async () => {
    try {
      const response = await logoutUser()
      console.log(response)
      setUser(null)
      navigate('/login')
    } catch (error) {
      throw new Error(error.message)
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className="w-full min-h-screen bg-theme">
      <div className="container max-w-10xl">
        <Navbar user={user} handleSignOut={handleSignOut} />
        <Outlet context={[user, setUser, handleSignOut]} />
      </div>
    </div>
  );
};

export default Layout;