import { useState, Fragment } from "react";
import { Dialog, Transition, TransitionChild, DialogPanel, DialogTitle } from "@headlessui/react";
import {NavLink} from "react-router-dom";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex flex-wrap gap-4 mt-12">
        <input
          id="url-input"
          name="url-input"
          className="flex-1 min-w-[200px] w-full p-3 rounded-lg 
      shadow-xs border border-gray-300 text-base text-gray-500 focus:outline-none"
          type="url"
          placeholder="Paste Amazon Product Url.."
        />
        <button
          onClick={openModal}
          type="button"
          className="bg-gray-900 border border-gray-900 rounded-lg
        shadow-xs px-5 py-3 text-white text-base font-semibold hover:opacity-90
        disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40"
        >
          Go!
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    It's That Easy!
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Sign up for an account and start saving!
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className=" mr-1 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                    <NavLink
                      href="/register"
                      className="ml-1 inline-flex justify-center rounded-md border border-transparent bg-secondary-400 text-white px-4 py-2 text-sm font-normal hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Get Started!
                    </NavLink>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
      
    </>
  );
};

export default SearchBar;