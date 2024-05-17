import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useOutletContext } from "react-router-dom";

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
const MobileMenu = ({ menuOpen, user, handleSignOut }) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          className="md:hidden absolute top-24 right-0 w-full h-full bg-theme shadow-lg z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col pl-8 pt-8 gap-2">
            {user.auth ? (
              <>
                <NavLink
                  to="/dashboard"
                  className="flex items-center gap-2  text-md text-gray-700 hover:bg-gray-100"
                >
                  <img
                    src="/assets/icons/dashboard.svg"
                    alt="dashboard"
                    className="h-5"
                  />
                  <p>Dashboard</p>
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
const DesktopNavLinks = ({ user, toggleMenu, menuOpen, handleSignOut }) => {
  return (
    <>
      {user.auth ? (
        <div className=" sm:hidden md:block relative">
          <img
            src={user.avatar || "/assets/icons/user.svg"}
            alt="User Avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={toggleMenu}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-4 py-4  w-48 bg-white rounded-md shadow-lg z-20 flex flex-col ">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={user.avatar || "/assets/icons/user.svg"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-center pt-4 gap-1">
                  <p className="text-sm text-gray-700">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              <div className="border-t border-black-100"></div>

              <div className="py-1 flex flex-col items-start justify-start gap-2 pt-4 px-4">
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
                  <button onClick={handleSignOut}>Sign Out</button>
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

const Logo = ({ user }) => {
  return (
    <div className="flex items-center gap-6">
      <NavLink className="flex items-center justify-center gap-2" to="/">
        <img
          className="object-contain h-10 w-10"
          src="/icon.svg"
          alt="company icon"
        />
        <div className="text-primary font-bold text-3xl font-spaceGrotesk">
          FrugL
        </div>
      </NavLink>

      {user.auth && (
        <NavLink
          className="sm:hidden md:flex px-5 py-3 transition duration-400 ease-in-out hover:shadow-none hover:scale-95"
          to="/dashboard"
        >
          <div className="font-spaceGrotesk text-primary font-semibold text-[14px]">
            Dashboard
          </div>
        </NavLink>
      )}
    </div>
  );
};

// Main Navbar Component
const Navbar = ({user, handleSignOut}) => {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full">
      <nav className="flex justify-between items-center px-6 py-8 md:px-20">
        <Logo user={user} />

        <DesktopNavLinks
          user={user}
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          handleSignOut={handleSignOut}
        />

        <MenuToggleIcon menuOpen={menuOpen} toggleMenu={toggleMenu} />

        <MobileMenu
          user={user}
          menuOpen={menuOpen}
          handleSignOut={handleSignOut}
        />
      </nav>
    </header>
  );
};

export default Navbar;
