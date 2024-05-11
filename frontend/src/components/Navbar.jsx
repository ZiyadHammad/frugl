import {useState} from "react";
import { NavLink } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return <>
        <div className="md:hidden">
            <img
              src={
                !menuOpen ? "/assets/icons/menu.svg" : "/assets/icons/close.svg"
              }
              alt="menu"
              className="object-contain w-10 h-10"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

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
                  <NavLink to="/login" className="text-body text-xl z-11">
                    Log In
                  </NavLink>
                  <NavLink to="/register" className="text-body text-xl z-11">
                    Get Started ➞
                  </NavLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
  </>
}

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="flex justify-between items-center px-6 py-8 md:px-20">
        <NavLink className="flex items-center gap-2" to="/">
          <img className="object-contain h-10 w-10" src="/icon.svg" alt="company icon" />
          <div className="text-primary font-bold text-[21px] font-spaceGrotesk">FrugL</div>
        </NavLink>

        <div className=" sm:hidden md:flex items-center gap-5">
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

          <MobileMenu />

      </nav>
    </header>
  );
};

export default Navbar;