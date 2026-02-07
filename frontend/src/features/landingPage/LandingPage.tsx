import {  useNavigate } from "react-router-dom";
import front from "../../assets/front.jpg"
const LandingPage = () => {
const navigate=useNavigate();

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
      <div
        className="hidden md:block bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${front})`,
        }}
      ></div>

      <div className="flex flex-col justify-center px-8 md:px-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600">
          Sociotalk
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          A social media platform designed for meaningful conversations.
          Connect with people, share your voice, and grow your community.
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate("/login")}
          className="rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 px-6 py-3 font-semibold text-white shadow-md transition hover:scale-105">
            Log In
          </button>

          <button 
          onClick={()=>{navigate("/signup")}}
          className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
