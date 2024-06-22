import { useState } from "react";
import { toast } from "react-toastify";
import { useValidateUserPasswordMutation } from "../slices/usersApiSlice";

const Authenticate = ({ currentPassword, setIsPasswordConfirmed }) => {
  const [validateUserPassword] = useValidateUserPasswordMutation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!currentPassword) {
      toast('Please input your password')
      return
    }

    try {
      const response = await validateUserPassword({ currentPassword }).unwrap();
      console.log(response);
      setIsPasswordConfirmed(true)
      toast("Authenticated! You can now update your password.");
    } catch (error) {
      toast("An error occurred. Please try again.");
      console.log(error.message)
      setIsPasswordConfirmed(false);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <button
      onClick={handleSubmit}
      type="button"
      className="w-[150px] mx-auto font-spaceGrotesk flex justify-center py-2 px-4 border-2 rounded-lg shadow-sm text-sm font-medium text-primary transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
    >
      { isSubmitting ? 'Authenticating...' : 'Authenticate'}
    </button>
  );
};

export default Authenticate;
