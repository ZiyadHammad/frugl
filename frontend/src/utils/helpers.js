import { useDispatch } from "react-redux";
import { clearCredentials } from "../slices/authSlice";
import { clearProducts } from "../slices/productSlice";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { useNavigate } from "react-router-dom";

const useSignOut = () => {
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout().unwrap();
      navigate('/');
      dispatch(clearCredentials());
    } catch (err) {
      console.error(err);
    }
  };

  return { handleSignOut };
};

export default useSignOut;