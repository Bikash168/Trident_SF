import { useState } from "react";

const worksData = [
  {
    id: 1,
    title: "Education",
    description:
      "Shikshalaya, our free learning center, has been operational for four successful years. Almost 750 students have passed out from our centers and are doing exceptionally well.",
    imageUrl: "/images/education.jpg", // Update with your actual image path
  },
  {
    id: 2,
    title: "Healthcare and Sanitation",
    description: "Description for Healthcare and Sanitation.",
    imageUrl: "/images/healthcare.jpg",
  },
  {
    id: 3,
    title: "Disaster Relief",
    description: "Description for Disaster Relief.",
    imageUrl: "/images/disaster.jpg",
  },
  // Add other categories similarly...
];

export default function WorksSection() {
  const [activeWork, setActiveWork] = useState(worksData[0]);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-8">
        Our <span className="text-green-500">Works</span>
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Our NGO is dedicated to empowering communities through education,
        healthcare, and sustainable initiatives. Join us in creating
        meaningful change worldwide.
      </p>
      <div className="flex flex-col md:flex-row">
        {/* Left Side: Menu */}
        <div className="md:w-1/3">
          <ul>
            {worksData.map((work) => (
              <li key={work.id} className="mb-4">
                <button
                  onClick={() => setActiveWork(work)}
                  className={`text-lg font-semibold ${
                    activeWork.id === work.id
                      ? "text-green-500"
                      : "text-gray-800"
                  } hover:text-green-500`}
                >
                  {work.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Content */}
        <div className="md:w-2/3">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src={activeWork.imageUrl}
              alt={activeWork.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 bg-white">
              <h3 className="text-2xl font-bold mb-2">{activeWork.title}</h3>
              <p className="text-gray-700 mb-4">{activeWork.description}</p>
              <button className="bg-green-500 hover:bg-blue-400 text-white py-2 px-4 rounded-md">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
