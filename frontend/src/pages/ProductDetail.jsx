import { Link, useParams, useOutletContext } from "react-router-dom";
import Loader from "../components/Loader";
import ProductCardInfo from "../components/ProductCardInfo";
import Modal from "../components/Modal";

const ProductDetail = () => {

  return ( <h1>details</h1>
    // <div className="flex flex-col gap-16 flex-wrap px-6 md:px-20 py-24">
    //   <h1>Details</h1>

    //   {product ? (
    //     <div className="flex gap-28 xl:flex-row flex-col">
    //       <div className="flex-grow xl:max-w-[50%] max-w-full py-16 border border-[#CDDBFF] rounded-[17px]">
    //         <img src={product.image} alt={product.title} className="" />
    //       </div>

    //       <div className="flex-1 flex flex-col">
    //         <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
    //           <div className="flex flex-col gap-3">
    //             <p className="text-[28px] text-secondary font-semibold">
    //               {product.title}
    //             </p>

    //             <Link
    //               href={product.url}
    //               target="_blank"
    //               className="text-base text-black opacity-50"
    //             >
    //               Visit Link
    //             </Link>
    //           </div>

    //           <div className="flex items-center gap-3">
    //             <div className="product-hearts">
    //               <img src="/assets/icons/red-heart.svg" alt="heart" />

    //               <p className="text-base font-semibold text-[#D46F77]">
    //                 {product.reviewsCount}
    //               </p>
    //             </div>

    //             <div className="p-2 bg-white-200 rounded-10">
    //               <img src="/assets/icons/bookmark.svg" alt="bookmark" />
    //             </div>

    //             <div className="p-2 bg-white-200 rounded-10">
    //               <img src="/assets/icons/share.svg" alt="share" />
    //             </div>
    //           </div>
    //         </div>

    //         {/* Product-Info */}
    //         <div className="product-info">
    //           <div className="flex flex-col gap-2">
    //             <p className="text-[34px] text-secondary font-bold">
    //               {product.currency} {product.currentPrice}
    //             </p>
    //             <p className="text-[21px] text-black opacity-50 line-through">
    //               {product.currency} {product.originalPrice}
    //             </p>
    //           </div>

    //           <div className="flex flex-col gap-4">
    //             <div className="flex gap-3">
    //               <div className="product-stars">
    //                 <img
    //                   src="/assets/icons/star.svg"
    //                   alt="star"
    //                   width={16}
    //                   height={16}
    //                 />
    //                 <p className="text-sm text-primary-orange font-semibold">
    //                   {product.stars || 25}
    //                 </p>
    //               </div>

    //               <div className="product-reviews">
    //                 <img
    //                   src="/assets/icons/comment.svg"
    //                   alt="comment"
    //                   width={16}
    //                   height={16}
    //                 />
    //                 <p className="text-sm text-primary-orange font-semibold">
    //                   {product.reviewsCount} Reviews
    //                 </p>
    //               </div>
    //             </div>

    //             <p className="text0sm text-black opacity-50">
    //               <span className="text-primary-green font-semibold">93%</span>
    //               of buyers have recommended this.
    //             </p>
    //           </div>
    //         </div>

    //         <div className="my-7 flex flex-col gap-5">
    //           <div className="flex gap-5 flex-wrap">
    //             <ProductCardInfo
    //               title="Current Price"
    //               iconSrc="/assets/icons/price-tag.svg"
    //               value={`${product.currency} ${product.currentPrice}`}
    //             />
    //             <ProductCardInfo
    //               title="Average Price"
    //               iconSrc="/assets/icons/chart.svg"
    //               value={`${product.currency} ${product.averagePrice}`}
    //             />
    //             <ProductCardInfo
    //               title="Highest Price"
    //               iconSrc="/assets/icons/arrow-up.svg"
    //               value={`${product.currency} ${product.highestPrice}`}
    //             />
    //             <ProductCardInfo
    //               title="Lowest Price"
    //               iconSrc="/assets/icons/arrow-down.svg"
    //               value={`${product.currency} ${product.lowestPrice}`}
    //             />
    //           </div>
    //         </div>

    //         <Modal />
    //       </div>
    //     </div>
    //   ) : (
    //     <Loader />
    //   )}
    // </div>
  );
};

export default ProductDetail;
