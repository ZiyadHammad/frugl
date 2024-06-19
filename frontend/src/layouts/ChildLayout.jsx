import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useGetItemsMutation } from "../slices/itemsApiSlice";
import { setItems } from "../slices/itemSlice";

import Sidebar from "../components/Sidebar";

const ChildLayout = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [getItems, { isLoading }] = useGetItemsMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async (userId) => {
      try {
        const response = await getItems(userId).unwrap()
       dispatch(setItems(response))
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchProducts(userInfo.id)
  }, [userInfo]);

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="lg:flex-1 lg:p-10 bg-[#f2f2f2]">
        <Outlet context={[userInfo]} />
      </div>
    </div>
  );
};

export default ChildLayout;
