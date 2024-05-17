import { Outlet } from "react-router-dom";


import Navbar from "../components/Navbar";
// import Loader from "../components/Loader";

const Layout = () => {
  // const navigate = useNavigate();
  // const [user, setUser] = useState({
  //   auth: false,
  // });
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const checkLoggedInUser = async () => {
  //     try {
  //       const response = await getUser();
  //       setUser(response);
  //     } catch (error) {
  //       console.log("User is not logged in");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   checkLoggedInUser();
  // }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <div className="w-full min-h-screen bg-theme">
      <div className="container max-w-10xl">
        {/* <Navbar /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
