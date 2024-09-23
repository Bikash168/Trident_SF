import Layout from './components/layout';
import { useState } from 'react';

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    age: '',
    motivation: '',
    startDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      age: '',
      motivation: '',
      startDate: ''
    }); // Reset form after submission
  };

  return (
    <Layout>
      {/* Sacred Foundation Internship Program Description */}
      <section className="bg-white py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Internship Opportunities with Sacred Foundation
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Join Sacred Foundation as an intern and contribute to meaningful work that transforms communities. Our internships provide you with an opportunity to engage in humanitarian projects aimed at empowering underserved populations, promoting education, healthcare, and sustainable development.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            As an intern at Sacred Foundation, you will be part of a team that is passionate about creating positive change. You will gain practical experience, build professional networks, and grow both personally and professionally while working on hands-on projects that matter.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Internship benefits include:
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-gray-600">
            <li>Hands-on experience in social work and community development</li>
            <li>A Letter of Recommendation upon completion</li>
            <li>Opportunities for networking and professional growth</li>
            <li>Potential for full-time roles within Sacred Foundation</li>
          </ul>

          {/* Image Section */}
          <div className="flex justify-center">
            <img 
              src="/mnt/data/image.png" 
              alt="Sacred Foundation Internship" 
              className="rounded-lg shadow-lg w-full md:w-1/2"
            />
          </div>
        </div>
      </section>

      {/* Internship Application Form */}
      <section className="bg-gradient-to-r from-orange-400 to-green-600 py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-white mb-8 animate-bounce">
            Apply for an Internship
          </h2>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="whatsapp">WhatsApp No.</label>
                <input
                  type="tel"
                  name="whatsapp"
                  id="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="age">Age</label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2" htmlFor="motivation">Why do you want this internship?</label>
                <textarea
                  name="motivation"
                  id="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-300 ease-in-out"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2" htmlFor="startDate">When would you like to start the internship?</label>
                <input
                  type="text"
                  name="startDate"
                  id="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-300 ease-in-out"
                  required
                />
              </div>
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-green-600 transition transform hover:scale-105">
              Apply
            </button>
          </form>
        </div>
      </section>

      {/* Bounce Animation */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-15px); }
          60% { transform: translateY(-7px); }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </Layout>
  );
};

export default InternshipForm;
