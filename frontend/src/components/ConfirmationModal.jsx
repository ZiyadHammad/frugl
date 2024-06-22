import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import { useValidateUserPasswordMutation } from "../slices/usersApiSlice";

const ConfirmationModal = ({ setIsPasswordConfirmed }) => {
  const [validateUserPassword] = useValidateUserPasswordMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await validateUserPassword({currentPassword}).unwrap();
      console.log(response)
      setIsPasswordConfirmed(true)
      closeModal()
    } catch (error) {
      toast("An error occurred. Please try again.");
      setIsPasswordConfirmed(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="font-spaceGrotesk flex justify-center py-2 px-4 border-2 rounded-lg shadow-sm text-sm font-medium text-primary transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
      >
        Authenticate
      </button>

      <Transition show={isOpen}>
        <Dialog onClose={closeModal} className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-60">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-xl">
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold text-primary">Confirm Password</h3>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Close</span>
                  &#10005;
                </button>
              </div>
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                    Current Password
                  </label>
                  <input
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    required
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary block w-full sm:text-sm"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                  >
                    {isSubmitting ? "Authenticating..." : "Confirm"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ConfirmationModal;