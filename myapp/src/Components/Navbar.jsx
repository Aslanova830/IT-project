import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-5 px-[10%] bg-sky-400 flex justify-between items-center z-100">
      <Link to="/" className="text-white text-3xl font-bold">MyHome</Link>

      <nav className="flex">
        <Link to="/home" className="text-white text-lg font-medium ml-10 border-b-2 border-transparent hover:border-white transition-all">home</Link>

        <Link to="/about" className="text-white text-lg font-medium ml-10 border-b-2 border-transparent hover:border-white transition-all">about</Link>

        <Link to="/house" className="text-white text-lg font-medium ml-10 border-b-2 border-transparent hover:border-white transition-all">services</Link>

        <Link to="/contact" className="text-white text-lg font-medium ml-10 border-b-2 border-transparent hover:border-white transition-all">contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;