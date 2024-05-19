import { Fragment } from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
  Input,
} from "@headlessui/react";
import clsx from "clsx";

const Modal = ({
  isOpen,
  openModal,
  closeModal,
  title,
  description,
  btnText,
  inputValue,
  setInputValue,
  isDeleteTyped,
  handleDeleteUser,
}) => {
  return (
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
                  {title}
                </DialogTitle>
                <div className="mt-2 flex items-center gap-4">
                  <p className="text-sm text-gray-500">{description}</p>
                  <Input
                    name="delete"
                    type="text"
                    placeholder="delete"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className={clsx(
                      "border-2 border-gray-300 h-[40px] bg-gray-50 rounded-lg py-1.5 px-3 text-sm/6 placeholder-gray-500",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-blue-300"
                    )}
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className={`mr-1 inline-flex justify-center rounded-md border border-transparent ${
                      isDeleteTyped
                        ? "bg-red-500"
                        : "bg-red-100 cursor-not-allowed"
                    } px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                    onClick={handleDeleteUser}
                  >
                    {btnText[0]}
                  </button>

                  <button
                    type="button"
                    className=" mr-1 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-primary hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    {btnText[1]}
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
