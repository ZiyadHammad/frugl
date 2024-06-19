import { useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

import useSignOut from "../utils/helpers";

const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    src: "/assets/icons/dashboard.svg",
  },
  {
    name: "Scraper",
    path: "/scraper",
    src: "/assets/icons/robot.svg",
  },
  {
    name: "My Products",
    path: "/products",
    src: "/assets/icons/my-products.svg",
  },
  {
    name: "Settings",
    path: "/settings",
    src: "/assets/icons/settings.svg",
  },
];

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { userInfo } = useSelector((state) => state.auth);
  const location = useLocation();
  const { handleSignOut } = useSignOut();
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <>
      <div className="hidden lg:flex flex-col h-screen bg-theme text-primary w-72 border-r">
        <div className="flex items-center gap-2 justify-start p-8">
          <img src="/icon.svg" alt="logo" className="h-10 w-10" />
          <Link
            to="/"
            className="text-primary font-spaceGrotesk font-bold text-3xl"
          >
            FrugL
          </Link>
        </div>

        <nav className="mt-10 flex flex-col px-4">
          {links.map((l, i) => (
            <NavLink
              to={l.path}
              key={i}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 py-2 rounded-md bg-black text-white transition duration-400"
                  : "flex items-center px-4 py-2 rounded-md hover:bg-blue-200 transition duration-400"
              }
            >
              <img
                src={l.src}
                alt={l.name}
                className={`h-5 w-5 mr-3 transition duration-400 ${
                  location.pathname === l.path ? "invert scale-125" : ""
                }`}
              />
              {l.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-col items-center mt-auto pb-4">
          {userInfo.email && (
            <p className="text-gray-400 text-sm">{userInfo.email}</p>
          )}
          <button
            onClick={handleSignOut}
            className="border w-64 h-8 text-gray-600 font-bold text-sm bg-gray-100"
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 border-b lg:hidden">
        <Link to="/">
          <img src="/icon.svg" alt="logo" className="object-contain w-6 h-6" />
        </Link>
        <img
          src={`/assets/icons/${menuOpen ? "close" : "menu"}.svg`}
          alt="menu"
          className="object-contain w-5 h-5"
          onClick={toggleMenu}
        />
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden absolute top-14 right-0 w-full h-[100vh] bg-theme shadow-lg z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col pl-8 pt-8 gap-2">
              {userInfo &&
                links.map((l) => (
                  <NavLink
                    key={l.name}
                    onClick={handleMenuClose}
                    to={l.path}
                    className="flex items-center gap-2 text-md text-gray-700 hover:bg-gray-100"
                  >
                    <img src={l.src} alt={l.name} className="h-5" />
                    {l.name}
                  </NavLink>
                ))}
              <NavLink
                onClick={handleMenuClose}
                to="/"
                className="flex items-center gap-2 text-md text-gray-700 hover:bg-gray-100"
              >
                <img
                  src="/assets/icons/sign-out.svg"
                  alt="sign out"
                  className="h-5"
                />
                Sign Out
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
