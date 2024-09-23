import React from 'react';

const projects = [
  {
    title: "Shikshalaya",
    imageUrl: "/path/to/shikshalaya.jpg", // replace with your image path
    description: "Empowering children through education.",
  },
  {
    title: "Chuppi Todo– Sharam Nahi Samman",
    imageUrl: "/path/to/chuppi-todo.jpg", // replace with your image path
    description: "Breaking the silence, promoting dignity.",
  },
  {
    title: "Khushiyon Ki Potli",
    imageUrl: "/path/to/khushiyon-ki-potli.jpg", // replace with your image path
    description: "Spreading joy through essential supplies.",
  },
];

const CurrentProjects = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black">
          CURRENT <span className="text-blue-600">Projects</span>
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
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentProjects;
