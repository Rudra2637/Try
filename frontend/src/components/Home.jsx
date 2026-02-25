import React from "react";
import { Link } from "react-router-dom";
import doctorImage from "../assets/doc1.jpg";

const Home = () => {
  return (
    <section className="bg-linear-to-br from-blue-50 to-white min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Find the Right Doctor
            <span className="block text-blue-600 mt-2">
              Near You
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Search and connect with trusted doctors easily.
            Your health and comfort are our priority.
          </p>

          <Link to="/search">
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white text-lg rounded-xl shadow-lg hover:bg-blue-700 transition duration-300">
              Search Doctors
            </button>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <img
            src={doctorImage}
            alt="Doctor"
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;