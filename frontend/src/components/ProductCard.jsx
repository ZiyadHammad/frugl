import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/dashboard/products/${product._id}`}
      className="max-w-[200px] flex-1 flex flex-col gap-4 rounded-md"
    >
      <div className="flex-1 relative flex flex-col gap-5 p-4 rounded-md">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-[250px] object-contain w-full h-full bg-transparent"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-primary text-xl leading-6 font-semibold truncate">
          {product.title}
        </h3>

        <div className="flex justify-between">
          <p className="text-body opacity-50 text-lg capitalize">
            {product.category}
          </p>
          <p className="text-primary text-lg font-semibold">
            <span>{product?.currency} </span>
            <span>{product?.currentPrice}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
