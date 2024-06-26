import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

import Loader from "../components/Loader";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData).unwrap();
      console.log(response)
      dispatch(setCredentials({...response}));
      navigate("/dashboard");
    } catch (err) {
      toast(err.message)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center items-center py-28">
      <div className="flex flex-col justify-center items-center">
        <img src="/icon.svg" alt="icon" className="object-contain h-10 w-10" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
          Log in
        </h2>

        <div className="flex flex-row justify-center items-center gap-1 mt-2">
          <p className="text-center text-sm text-gray-600 max-w">
            Don't have an account?
          </p>
          <Link
            to="/register"
            className="text-sm text-center font-medium text-secondary hover:text-indigo-600 focus:outline-none focus:fing-2 focus:ring-indigo-500"
          >
            Register
          </Link>
        </div>

        <div className="mt-8">
          <div className="bg-white py-10 px-6 shadow rounded-10 min-w-[340px] ">
            <form onSubmit={handleSubmit} className="mb-0 space-y-12">
              <div className="flex flex-col relative">
                <input
                  id="email"
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
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
                  value={formData.password}
                  name="password"
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
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
