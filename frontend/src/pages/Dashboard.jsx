import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setItems } from "../slices/itemSlice";
import { useGetItemsMutation } from "../slices/itemsApiSlice";

import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [getItems, { isLoading }] = useGetItemsMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchItems = async (userId) => {
      try {
        const response = await getItems(userId);
        dispatch(setItems(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    if (userInfo.id) {
      fetchItems(userInfo.id)
    }
  }, [userInfo, dispatch, getItems]);

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
