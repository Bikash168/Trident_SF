// pages/consultancy.js
import Head from 'next/head';
import Layout from './components/layout';

const Consultancy = () => {
  return (
    <><Head>
      <title>Consultancy | SACRED Foundation</title>
    </Head>
    <Layout>
      <section className="bg-white py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 animate-fade-in">
            Consultancy Services
          </h2>
          <p className="text-lg text-gray-700 mb-6 animate-fade-in delay-200">
            At SACRED Foundation, we offer expert consultancy services aimed at driving sustainable development and social change. Our team of experienced professionals is dedicated to providing tailored solutions that address the unique challenges faced by communities and organizations.
          </p>

          <h3 className="text-2xl font-semibold mb-4 animate-fade-in delay-300">Our Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-400">
              <h4 className="text-xl font-semibold mb-2">Sustainable Development</h4>
              <p className="text-gray-700">
                We provide guidance on implementing sustainable practices that benefit both communities and the environment.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-500">
              <h4 className="text-xl font-semibold mb-2">Social Impact Assessment</h4>
              <p className="text-gray-700">
                Our assessments help organizations understand the social implications of their projects and initiatives.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-600">
              <h4 className="text-xl font-semibold mb-2">Capacity Building</h4>
              <p className="text-gray-700">
                We empower organizations through training and development programs to enhance their capabilities.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-700">
              <h4 className="text-xl font-semibold mb-2">Policy Development</h4>
              <p className="text-gray-700">
                Our team assists in formulating policies that promote equity, sustainability, and social justice.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-800">
              <h4 className="text-xl font-semibold mb-2">Community Engagement</h4>
              <p className="text-gray-700">
                We help organizations effectively engage with communities to ensure their voices are heard and valued.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-900">
              <h4 className="text-xl font-semibold mb-2">Research and Analysis</h4>
              <p className="text-gray-700">
                Our research services provide data-driven insights to inform decision-making and strategy development.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 animate-fade-in delay-1000">Why Choose Us?</h3>
          <p className="text-gray-700 mb-6 animate-fade-in delay-1100">
            Our consultancy services are built on a foundation of integrity, collaboration, and a deep commitment to social impact. We partner with clients to create tailored solutions that drive positive change and foster resilience.
          </p>

          <h3 className="text-2xl font-semibold mb-4 animate-fade-in delay-1200">Get in Touch</h3>
          <p className="text-gray-700 mb-6 animate-fade-in delay-1300">
            Interested in learning more about our consultancy services? Contact us today to discuss how we can support your initiatives.
          </p>
          <div className="text-center">
            <a href="/contact" className="inline-block bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition transform hover:scale-105">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1.0s; }
        .delay-1100 { animation-delay: 1.1s; }
        .delay-1200 { animation-delay: 1.2s; }
        .delay-1300 { animation-delay: 1.3s; }
      `}</style>
    </Layout></>
  );
};

export default Consultancy;
