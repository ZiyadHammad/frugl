import { NavLink } from "react-router-dom";

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
  {
    name: "Sign Out",
    path: "/",
    src: "/assets/icons/sign-out.svg",
  },
];

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col h-screen bg-theme text-primary w-64">

      <div className="flex items-center gap-2 justify-start p-8">
        <img src="/icon.svg" alt="logo" className="h-10 w-10" />
        <div className="text-primary font-spaceGrotesk font-bold text-3xl">
          FrugL
        </div>
      </div>

      <nav className="mt-10 flex flex-col">
        {links.map((l) => (
          <NavLink
            to={l.path}
            key={l.name}
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-4 py-2 bg-blue-900 text-white transition duration-400"
                : "flex items-center px-4 py-2 hover:bg-gray-700 transition duration-400"
            }
          >
            <img src={l.src} alt={l.name} className={`h-5 w-5 mr-3`} />
            {l.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
