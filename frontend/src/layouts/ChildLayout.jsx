import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
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
      <ToastContainer />
      <div className="lg:flex-1">
        <Outlet context={{userInfo}} />
      </div>
    </div>
  );
};

export default ChildLayout;
