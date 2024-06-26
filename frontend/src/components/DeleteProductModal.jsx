import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { useDeleteProductMutation } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteProductById } from "../slices/productSlice";
import { useDispatch } from "react-redux";

const DeleteProductModal = () => {
  const { productId } = useParams();
  const dispatch = useDispatch ()
  const navigate = useNavigate();
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const [isOpen, setIsOpen] = useState(false);
  
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleDeleteProduct = async () => {
    try {
      const response = await deleteProduct(productId);
      console.log(response);
      dispatch(deleteProductById(productId));
      closeModal();
      toast("Product Deleted Successfully");
      navigate("/products");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div
        onClick={openModal}
        className=" p-2 h-10 w-10 bg-[#FFF0F0] rounded-10"
      >
        <img src="/assets/icons/trash.svg" alt="share" />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild>
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
                    Delete this product?
                  </DialogTitle>

                  <div className="mt-4">
                    <button onClick={handleDeleteProduct} type="button">
                      Yes, delete product
                    </button>

                    <button
                      type="button"
                      className=" mr-1 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-primary hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
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

export default DeleteProductModal;
