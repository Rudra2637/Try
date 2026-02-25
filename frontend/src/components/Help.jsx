import React from 'react';

const Help = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-white flex items-center justify-center px-6 py-12">
      
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12">
        
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6">
          Need Help?
        </h1>

        <p className="text-gray-600 text-center mb-8">
          We're here to assist you with finding the right doctors,
          booking appointments, or resolving any issues.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Contact Support
          </h2>

          <p className="text-gray-600 mb-4">
            If you need help, please reach out to our support team.
          </p>

          <a
            href="mailto:help@doctors.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
          >
            help@doctors.com
          </a>
        </div>

        <div className="mt-8 text-sm text-gray-500 text-center">
          Our team typically responds within 24 hours.
        </div>

      </div>
    </div>
  );
};

export default Help;