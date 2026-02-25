import { useState } from "react";

const Search = () => {
  const [location, setLocation] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!location || !specialist) return;

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/doctors/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            location,
            specialist,
          }),
        }
      );

      const data = await response.json();
      setFilteredDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[80vh] bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Find a Doctor
        </h1>

        {/* Search Box */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row gap-4 mb-12">
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter Specialist"
            value={specialist}
            onChange={(e) => setSpecialist(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-blue-600 font-medium">
            Searching doctors...
          </p>
        )}

        {/* Results */}
        <div className="grid md:grid-cols-2 gap-6">
          {!loading && filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {doctor.name}
                </h2>
                <p className="text-blue-600 font-medium mt-1">
                  {doctor.specialist}
                </p>
                <p className="text-gray-500 mt-2">
                  📍 {doctor.location}
                </p>
              </div>
            ))
          ) : (
            !loading && (
              <p className="text-center text-gray-500 col-span-full">
                No doctors found.
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;