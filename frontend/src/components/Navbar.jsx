import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { clearCredentials } from "../slices/authSlice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSignOut = async () => {
    try {
      await logout().unwrap();
      dispatch(clearCredentials());
      navigate('/');
    } catch (err) {
      // Handle error appropriately
      console.error(err);
    }
  };

  return (
    <header className="w-full h-[60px] bg-white shadow-custom-shadow relative z-10">
      <nav className="flex max-w-10xl h-full justify-between items-center mx-auto px-6 md:px-20">
        <NavLink to="/" className="flex items-center gap-2">
          <img className="object-contain h-10 w-10" src="/icon.svg" alt="company icon" />
          <div className="text-primary font-spaceGrotesk font-bold text-2xl">FrugL</div>
        </NavLink>

        <div className="hidden md:flex items-center gap-5">
          {userInfo ? (
            <>
              <NavLink to="/profile" className="flex items-center gap-2 text-md text-gray-700 hover:bg-gray-100">
                <img src="/assets/icons/dashboard.svg" alt="Profile" className="h-5" />
                Profile
              </NavLink>
              <NavLink to="/settings" className="flex items-center gap-2 text-md text-gray-700 hover:bg-gray-100">
                <img src="/assets/icons/settings.svg" alt="Settings" className="h-5" />
                Settings
              </NavLink>
              <button onClick={handleSignOut} className="flex items-center gap-2 text-md text-gray-700 hover:bg-gray-100">
                <img src="/assets/icons/sign-out.svg" alt="Sign Out" className="h-5" />
                Sign Out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="bg-white px-5 py-3 shadow-custom rounded-10 transition duration-400 font-carlito font-semibold text-primary text-sm ease-in-out hover:shadow-none hover:scale-95">
                Log In
              </NavLink>
              <NavLink to="/register" className="bg-secondary px-5 py-3 shadow-custom-2 rounded-10 transition duration-400 font-carlito text-sm text-white font-semibold ease-in-out hover:shadow-none hover:scale-95">
                Get Started ➞
              </NavLink>
            </>
          )}
        </div>

        <div className="md:hidden">
          <img
            src={`/assets/icons/${menuOpen ? "close" : "menu"}.svg`}
            alt="menu"
            className="object-contain w-10 h-10"
            onClick={toggleMenu}
          />
        </div>

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
                    <NavLink to="/profile" className="flex items-center gap-2 text-md text-gray-700 hover:bg-gray-100">
                      <img src="/assets/icons/dashboard.svg" alt="Profile" className="h-5" />
                      Profile
                    </NavLink>
                    <NavLink to="/settings" className="flex items-center gap-2 text-md text-gray-700 hover:bg-gray-100">
                      <img src="/assets/icons/settings.svg" alt="Settings" className="h-5" />
                      Settings
                    </NavLink>
                    <button onClick={handleSignOut} className="flex items-center gap-2 text-md text-gray-700 hover:bg-gray-100">
                      <img src="/assets/icons/sign-out.svg" alt="Sign Out" className="h-5" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink to="/login" className="text-body text-xl z-11">Log In</NavLink>
                    <NavLink to="/register" className="text-body text-xl z-11">Get Started ➞</NavLink>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
