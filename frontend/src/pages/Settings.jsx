import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import { useUpdateUserMutation, useDeleteUserMutation } from "../slices/usersApiSlice";

const Settings = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [enabled, setEnabled] = useState(true);
  const [formData, setFormData] = useState({
    firstName: userInfo.name.split(" ")[0] || "",
    lastName: userInfo.name.split(" ")[1] || "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {};


  return (
    <>
      <div className="w-full bg-theme">
        <div className="max-w-[1150px] mx-auto h-[120px] flex justify-start items-center">
          <h1 className="text-primary text-4xl">Account Settings</h1>
        </div>
      </div>

      <div className="w-full bg-white pt-10">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="py-10 px-6 max-w-2xl">
            <form onSubmit={handleSubmit} className="mb-0 space-y-8">
              <div className="flex items-center gap-4">
                <h2 className="flex items-center text-lg mb-1 md:mb-0 md:max-h-11 text-gray-400 cursor-not-allowed">
                  Your Email
                </h2>
                <div className="flex flex-col relative flex-grow">
                  <input
                    name="email"
                    id="email"
                    placeholder={userInfo.email}
                    type="email"
                    autoComplete="off"
                    readOnly
                    className="border-2 border-gray-300 h-[40px] bg-gray-50 rounded-lg focus:outline-none py-1 pl-2 transition-colors peer duration-200 cursor-not-allowed opacity-50 text-md text-gray-900 placeholder-gray-500 disabled:text-gray-500 disabled:placeholder-gray-500"
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

              <div className="flex sm:flex-col sm:gap-10 md:flex-row">
                <div className="flex items-center gap-4">
                  <h2 className="flex items-center text-lg mb-1 md:mb-0 md:max-h-11">
                    Your Name
                  </h2>

                  <div className="flex flex-col relative">
                    <input
                      onChange={handleChange}
                      name="firstName"
                      value={formData.firstName}
                      type="text"
                      id="firstName"
                      autoComplete="off"
                      className="border-2 rounded-lg pl-2 py-1 focus:outline-none focus:border-secondary focus:border-b-2 transition-colors peer duration-200"
                      required
                    />

                    <label
                      htmlFor="firstName"
                      className={`text-sm font-medium text-primary absolute left-2 top-1 cursor-text peer-focus:text-secondary peer-focus:text-xs peer-focus:-top-4 transition-all duration-200 ${
                        formData.firstName ? "label-active" : ""
                      }`}
                    >
                      First Name
                    </label>
                  </div>
                </div>

                <div className="flex flex-col relative">
                  <input
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                    type="text"
                    id="lastName"
                    autoComplete="off"
                    className="border-2 rounded-lg pl-2 focus:outline-none py-1 focus:border-secondary focus:border-b-2 transition-colors peer duration-200"
                    required
                  />
                  <label
                    htmlFor="lastName"
                    className={`text-sm font-medium text-primary absolute left-0 top-1 cursor-text peer-focus:text-secondary peer-focus:text-xs peer-focus:-top-4 transition-all duration-200 ${
                      formData.lastName ? "label-active" : ""
                    }`}
                  >
                    Last Name
                  </label>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <h2 className="flex items-center text-lg mb-1 md:mb-0 md:max-h-11">
                  Your Password
                </h2>
                <div className="flex flex-col relative flex-grow">
                  <input
                    id="password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    type="password"
                    autoComplete="off"
                    className="border-2 rounded-lg pl-2 py-1 focus:outline-none focus:border-secondary focus:border-b-2 transition-colors peer duration-200"
                    required
                  />
                  <label
                    htmlFor="password"
                    className={`text-sm font-medium text-primary absolute left-2 top-2 cursor-text peer-focus:text-secondary peer-focus:text-xs peer-focus:-top-5 transition-all duration-200 ${
                      formData.password ? "label-active" : ""
                    }`}
                  >
                    Password
                  </label>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <h2 className="flex items-center text-lg mb-1 md:mb-0 md:max-h-11">
                  Confirm Password
                </h2>
                <div className="flex flex-col relative flex-grow">
                  <input
                    id="password"
                    onChange={handleChange}
                    name="password"
                    value={formData.confirmPassword}
                    type="password"
                    autoComplete="off"
                    className="border-2 rounded-lg pl-2 py-1 focus:outline-none focus:border-secondary focus:border-b-2 transition-colors peer duration-200"
                    required
                  />
                  <label
                    htmlFor="confirmPassword"
                    className={`text-sm font-medium text-primary absolute left-2 top-2 cursor-text peer-focus:text-secondary peer-focus:text-xs peer-focus:-top-5 transition-all duration-200 ${
                      formData.confirmPassword ? "label-active" : ""
                    }`}
                  >
                    Confirm Password
                  </label>
                </div>
              </div>

              <div className="flex flex-row relative gap-2 items-center">
                <Checkbox
                  checked={enabled}
                  onChange={setEnabled}
                  className="group size-6 rounded-md bg-gray-400 p-1 ring-1 ring-gray-400 data-[checked]:ring-secondary ring-inset data-[checked]:bg-white"
                >
                  <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
                </Checkbox>
                <h1>I'd like to receive product updates</h1>
              </div>

              <div className="flex items-center gap-8">
                <button
                  type="submit"
                  className="w-[100px] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-[100px] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>

              <h3 className="text-primary font-spaceGrotesk" >If you would like to delete your account, <span className="text-secondary font-bold" onClick={() => {}} >click here</span></h3>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
