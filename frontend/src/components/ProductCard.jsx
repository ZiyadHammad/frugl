import {Link} from 'react-router-dom'

const ProductCard = ({item}) => {
  return (
    <Link href={`/products/${item._id}`} className="max-w-[200px] flex-1 flex flex-col gap-4 rounded-md">
      <div className="flex-1 relative flex flex-col gap-5 p-4 rounded-md">
      <img src={item.image} alt={item.title} className="max-h-[250px] object-contain w-full h-full bg-transparent" />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-primary text-xl leading-6 font-semibold truncate">{item.title}</h3>

        <div className="flex justify-between">
          <p className="text-body opacity-50 text-lg capitalize">
            {item.category}
          </p>
          <p className="text-primary text-lg font-semibold">
            <span>{item?.currency} </span>
            <span>{item?.currentPrice}</span>
          </p>
        </div>
      </div>

    </Link>
  );
};

export default ProductCard;