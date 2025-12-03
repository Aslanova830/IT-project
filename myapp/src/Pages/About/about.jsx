import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="pt-[70px]">
      <h1 className="text-center font-bold text-7xl p-[40px]">About US</h1>
      <p className="text-center text-3xl font-semibold p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa distinctio perferendis expedita sequi voluptate impedit asperiores id eius vel, accusantium maiores in ullam? Excepturi eveniet expedita officia porro corporis.</p>
      <p className="text-center text-3xl font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa distinctio perferendis expedita sequi voluptate impedit asperiores id eius vel, accusantium maiores in ullam? Excepturi eveniet expedita officia porro corporis.</p>
      <p className="font-bold text-center text-red-600 text-4xl p-[30px]">ORDER RIGHT NOW</p>
      <button className="text-center"><Link to='/house'>ORDER</Link></button>
    
      <p>By IT INNOVATIONS</p> 

    </div>
  )
}

export default About