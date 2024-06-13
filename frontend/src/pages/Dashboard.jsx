import {useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

import { useGetItemsMutation } from "../slices/itemsApiSlice";

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [getItems, { isLoading }] = useGetItemsMutation()
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    const fetchItems = async (userId) => {
      const items = await getItems(userId).unwrap();
      setUserItems(items);
    };
    
    if (userInfo?.id) {
      fetchItems(userInfo.id);
    }
  }, [userInfo, getItems]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <Outlet context={[userItems, setUserItems, isLoading]} />
      </div>
    </div>
  );
};

export default Dashboard;
