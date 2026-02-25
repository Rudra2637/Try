import React from "react";
import aboutImage from "../assets/doc2.jpg";

const About = () => {
  return (
    <section className="min-h-[80vh] bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Image */}
        <div className="flex justify-center">
          <img
            src={aboutImage}
            alt="Doctor team"
            className="w-full max-w-md rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Right - Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">DoctorSearch</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            We are dedicated to helping people connect with trusted
            and experienced doctors in their area. Our platform makes
            it easy to search, compare, and choose healthcare professionals
            based on your needs.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Our mission is to simplify healthcare access by providing
            reliable information and a seamless search experience —
            because your health deserves the best care.
          </p>

          <div className="flex gap-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">500+</h3>
              <p className="text-gray-500 text-sm">Verified Doctors</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600">10k+</h3>
              <p className="text-gray-500 text-sm">Happy Patients</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600">24/7</h3>
              <p className="text-gray-500 text-sm">Support</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;