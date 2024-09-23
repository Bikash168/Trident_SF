// pages/about-us.js
import Head from 'next/head';
import Layout from './components/layout';
import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => {
      el.classList.add('opacity-0');
      setTimeout(() => {
        el.classList.remove('opacity-0');
        el.classList.add('fade-in-animation');
      }, 100); // Adjust the delay for staggered effect
    });
  }, []);

  return (
    
      <><Head>
      <title>About Us | SACRED Foundation</title>
    </Head>
    <Layout>
        <section className="bg-white py-12 mb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
            {/* Text Section */}
            <div className="lg:w-1/2 mb-10 lg:mb-0 fade-in">
              <h2 className="text-4xl font-bold text-black mb-4">
                About <span className="text-pink-500">SACRED Foundation</span>
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                At the heart of SACRED Foundation is a commitment to fostering resilience through climate action and social development. We empower local communities by providing tools and resources to adapt and thrive in the face of environmental challenges.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                With over 10 years of experience, we have spearheaded numerous projects aimed at climate resilience, gender empowerment, and sustainable development. Our work impacts thousands of lives by supporting underprivileged communities with innovative solutions.
              </p>
              <p className="text-gray-700 text-lg">
                In the financial year 2023-2024, we reached over 1.83 million people through our projects across India. Our programs are focused on building sustainable futures in regions like Bihar, Uttar Pradesh, Madhya Pradesh, and Delhi.
              </p>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 relative fade-in">
              <div className="relative w-full h-auto">
                <img
                  src="/images/orchard-development.jpg"
                  alt="Orchard Based Livelihood Development"
                  className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 p-10 rounded-lg max-w-4xl mx-auto shadow-lg flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mb-10 fade-in">
          {/* Founder Image */}
          <div className="flex-shrink-0">
            <img
              src="/founder.jpg" // Replace with actual image URL
              alt="Founder"
              className="rounded-full w-48 h-48 object-cover" />
          </div>
          {/* Message Content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">A Message from Our Founder</h2>
            <p className="text-gray-700 leading-relaxed">
              "At SACRED Foundation, our goal has always been to create a meaningful impact in the lives of those affected by environmental and social challenges. Our journey is rooted in the belief that through resilience, compassion, and innovation, we can empower communities to build a better future. Together, we are striving to create sustainable solutions that not only benefit our generation but future generations to come."
            </p>
            <p className="mt-4 font-semibold text-lg">- Founder Name</p>
          </div>
        </section>

        <section className="bg-gray-100 py-12 mb-10 fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Registration & Accreditation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Individual Registration Items */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center fade-in">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">NGO Darpan</h3>
                <p className="text-gray-600">Registered with NGO Darpan for national-level social interventions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center fade-in">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">CSR-1 Registration</h3>
                <p className="text-gray-600">Eligible for Corporate Social Responsibility (CSR) funding.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center fade-in">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">UNDP & UNEP</h3>
                <p className="text-gray-600">Accredited by UNDP and UNEP for environmental research grants.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center fade-in">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">BIRAC & DST</h3>
                <p className="text-gray-600">Registered for research funding with BIRAC, DST, and other scientific bodies.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center fade-in">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">MORD</h3>
                <p className="text-gray-600">Partnering with Ministry of Rural Development for grassroots projects.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center fade-in">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">E-Anudan Portal</h3>
                <p className="text-gray-600">Registered on the E-Anudan portal for direct grants and funding.</p>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-in-animation {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      </Layout></>
  );
};

export default AboutUs;
