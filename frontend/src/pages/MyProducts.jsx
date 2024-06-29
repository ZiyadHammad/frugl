import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetProductsMutation } from "../slices/productsApiSlice";
import { setProducts } from "../slices/productSlice";

import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

const MyProducts = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { userProducts } = useSelector((state) => state.products);
  const [getProducts, { isLoading }] = useGetProductsMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async (userId) => {
      const response = await getProducts(userId).unwrap();
      dispatch(setProducts(response));
    };
    fetchProducts(userInfo.id);
  }, [getProducts, dispatch, userInfo._id]);

  if (isLoading || !userProducts) {
    return <Loader />;
  }

  return (
    <section className="bg-theme h-full w-full p-10">

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
