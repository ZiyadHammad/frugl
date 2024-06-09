import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="rounded-lg m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="/icon.svg" className="object-contain max-h-6 max-w-6" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-primary">
              FrugL
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            FrugL™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
