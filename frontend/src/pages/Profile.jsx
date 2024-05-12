import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import Navbar from "../components/Navbar";

import { getUser, logoutUser } from "../lib/fetch/users";
import { getItems, createItem } from "../lib/fetch/items";

const Profile = () => {
  const [user] = useOutletContext();
  console.log(user);

  return (
    <>
      <Navbar />

      <div className="">
        Profile Page
      </div>
    </>
  );
};

export default Profile;
