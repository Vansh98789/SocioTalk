import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
    const response = await axios.post("http://localhost:3000/auth/signin", {
      email,
      password
    }, { withCredentials: true });
    const data=response.data;
    localStorage.setItem("id",data.id);
    alert("log in successful!");
    navigate("/dashboard")
  } catch (error: any) {
    console.error(error);
    alert("Unable to sign up, something went wrong");
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-blue-600">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 py-2.5 font-semibold text-white shadow-md transition hover:from-red-600 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <span className="cursor-pointer font-medium text-blue-600 hover:underline">

              <Link to="/signup" className="cursor-pointer font-medium text-blue-600 hover:underline">
                Sign Up
              </Link>

          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
