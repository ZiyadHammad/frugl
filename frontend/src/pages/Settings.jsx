import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useUpdateUserMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

import DeleteModal from "../components/DeleteModal";
import ConfirmationModal from "../components/ConfirmationModal";
import Loader from "../components/Loader";

const Settings = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const initState = {
    firstName: userInfo.name.split(" ")[0],
    lastName: userInfo.name.split(" ")[1],
    password: "",
    confirmPassword: ""
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [formData, setFormData] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setIsBlurred(false);
  };

  const handleCancel = (e) => {
    setFormData(initState);
    setIsBlurred(true);
  };

  function closeModal() {
    setIsOpen(false);
    setInputValue("");
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const { lastName, firstName, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      toast("Passwords do not match.");
      return;
    }

    if (password && password.length < 6) {
      toast("Passwords does not meet password requirements");
      return;
    }

    try {
      const updatePayload = { firstName, lastName };

      if (password) {
        updatePayload.password = password;
      }

      await updateUser(updatePayload).unwrap();

      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      userInfo.name = `${firstName} ${lastName}`;

      dispatch(setCredentials(userInfo));
      toast("Account Successfully Updated!");
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <section className="flex flex-col gap-10 px-6 pt-10 lg:pt-0">
        <h2 className="text-primary text-[32px] font-semibold text-center md:text-start lg:border-b">
          Account Settings
        </h2>
      </section>

      <div className="w-full bg-inherit pt-10">
        <form
          onSubmit={handleUpdateUser}
          className="space-y-8 max-w-[1000px] py-10 px-6 flex flex-col items-center md:items-start "
        >
          <div className="flex items-center gap-4">
            <div className="flex flex-col relative flex-grow">
              <input
                name="email"
                id="email"
                placeholder={userInfo.email}
                type="email"
                autoComplete="off"
                readOnly
                className="min-w-[300px] border-2 border-gray-300 h-[40px] bg-gray-50 rounded-lg focus:outline-none py-1 pl-2 transition-colors peer duration-200 cursor-not-allowed opacity-50 text-md text-gray-900 placeholder-gray-500 disabled:text-gray-500 disabled:placeholder-gray-500"
                required
              />
              <label
                htmlFor="email"
                className={`text-sm font-medium text-primary absolute left-2 top-1 cursor-text peer-focus:text-secondary peer-focus:text-xs peer-focus:-top-4 transition-all duration-200 ${
                  userInfo.email ? "label-active" : ""
                }`}
              >
                Email Address
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex flex-col relative">
              <input
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                type="text"
                id="firstName"
                autoComplete="off"
                className="min-w-[300px] border-2 rounded-lg pl-2 py-1 focus:outline-none focus:border-secondary focus:border-b-2 transition-colors peer duration-200"
                required
              />

              <label
                htmlFor="firstName"
                className={`text-sm font-medium text-primary absolute left-3 top-2  cursor-text peer-focus:text-secondary peer-focus:text-xs peer-focus:-top-4 transition-all duration-200 ${
                  formData.firstName ? "label-active" : ""
                }`}
              >
                First Name
              </label>
            </div>

            <div className="flex flex-col relative">
              <input
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                type="text"
                id="lastName"
                autoComplete="off"
                className="min-w-[300px] border-2 rounded-lg pl-2 focus:outline-none py-1 focus:border-secondary focus:border-b-2 transition-colors peer duration-200"
                required
              />
              <label
                htmlFor="lastName"
                className={`text-sm font-medium text-primary absolute left-3 top-2 cursor-text peer-focus:text-secondary peer-focus:text-xs peer-focus:-top-4 transition-all duration-200 ${
                  formData.lastName ? "label-active" : ""
                }`}
              >
                Last Name
              </label>
            </div>
          </div>

          {/* CURRENT PASSWORD */}
          <div className="flex gap-4">
            <div className="flex flex-col relative flex-grow">
              <input
                id="currentPassword"
                onChange={handleChange}
                name="currentPassword"
                value={formData.currentPassword}
                type="password"
                autoComplete="off"
                className="min-w-[300px] border-2 border-gray-300 h-[40px] bg-gray-50 rounded-lg focus:outline-none pl-2 transition-colors peer duration-200 cursor-not-allowed opacity-50 text-lg text-gray-900 placeholder-gray-500 disabled:text-gray-500 disabled:placeholder-gray-500"
                placeholder="*************"
                // required
              />
              <label
                htmlFor="currentPassword"
                className="text-sm font-medium text-primary absolute left-2 top-1 cursor-text peer-focus:text-secondary peer-focus:text-xs peer-focus:-top-4 transition-all duration-200 label-active"
              >
                Current Password
              </label>
            </div>
            {/* <ConfirmationModal  
                 navigate={navigate}
                 dispatch={dispatch}
                 closeModal={closeModal}
                 isOpen={isOpen}
            /> */}
          </div>

          <div className="flex gap-8">
            <div className="flex items-center gap-4">
              <div className="flex flex-col relative flex-grow">
                <input
                  id="password"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                  type="password"
                  autoComplete="off"
                  className="min-w-[300px] border-2 rounded-lg pl-2 py-1 focus:outline-none focus:border-secondary focus:border-b-2 transition-colors peer duration-200"
                  // required
                />
                <label
                  htmlFor="password"
                  className={`text-sm font-medium text-primary absolute left-3 top-2  cursor-text peer-focus:text-secondary peer-focus:text-xs peer-focus:-top-5 transition-all duration-200 ${
                    formData.password ? "label-active" : ""
                  }`}
                >
                  Password
                </label>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-col relative flex-grow">
                <input
                  id="confirmPassword"
                  onChange={handleChange}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  type="password"
                  autoComplete="off"
                  className="min-w-[300px] border-2 rounded-lg pl-2 py-1 focus:outline-none focus:border-secondary focus:border-b-2 transition-colors peer duration-200"
                  // required
                />
                <label
                  htmlFor="confirmPassword"
                  className={`text-sm font-medium text-primary absolute left-3 top-2  cursor-text peer-focus:text-secondary peer-focus:text-xs peer-focus:-top-5 transition-all duration-200 ${
                    formData.confirmPassword ? "label-active" : ""
                  }`}
                >
                  Confirm Password
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-row relative gap-2 items-center">
            <Checkbox
              checked={formData.notifications}
              onChange={() =>
                setFormData((prevState) => ({
                  ...prevState,
                  notifications: !prevState.notifications,
                }))
              }
              className="group size-6 rounded-md bg-gray-400 p-1 ring-1 ring-gray-400 data-[checked]:ring-secondary ring-inset data-[checked]:bg-white"
            >
              <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
            </Checkbox>
            <h1>I'd like to receive product updates</h1>
          </div>

          <div className="flex items-center gap-8">
            <button
              onClick={handleCancel}
              type="button"
              disabled={isBlurred}
              className={`${
                isBlurred ? "cursor-not-allowed" : "hover:bg-indigo-100"
              } w-[100px] font-spaceGrotesk flex justify-center py-2 px-4 border-2 rounded-lg shadow-sm text-sm font-medium text-primary bg-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`${
                isBlurred
                  ? "bg-secondary-300 cursor-not-allowed"
                  : "hover:bg-secondary-700 bg-secondary"
              } w-[100px] font-spaceGrotesk flex justify-center py-2 px-4 border-2 rounded-lg shadow-sm text-sm font-medium text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500`}
              disabled={isBlurred}
            >
              Save
            </button>
          </div>

          <h3 className="text-primary font-spaceGrotesk text-center md:text-start">
            If you would like to delete your account,{" "}
            <span
              className="text-secondary font-bold cursor-pointer"
              onClick={openModal}
            >
              click here
            </span>
          </h3>
        </form>
      </div>

      <DeleteModal
        navigate={navigate}
        dispatch={dispatch}
        closeModal={closeModal}
        isOpen={isOpen}
      />
    </>
  );
};

export default Settings;
