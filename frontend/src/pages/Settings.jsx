import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useUpdateUserMutation} from '../slices/usersApiSlice'

const Settings = () => {
  const [formData, setFormData] = useState({});
  const handleSubmit = () => {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="w-full bg-theme">

        <div className="max-w-10xl mx-auto h-[120px] flex justify-start items-center">
          <h1 className="text-primary text-4xl">Account Settings</h1>
        </div>
      </div>

      <div className="w-full bg-white pt-10">
        <div className="w-full max-w-10xl mx-auto">

          <div className="py-10 px-6 max-w-2xl">
            <form onSubmit={handleSubmit} className="mb-0 space-y-12">
              <div className="flex sm:flex-col sm:gap-10 md:flex-row">
                <div className="flex flex-col relative">
                  <input
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                    type="text"
                    id="firstName"
                    autoComplete="off"
                    className="border-b focus:outline-none py-1 focus:border-secondary focus:border-b-2 transition-colors peer duration-200"
                    required
                  />
                  <label
                    htmlFor="firstName"
                    className={`text-sm font-medium text-primary absolute left-0 top-1 cursor-text peer-focus:text-secondary peer-focus:text-xs peer-focus:-top-4 transition-all duration-200 ${
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
                    className="border-b focus:outline-none py-1 focus:border-secondary focus:border-b-2 transition-colors peer duration-200"
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
              <div className="flex flex-col relative">
                <input
                  onChange={handleChange}
                  name="email"
                  id="email"
                  value={formData.email}
                  type="email"
                  autoComplete="off"
                  className="border-b focus:outline-none py-1 focus:border-secondary focus:border-b-2 transition-colors peer duration-200"
                  required
                />
                <label
                  htmlFor="email"
                  className={`text-sm font-medium text-primary absolute left-0 top-1 cursor-text peer-focus:text-secondary peer-focus:text-xs peer-focus:-top-4 transition-all duration-200 ${
                    formData.email ? "label-active" : ""
                  }`}
                >
                  Email Address
                </label>
              </div>
              <div className="flex flex-col relative">
                <input
                  id="password"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                  type="password"
                  autoComplete="off"
                  className="border-b focus:outline-none py-1 focus:border-secondary focus:border-b-2 transition-colors peer duration-200"
                  required
                />
                <label
                  htmlFor="password"
                  className={`text-sm font-medium text-primary absolute left-0 top-1 cursor-text peer-focus:text-secondary peer-focus:text-xs peer-focus:-top-4 transition-all duration-200 ${
                    formData.password ? "label-active" : ""
                  }`}
                >
                  Password
                </label>
              </div>
              <div className="flex flex-col relative">
                <input
                  id="confirmPassword"
                  onChange={handleChange}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  type="password"
                  autoComplete="off"
                  className="border-b focus:outline-none py-1 focus:border-secondary focus:border-b-2 transition-colors peer duration-200"
                  required
                />
                <label
                  htmlFor="confirmPassword"
                  className={`text-sm font-medium text-primary absolute left-0 top-1 cursor-text peer-focus:text-secondary peer-focus:text-xs peer-focus:-top-4 transition-all duration-200 ${
                    formData.confirmPassword ? "label-active" : ""
                  }`}
                >
                  Confirm Password
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
