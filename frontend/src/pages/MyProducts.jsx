import { useOutletContext } from "react-router-dom"
import { useGetItemsMutation } from '../slices/itemsApiSlice'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'
import { useEffect, useState } from "react"

const MyProducts = () => {
  const [userInfo] = useOutletContext()
  const [getItems, {isLoading}] = useGetItemsMutation()
  const [products, setProducts] = useState([])

  if (isLoading) {
    return <Loader />
  }
  
  return (
    <section id='My Products' className="flex flex-col gap-10 px-6">
      <h2 className="text-primary text-[32px] font-semibold text-center lg:text-start">My Products</h2>

      <div className="flex flex-wrap gap-x-8 gap-y-16 justify-center md:justify-start">
        {/* {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )} */}
      </div>
    </section> 
  );
}

export default MyProducts