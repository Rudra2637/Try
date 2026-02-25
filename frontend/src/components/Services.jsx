import React from "react";

const Services = () => {
  const services = [
    {
      title: "Doctor Search",
      description:
        "Easily search and filter verified doctors by location and specialization.",
      icon: "🔎",
    },
    {
      title: "Verified Specialists",
      description:
        "Access a curated list of experienced and trusted healthcare professionals.",
      icon: "👨‍⚕️",
    },
    {
      title: "24/7 Support",
      description:
        "Our team is always available to help you with your healthcare needs.",
      icon: "📞",
    },
    {
      title: "Quick Appointments",
      description:
        "Connect and book appointments seamlessly with your preferred doctor.",
      icon: "📅",
    },
  ];

  return (
    <section className="min-h-[80vh] bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide a range of healthcare services designed to make
            finding and connecting with doctors simple and efficient.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-500 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;