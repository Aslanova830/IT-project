
import Homedetails from '../../data/housesdetails';
const ProductCards = () => {
  return (
    <div className="w-full min-h-screen justify-center items-center p-10 bg-sky-100 grid grid-cols-3 grid-rows-3 gap-4">
      {Homedetails.map((house) => (
    <div className="w-[380px] overflow-hidden min-h-[450px] py-2 bg-white shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] rounded-lg">
      <img src={house.image} alt="" className='w-full h-[235px] object-cover' />
      
      <div className='mt-2.5 px-4'>
        <h2 className='text-[20px] font-bold text-black mb-2'>{house.name}</h2>
        <p className='text-[20px] font-bold text-black mb-2'>
          {house.price} <span className='line-through ml-2 text-gray-500'>99$</span>
        </p>
        <p className='text-sm text-gray-700 mb-4'>
          {house.description}
        </p>
        <div className='gap-5 flex'> 
        <button className="mt-4 px-8 py-3 border border-[#007bff] rounded-[40px] font-bold cursor-pointer transition duration-300 bg-transparent ">
          Buy Now
        </button>
        <button className="mt-4 px-8 py-3 border border-[#007bff] rounded-[40px] font-bold cursor-pointer transition duration-300 bg-transparent">
          Learn More
        </button>
        </div>
      </div>
    </div>
    ))}
    </div>
  )
}

export default ProductCards;
