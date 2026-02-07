import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios";
const SignUp = () => {
  const navigate=useNavigate();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:3000/auth/signup", {
      username:userName,
      email,
      password
    }, { withCredentials: true });
    alert("Sign up successful!");
    navigate("/login");
  } catch (error: any) {
    console.error(error);
    alert("Unable to sign up, something went wrong");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-blue-600">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              User Name
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="abc123"
            />
          </div>
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
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span className="cursor-pointer font-medium text-blue-600 hover:underline">
            <Link to="/login" className="cursor-pointer font-medium text-blue-600 hover:underline">
              Login
            </Link>

          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
