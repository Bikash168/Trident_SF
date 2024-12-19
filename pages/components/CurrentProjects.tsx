import React from 'react';

const projects = [
  {
    title: "Waste to Wealth",
    imageUrl: "/images/shikshalaya.jpg", // replace with your image path
    description: "Waste to Wealth is a concept that emphasizes transforming waste materials into valuable resources or products, contributing to both environmental sustainability and economic growth.",
  },
  {
    title: "Capacity Building of Field Functionaries in Organic Farming",
    imageUrl: "/images/chuppi-todo.jpg", // replace with your image path
    description: "Organic farming plays a critical role in achieving sustainable agricultural practices, promoting soil health, conserving water, reducing chemical inputs, and enhancing biodiversity.",
  },
  {
    title: "Solar Energy",
    imageUrl: "/images/solar-energy.jpg", // replace with your image path
    description: "Solar energy harnesses the power of the sun using photovoltaic cells or solar thermal systems to generate electricity or heat. It is a clean, renewable energy source that significantly reduces carbon emissions and dependence on fossil fuels. Solar energy is a vital component of the global shift toward sustainable and environmentally friendly energy solutions."
  }
  
];

const CurrentProjects = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black">
          CURRENT <span className="text-green-500">Projects</span>
        </h2>
        <p className="text-gray-700 mt-2">
          Empowering through education, healthcare, and sustainability. 
          Collaborating for a brighter future. Join our mission for positive change today!
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600 textalin">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentProjects;
