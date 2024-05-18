import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

import { useLogoutMutation } from "../slices/usersApiSlice";
import { clearCredentials } from "../slices/authSlice";

// Component for the Menu Toggle Icon
const MenuToggleIcon = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="md:hidden">
      <img
        src={!menuOpen ? "/assets/icons/menu.svg" : "/assets/icons/close.svg"}
        alt="menu"
        className="object-contain w-10 h-10"
        onClick={toggleMenu}
      />
    </div>
  );
};

// Component for the Mobile Menu
const MobileMenu = ({ menuOpen, userInfo, handleSignOut }) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          className="md:hidden absolute top-14 right-0 w-full h-[100vh] bg-theme shadow-lg z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col pl-8 pt-8 gap-2">
            {userInfo ? (
              <>
                <NavLink
                  to="/profile"
                  className="flex items-center gap-2  text-md text-gray-700 hover:bg-gray-100"
                >
                  <img
                    src="/assets/icons/dashboard.svg"
                    alt="Profile"
                    className="h-5"
                  />
                  <p>Profile</p>
                </NavLink>
                <NavLink
                  to="/settings"
                  className="flex items-center gap-2  text-md text-gray-700 hover:bg-gray-100"
                >
                  <img
                    src="/assets/icons/settings.svg"
                    alt="settings"
                    className="h-5"
                  />
                  <p>Settings</p>
                </NavLink>
                <NavLink className="flex items-center gap-2  text-md text-gray-700 hover:bg-gray-100">
                  <img
                    src="/assets/icons/sign-out.svg"
                    alt="sign out"
                    className="h-5"
                  />
                  <button onClick={handleSignOut}>Sign Out</button>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login" className="text-body text-xl z-11">
                  Log In
                </NavLink>
                <NavLink to="/register" className="text-body text-xl z-11">
                  Get Started ➞
                </NavLink>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Component for the Desktop Navigation Links
const DesktopNavLinks = ({ toggleMenu, menuOpen, userInfo, handleSignOut }) => {
  return (
    <>
      {userInfo ? (
        <div className=" sm:hidden md:block relative">
          <img
            src={userInfo?.avatar || "/assets/icons/user.svg"}
            alt="User Avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={toggleMenu}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-4 py-4  w-48 bg-white rounded-md shadow-lg z-20 flex flex-col ">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={userInfo?.avatar || "/assets/icons/user.svg"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-center pt-4 gap-1">
                  <p className="text-sm text-gray-700">{userInfo.name}</p>
                  <p className="text-sm text-gray-500">{userInfo.email}</p>
                </div>
              </div>

              <div className="border-t border-black-100"></div>

              <div className="py-1 flex flex-col items-start justify-start gap-2 pt-4 px-4">
              <NavLink
                  to="/profile"
                  className="flex items-center gap-2  text-md text-gray-700 hover:bg-gray-100"
                >
                  <img
                    src="/assets/icons/dashboard.svg"
                    alt="profile"
                    className="h-5"
                  />
                  <p>Profile</p>
                </NavLink>
                <NavLink
                  to="/settings"
                  className="flex items-center gap-2  text-md text-gray-700 hover:bg-gray-100"
                >
                  <img
                    src="/assets/icons/settings.svg"
                    alt="settings"
                    className="h-5"
                  />
                  <p>Settings</p>
                </NavLink>

                <NavLink className="flex items-center gap-2  text-md text-gray-700 hover:bg-gray-100">
                  <img
                    src="/assets/icons/sign-out.svg"
                    alt="settings"
                    className="h-5"
                  />
                  <button onClick={handleSignOut} >Sign Out</button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="sm:hidden md:flex items-center gap-5">
          <NavLink
            className="bg-white px-5 py-3 shadow-custom rounded-10 transition duration-400 ease-in-out hover:shadow-none hover:scale-95"
            to="/login"
          >
            <div className="font-spaceGrotesk text-primary font-6 text-[14px]">
              Log In
            </div>
          </NavLink>

          <NavLink
            className="bg-secondary px-5 py-3 bg-custom-2 shadow-custom-2 rounded-10 transition duration-400 ease-in-out hover:shadow-none hover:scale-95"
            to="/register"
          >
            <div className="text-white font-spaceGrotesk font-6 text-[14px]">
              Get Started ➞
            </div>
          </NavLink>
        </div>
      )}
    </>
  );
};

const Logo = ({ userInfo }) => {
  return (
    <div className="flex items-center gap-6">
      <NavLink className="flex items-center justify-center gap-2" to="/">
        <img
          className="object-contain h-10 w-10"
          src="/icon.svg"
          alt="company icon"
        />
        <div className="text-primary font-bold text-2xl font-spaceGrotesk">
          FrugL
        </div>
      </NavLink>

      {userInfo && (
        <NavLink
          className="sm:hidden md:flex items-center justify-center px-10 py-3 transition duration-400 ease-in-out hover:shadow-none hover:scale-95"
          to="/profile"
        >
          <div className="font-carlito text-primary font-semibold text-[16px]">
            Profile
          </div>
        </NavLink>
      )}
    </div>
  );
};

// Main Navbar Component
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [logout] = useLogoutMutation()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignOut = async () => {
      try {
        await logout().unwrap()
        dispatch(clearCredentials())
        navigate('/')
      } catch (err) {
        toast(err.error)
      }
  }

  return (
    <header className="w-full h-[60px] bg-white shadow-custom-shadow relative z-10">
      <nav className="flex max-w-10xl h-full justify-between items-center mx-auto px-6 md:px-20">
        <Logo userInfo={userInfo} />

        <DesktopNavLinks
          userInfo={userInfo}
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          handleSignOut={handleSignOut}
        />

        <MenuToggleIcon menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <MobileMenu userInfo={userInfo} menuOpen={menuOpen} handleSignOut={handleSignOut} />
      </nav>
    </header>
  );
};

export default Navbar;