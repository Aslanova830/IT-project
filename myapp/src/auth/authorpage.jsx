import { useAuth } from "./authcontext.jsx";

export default function AuthorPage() {
  const { user, logoutUser } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user?.name} (Author)</h1>
      <p>This is the special author page.</p>
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        onClick={logoutUser}
      >
        Logout
      </button>
    </div>
  );
}
