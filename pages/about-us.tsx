import Head from 'next/head';
import Layout from './components/layout';
import { useEffect } from 'react';
import Image from 'next/image'; // Import Image component
import ImageCollage from './components/ImageCollage';
import ImpactSection from './components/ImpactSection';

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
    <>
      <Head>
        <title>About Us | SACRED Foundation</title>
      </Head>
      <Layout>
      <ImageCollage />
        
          
      <section className="bg-white py-12 mb-10">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-4">
                About <span className="text-orange-500">SACRED Foundation</span>
              </h2>
            <p className="text-gray-700 text-lg mb-4 textalin">
            The SACRED (Sustainable Action for Climate Resilient Enviro-social Development) Foundation is a distinguished non-profit organization dedicated to advancing climate-resilient socio-environmental development in Odisha. As a registered Section 8 entity, SACRED Foundation addresses critical environmental challenges through practical and sustainable solutions that promote environmental stewardship and support social advancement. SACRED Foundation is being Committed to fostering climate-resilient communities by aligning with the United Nations Sustainable Development Goals (UN SDGs), we integrate education with hands-on experience to prepare future leaders in sustainability.
            </p>
            <p className="text-gray-700 text-lg mb-4 textalin">
            In collaboration with the Trident Group of Institutions, as well as various other educational institutions and industries, SACRED Foundation leads initiatives focused on renewable energy, carbon nutrality - inturn net zero, waste management, and water conservation. Our initial projects include converting food waste into nutrient-rich compost, utilizing UV technology and MBBR technology to reuse waste water, and deploying cuting edge technology based solar panels. These initiatives not only benefit the environment but also establish a high standard for responsible environmental action in Odisha, serving as a model for sustainability best practices.
            </p>
            <p className="text-gray-700 text-lg mb-4 textalin">
            Our approach integrates practical applications by involving experienced professionals from both industries and academia in sustainability projects. We bridge the gap between academic knowledge and practical skills, equipping future leaders to address the complex environmental and social challenges of tomorrow by actively engaging diverse stakeholders in these impactful initiatives. SACRED Foundation is committed to upholding the values of environmental responsibility, social progress, and climate resilience, with the goal of positioning Odisha as a leader in sustainable development—where the well-being of both people and the planet is prioritized. Many of these initiatives are being expanded to other institutions and industries, fostering a broader collaborative effort for a sustainable future across the region.
            </p>
          </div>
        </section>
           
        <section className="bg-gray-100 p-10 rounded-lg max-w-4xl mx-auto shadow-lg flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mb-10 fade-in">
          {/* Founder Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/founder.jpg" // Replace with actual image URL
              alt="Founder"
              width={192} // Set appropriate width
              height={192} // Set appropriate height
              className="rounded-full object-cover"
            />
          </div>
          {/* Message Content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">A Message from Our Founder</h2>
            <p className="text-gray-700 leading-relaxed textalin">
              &quot;At SACRED Foundation, our goal has always been to create a meaningful impact in the lives of those affected by environmental and social challenges. Our journey is rooted in the belief that through resilience, compassion, and innovation, we can empower communities to build a better future. Together, we are striving to create sustainable solutions that not only benefit our generation but future generations to come.&quot;
            </p>
            <p className="mt-4 font-semibold text-lg">- Dr. Biswabijoyee Panigrahi</p>
          </div>
        </section>

        <section className="bg-gray-100 py-12 mb-10 fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">Our Registration & Accreditation</h2>
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
        <ImpactSection />
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
      </Layout>
    </>
  );
};

export default AboutUs;
