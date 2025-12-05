import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='bg-sky-400 w-full flex justify-between'>

      <div className="flex flex-col ml-10 mt-10 mb-5">
        <Link className="text-xl text-white font-medium" to='/home'>Home</Link>
        <br />
        <Link className="text-xl text-white font-medium" to='/about'>About</Link>
        <br />
        <Link className="text-xl text-white font-medium" to='/house'>Services</Link>
        <br />
        <Link className="text-xl text-white font-medium" to='/contact'>Contacts</Link>
      </div>  

      <div className="mr-[150px] mt-[60px]">
        <h1 className="text-2xl text-white font-medium">Contact with us:</h1>
        <button className="text-xl bg-black text-white p-5 font-semibold rounded-2xl"><Link to='/contact'>Contact</Link></button>
      </div>

    </div>
  )
}

export default Footer