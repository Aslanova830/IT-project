import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="pt-[70px]">
      <h1 className="text-center font-bold text-7xl p-[40px]">About US</h1>
      <p className="text-center text-3xl font-semibold p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa
        distinctio perferendis expedita sequi voluptate impedit asperiores id
        eius vel, accusantium maiores in ullam? Excepturi eveniet expedita
        officia porro corporis.
      </p>
      <p className="text-center text-3xl font-semibold ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa
        distinctio perferendis expedita sequi voluptate impedit asperiores id
        eius vel, accusantium maiores in ullam? Excepturi eveniet expedita
        officia porro corporis.
      </p>
      <p className="font-bold text-center text-red-600 text-4xl p-[30px]">
        ORDER RIGHT NOW
      </p>

      <div className="flex justify-center items-center pb-[30px]">
        <button className="bg-blue-400 text-white font-medium rounded-xl p-4">
          <Link to="/house">ORDER</Link>
        </button>
      </div>

      <h1 className="text-center font-semibold text-5xl pt-[30px]">
        Our Organizers:
      </h1>

      <div className="flex justify-center items-center">
        <div className="m-[30px] border-[1px] border-gray-300 p-[20px] rounded-xl">
          <i className="fa-solid fa-user text-3xl ml-[40px]"></i>
          <h3 className="font-semibold text-3xl">Ilham Sh</h3>
          <p className="font-medium text-xl ml-[20px]">Founder</p>
        </div>

        <div className="m-[30px] border-[1px] border-gray-300 p-[20px] rounded-xl">
          <i className="fa-solid fa-user text-3xl ml-[30px]"></i>
          <h3 className="font-semibold text-3xl">Lale A.</h3>
          <p className="font-medium text-xl ml-[10px]">Founder</p>
        </div>

        <div className="m-[30px] border-[1px] border-gray-300 p-[20px] rounded-xl">
          <i className="fa-solid fa-user text-3xl ml-[50px]"></i>
          <h3 className="font-semibold text-3xl ml-[10px]">Ayxan A.</h3>
          <p className="font-medium text-xl ml-[10px]">SMM worker</p>
        </div>

        <div className="m-[30px] border-[1px] border-gray-300 p-[20px] rounded-xl">
          <i className="fa-solid fa-user text-3xl ml-[30px]"></i>
          <h3 className="font-semibold text-3xl ml-[5px]">Indji A.</h3>
          <p className="font-medium text-xl ml-[10px] ">Assistant</p>
        </div>
      </div>
    </div>
  );
}

export default About