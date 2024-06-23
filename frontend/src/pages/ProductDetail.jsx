import { Link, useParams, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import ProductCardInfo from "../components/ProductCardInfo";
import TrackProductModal from "../components/TrackProductModal";

const ProductDetail = () => {
  const { productId } = useParams();
  const { userProducts } = useSelector((state) => state.items);
  const product = userProducts.find((p) => p._id === productId);

  if (!product) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col gap-16">
      <h2 className="text-primary text-[32px] font-semibold text-center xl:text-start lg:border-b">
        Details
      </h2>

      <div className="flex flex-col items-center justify-between gap-10 xl:items-start xl:flex-row xl:px-20">

        <div className="hidden xl:flex p-10 border border-[#CDDBFF] rounded-[17px]">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain min-h-[400px] min-w-[350px] max-h-[500px] max-w-[350px]"
          />
        </div>

        <div className="flex-1 flex flex-col px-10 xl:px-0 xl:max-w-[400px]">
          <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
            
            <div className="flex flex-col gap-3">
              <p className="text-[22px] text-secondary font-semibold">
                {product.title}
              </p>

              <Link
                href={product.url}
                target="_blank"
                className="text-base text-black opacity-50"
              >
                Visit Link
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-[#FFF0F0] rounded-10">
                <img src="/assets/icons/red-heart.svg" alt="heart" />

                <p className="text-base font-semibold text-[#D46F77]">
                  {product.reviewsCount}
                </p>
              </div>

              <div className="p-2 bg-[#EDF0F8] rounded-10">
                <img src="/assets/icons/bookmark.svg" alt="bookmark" />
              </div>

              <div className="p-2 bg-[#EDF0F8] rounded-10">
                <img src="/assets/icons/share.svg" alt="share" />
              </div>
            </div>

          </div>

          <div className="xl:hidden mb-8 min-w-[350px] p-14 border border-[#CDDBFF] rounded-[17px] mx-auto">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[300px] max-w-[300px] lg:max-w-[600px] lg:max-h-[600px] mx-auto"
            />
        </div>

          {/* Product-Info */}
          <div className="flex items-center flex-wrap gap-10 py-6 border-y border-y-[#E4E4E4]">
            
            <div className="flex flex-col gap-2">
              <p className="text-[32px] text-secondary font-bold">
                {product.currency} {product.currentPrice}
              </p>
              <p className="text-[21px] text-black opacity-50 line-through">
                {product.currency} {product.originalPrice}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-[#FBF3EA] rounded-[27px]">
                  <img src="/assets/icons/star.svg" alt="star" />
                  <p className="text-sm text-primary-orange font-semibold">
                    {product.stars || 25}
                  </p>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 bg-white-200 rounded-[27px]">
                  <img src="/assets/icons/comment.svg" alt="comment" />
                  <p className="text-sm text-primary-orange font-semibold">
                    {product.reviewsCount} Reviews
                  </p>
                </div>
              </div>

              <p className="text0sm text-black opacity-50">
                <span className="text-primary-green font-semibold">93%</span>
                of buyers have recommended this.
              </p>
            </div>
          </div>

        


          <div className="my-7 flex flex-col"> 
            <div className="flex gap-4 flex-wrap">
              <ProductCardInfo
                title="Current Price"
                iconSrc="/assets/icons/price-tag.svg"
                value={`${product.currency} ${product.currentPrice}`}
              />
              <ProductCardInfo
                title="Average Price"
                iconSrc="/assets/icons/chart.svg"
                value={`${product.currency} ${product.averagePrice}`}
              />
              <ProductCardInfo
                title="Highest Price"
                iconSrc="/assets/icons/arrow-up.svg"
                value={`${product.currency} ${product.highestPrice}`}
              />
              <ProductCardInfo
                title="Lowest Price"
                iconSrc="/assets/icons/arrow-down.svg"
                value={`${product.currency} ${product.lowestPrice}`}
              />
            </div>
          </div>

          <TrackProductModal />
        </div>
      </div>

      <div className="flex flex-col gap-16 px-10">
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl text-secondary font-semibold">
            Product Description
          </h3>

          <div className="flex flex-col gap-4">
            {product?.description?.split("\n")}
          </div>
        </div>

        <button className="py-4 px-4 bg-secondary hover:bg-opacity-70 rounded-[30px] text-white text-lg font-semibold w-fit mx-auto flex items-center justify-center gap-3 min-w-[200px]">
          <img src="/assets/icons/bag.svg" alt="check" className="h-6 w-6" />

          <Link href="/" className="text-base text-white">
            Buy Now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
