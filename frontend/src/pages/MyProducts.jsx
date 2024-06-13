import { useOutletContext } from "react-router-dom"
import ProductCard from '../components/ProductCard'

const MyProducts = () => {
  const [userItems, setUserItems] = useOutletContext()
  console.log(userItems)
  
  return (
    <section id='My Products' className="flex flex-col gap-10 px-6">
        <h2  className=" text-primary  text-[32px] font-semibold text-center lg:text-start">My Products</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16 justify-center md:justify-start">

          {userItems.map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </div>
      </section> 
  )
}

export default MyProducts