import { useState } from "react";

const worksData = [
  {
    id: 1,
    title: "Education",
    description:
      "SACRED Foundation’s education initiatives bring quality learning and skill-building opportunities to underserved communities. By providing academic support, vocational training, and essential life skills, we empower young people to overcome challenges and reach their full potential, fostering future leaders and changemakers within their communities.",
    imageUrl: "/images/education.png", // Update with your actual image path
  },
  {
    id: 2,
    title: "Healthcare and Sanitation",
    description: "SACRED Foundation focuses on providing essential healthcare and sanitation services to underserved communities. We organize health camps, offer preventive care, and run hygiene awareness programs to improve public health and well-being. Our sanitation projects, including clean facility construction and community education, aim to create safer, healthier environment and empower people to live healthier live.",
    imageUrl: "/images/healthcare.jpg",
  },
  {
    id: 3,
    title: "Disaster Relief",
    description: "SACRED Foundation works to support communities affected by disasters. We provide immediate help, including food, water, medical care, and shelter. Our goal is to assist people in recovering and rebuilding their lives after natural disasters, ensuring they receive the support they need during difficult times.",
    imageUrl: "/images/disaster.jpg",
  },
  {
    id: 4,
    title: "Waste Management Solutions",
    description: "SACRED Foundation works to conserve water and promote responsible usage. We help communities by installing rainwater harvesting systems, improving irrigation methods, and educating people on how to use water wisely. Our goal is to ensure that communities have a steady supply of clean water, supporting both their daily needs and farming activities for the future.",
    imageUrl: "/images/Waste.png",
  },
  {
    id: 5,
    title: "Water Conservation and Management",
    description: "SACRED Foundation works to promote water conservation and smart management practices. We aim to raise awareness about the importance of saving water and using it wisely. Our projects include installing rainwater harvesting systems, improving irrigation methods, and teaching communities about sustainable water use. By managing water better, we help ensure that communities have reliable access to clean water for their everyday needs and farming.",
    imageUrl: "/images/Water Conservation.jpg",
  },
  {
    id: 6,
    title: "Renewable energy",
    description: "SACRED Foundation is dedicated to advancing renewable energy solutions for sustainable development. We focus on promoting the use of clean energy sources such as solar and wind to replace traditional harmful energy options. Our initiatives aim to reduce environmental impact, lower energy costs, and increase access to reliable power in underserved areas. By supporting renewable energy, we help communities build a cleaner and more sustainable future.",
    imageUrl: "/images/Renewable.jpg",
  },
  // Add other categories similarly...
];

export default function WorksSection() {
  const [activeWork, setActiveWork] = useState(worksData[0]);

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">
        Our <span className="text-green-500">Works</span>
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Our NGO is dedicated to empowering communities through education,
        healthcare, and sustainable initiatives. Join us in creating
        meaningful change worldwide.
      </p>
      <div className="flex flex-col md:flex-row sm:pl-4">
        {/* Left Side: Menu */}
        <div className="md:w-1/3">
          <ul>
            {worksData.map((work) => (
              <li key={work.id} className="mb-4 borderl">
                <button
                  onClick={() => setActiveWork(work)}
                  className={`text-lg font-semibold bothpadding ${activeWork.id === work.id
                      ? "text-green-500 hojver"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
