import { Dialog, Transition,TransitionChild, DialogPanel, DialogTitle } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDeleteProductMutation } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteProductById } from "../slices/productSlice";
import { useDispatch } from "react-redux";

const DeleteProductModal = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
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
        className="p-2 h-10 w-10 bg-[#FFF0F0] rounded-10 cursor-pointer flex items-center justify-center"
      >
        <img src="/assets/icons/trash.svg" alt="Delete" />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-60">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="bg-white rounded-2xl p-6 text-center shadow-xl transform transition-all max-w-md w-full">
                <DialogTitle
                  as="h3"
                  className="text-lg font-semibold text-gray-900"
                >
                  Are you sure you want to delete this product?
                </DialogTitle>

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={handleDeleteProduct}
                    className="bg-red-500 text-white rounded-lg px-4 py-2 font-semibold hover:bg-red-600 transition duration-200"
                  >
                    Yes, delete product
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-200 text-gray-700 rounded-lg px-4 py-2 font-semibold hover:bg-gray-300 transition duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DeleteProductModal;
