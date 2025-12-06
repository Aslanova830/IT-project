import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full px-[10%] py-5 bg-sky-400 flex justify-between items-center z-100">
      <Link to="/home" className="text-[32px] font-bold text-white">MyHome</Link>

      <nav className=" text-[18px] text-white font-medium ml-10 flex gap-4 ">
        <Link to="/home" className=" border-b-2 border-transparent hover:border-white transition-all">home</Link>

        <Link to="/about" className=" border-b-2 border-transparent hover:border-white transition-all">about</Link>

        <Link to="/house" className="  border-b-2 border-transparent hover:border-white transition-all">services</Link>

        <Link to="/contact" className="  border-b-2 border-transparent hover:border-white transition-all">contact</Link>
     
        
      </nav>
    </header>
  );
};

export default Navbar;