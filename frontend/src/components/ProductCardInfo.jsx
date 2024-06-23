const ProductCardInfo = ({iconSrc, title, value}) => {
  return (
    <div className='flex-1 min-w-[150px] flex flex-col gap-2 border-l-[3px] rounded-10 bg-[#EDF0F8] px-5 py-4'>
      <p className="text-base text-[#3D4258]">{title}</p>

      <div className="flex gap-1">
        <img src={iconSrc} alt={title} />
      </div>

      <p className="text-2xl font-bold text-secondary">{value}</p>
    </div>
  )
}

export default ProductCardInfo