import { useSelector } from "react-redux";

import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

const MyProducts = () => {
  const { userProducts } = useSelector((state) => state.products);


  if (!userProducts) {
    return <Loader />;
  }

  return (
    <section className="bg-theme min-h-screen w-full p-10">

      <h2 className="text-primary text-[32px] font-semibold text-center md:text-start lg:border-b">
        My Products
      </h2>

      <div className="flex flex-wrap gap-x-8 gap-y-16 justify-center md:justify-start pt-10">
        {userProducts.length ? (
          userProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

    </section>
  );
};

export default MyProducts;
