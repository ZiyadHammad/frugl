import { useState } from "react";
import Modal from "./Modal";

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
      <div className="hidden lg:flex flex-wrap gap-4 mt-20 md:mt-12">
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
      <Modal
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
        title="It's that Easy!"
        description="Log In or Sign Up to Get Started!"
        btnText='Got it!'
      />
    </>
  );
};

export default SearchBar;
