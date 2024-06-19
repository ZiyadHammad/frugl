import { useState } from "react";
import {
  Button,
  Dialog,
  Transition,
  DialogTitle,
  Description,
} from "@headlessui/react";

const TrackProductModal = () => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call or any async operation
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      closeModal();
    }, 2000);
  };

  return (
    <>
      <Button
        type="button"
        onClick={openModal}
        className="py-4 px-4 bg-secondary hover:bg-opacity-70 rounded-[30px] text-white text-lg font-semibold"
      >
        Track
      </Button>

      <Transition show={isOpen} >
        <Dialog onClose={closeModal} className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-60">

          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-xl">
              <div className="flex justify-between">
                <img
                  src="/assets/icons/logo.svg"
                  alt="logo"
                  className="w-5 h-5"
                />
                <img
                  src="/assets/icons/x-close.svg"
                  alt="close"
                  className="cursor-pointer h-5 w-5"
                  onClick={closeModal}
                />
              </div>

              <DialogTitle className="text-secondary text-lg leading-[24px] font-semibold mt-4">
                Stay updated with product pricing alerts directly to your email!
              </DialogTitle>

              <Description className="text-sm text-gray-600 mt-2">
                Never miss a great deal again when you sign up!
              </Description>

              <form onSubmit={handleSubmit} className="flex flex-col mt-5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="px-5 py-3 mt-3 flex items-center gap-2 border border-gray-300 rounded-[27px]">
                  <img
                    src="/assets/icons/mail.svg"
                    alt="mail"
                    className="w-5 h-5"
                  />

                  <input
                    required
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter your email address"
                    className="flex-1 pl-1 border-none text-gray-500 text-base focus:outline-none border border-gray-300 rounded-[27px] shadow-xs"
                  />
                </div>

                <Button
                  type="submit"
                  className="px-5 py-3 text-white text-base font-semibold border border-secondary bg-secondary rounded-lg mt-8"
                >
                  {isSubmitting ? "Submitting" : "Track"}
                </Button>
              </form>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default TrackProductModal;
