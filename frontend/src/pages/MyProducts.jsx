import { useSelector } from "react-redux";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import ProductCard from "../components/ProductCard";

const MyProducts = () => {
  const { userProducts } = useSelector((state) => state.items);


  // const categories = [
  //   {
  //     name: 'All Products',
  //     products: userProducts
  //   },
  //   {
  //     name: 'Price Alerts',
  //     products: userProducts    // add priceAlert Field to productSchema
  //   }
  // ]

  // console.log(categories)

  return (
    <section className="flex flex-col gap-10 px-6 pt-10 lg:pt-0">
      <h2 className="text-primary text-[32px] font-semibold text-center md:text-start lg:border-b">
        My Products
      </h2>

      {/* <TabGroup>
        <TabList>
          {categories.map(({ name, products }) => (
            <TabPanel key={name} >
              <ul>
                {products.map(p => (
                  
                ))}
              </ul>
              </TabPanel>
            ))}
        </TabList>

      </TabGroup> */}

      <div className="flex flex-wrap gap-x-8 gap-y-16 justify-center md:justify-start">
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
