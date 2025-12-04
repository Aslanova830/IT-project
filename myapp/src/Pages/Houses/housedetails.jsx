import { useLocation } from "react-router-dom";

const HouseDetails = () => {
  const { state: house } = useLocation(); 

  return (
    <div className=" p-[200px] flex justify-center items-center gap-[80px]">
      <div>
        <img className="w-full h-80 object-cover rounded" src={house.image} />
      </div>
      <div>        
        <h1 className="text-3xl font-bold mt-4">{house.name}</h1>
        <p className="text-xl font-semibold mt-2">${house.price}</p>
        <p className="mt-4 text-gray-700">{house.description}</p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg">
         Buy
        </button>
      </div>
    </div>
  );
};

export default HouseDetails;
