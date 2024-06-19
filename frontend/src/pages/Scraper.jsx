import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLink } from '@fortawesome/free-solid-svg-icons';

const Scraper = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Submitted URL:', url);
  };

  return (
    // <section id="My Products" className="flex flex-col items-center gap-10 px-6 py-24">
    //   <h2 className="text-primary text-[32px] font-semibold text-center lg:text-start">
    //     Scraper
    //   </h2>
    //   <div className="flex flex-col items-center w-full max-w-md">
    //     {/* <FontAwesomeIcon icon={faLink} size="3x" className="text-primary mb-4" /> */}
    //     <form onSubmit={handleSubmit} className="w-full">
    //       <div className="flex flex-col items-center gap-4 w-full">
    //         <input
    //           type="text"
    //           value={url}
    //           onChange={(e) => setUrl(e.target.value)}
    //           placeholder="Enter Amazon Product URL"
    //           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
    //         />
    //         <button
    //           type="submit"
    //           className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
    //         >
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </section>

    <section className="flex flex-col gap-10 px-6 pt-10 lg:pt-0">
      <h2 className="text-primary text-[32px] font-semibold text-center md:text-start lg:border-b">
        Scraper
      </h2>
    </section>
  );
};

export default Scraper;
