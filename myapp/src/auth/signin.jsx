import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-slate-700 border border-slate-500 rounded-md p-8 w-80">
        <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
        <form onSubmit={(e) => { e.preventDefault(); navigate('/house'); }}>
          <div className="relative my-4">
            <input
              id="email"
              type="email"
              placeholder=" "
              className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none peer"
            />
            <label htmlFor="email" className="absolute text-sm text-white top-3 left-0 peer-placeholder-shown:top-2 peer-focus:top-0">Email</label>
          </div>

          <div className="relative my-4">
            <input
              id="password"
              type="password"
              placeholder=" "
              className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none peer"
            />
            <label htmlFor="password" className="absolute text-sm text-white top-3 left-0 peer-placeholder-shown:top-2 peer-focus:top-0">Password</label>
          </div>

          <button type="submit" className="w-full mt-6 py-2 bg-white text-emerald-800 rounded-full hover:bg-emerald-600 hover:text-white">
            Login
          </button>

          <div className="text-white mt-4 text-center">
            New here? <Link to="/" className="text-blue-400">Create an Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
