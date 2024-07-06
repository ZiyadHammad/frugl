import { useState } from "react";
import {
  Button,
  Dialog,
  Transition,
  DialogTitle,
  Description,
} from "@headlessui/react";

const TrackProductModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTracked, setIsTracked] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleToggleTrack = async () => {
    setIsSubmitting(true);

    // Simulate API call or any async operation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsTracked(!isTracked); // Toggle tracking status
      closeModal();
    }, 2000);
  };

  return (
    <>
      <Button
        type="button"
        onClick={openModal}
        className={`py-4 px-4 w-60 ${isTracked ? "bg-green-500" : "bg-secondary"} hover:bg-opacity-70 rounded-[30px] text-white text-lg font-semibold`}
      >
        {isTracked ? "Price Alerts Enabled" : "Add to Price Alerts"}
      </Button>

      <Transition show={isOpen}>
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
                {isTracked ? "Disable Price Tracking" : "Confirm Price Tracking"}
              </DialogTitle>

              <Description className="text-sm text-gray-600 mt-2">
                {isTracked ? "Do you want to disable price alerts for this product?" : "Do you want to enable price alerts for this product?"}
              </Description>

              <div className="flex justify-end mt-8">
                <Button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-3 text-gray-700 font-semibold border border-gray-300 rounded-lg mr-4"
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  onClick={handleToggleTrack}
                  className="px-5 py-3 text-white text-base font-semibold border border-secondary bg-secondary rounded-lg"
                >
                  {isSubmitting ? "Submitting" : isTracked ? "Disable" : "Confirm"}
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default TrackProductModal;
