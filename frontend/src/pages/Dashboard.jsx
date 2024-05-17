import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import Navbar from "../components/Navbar";

import { getUser, logoutUser } from "../lib/fetch/users";
import { getItems, createItem } from "../lib/fetch/items";

const Dashboard = () => {
  const [user] = useOutletContext();
  // console.log(user);

  return (
      <div className="">
        Dashboard Page
      </div>
  );
};

export default Dashboard;
