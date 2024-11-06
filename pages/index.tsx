// pages/index.js

import Layout from '../pages/components/layout';
import Carousel from '../pages/components/Carousel';
import Head from 'next/head';
import WorksSection from './components/WorksSection';
import AwardsSection from './components/AwardsSection';
import PartnersSection from './components/PartnersSection';
import FinancialSection from './components/FinancialSection';
import HeroSection from './components/HeroSection';

import Link from 'next/link'; // Import Link from next/link
import CurrentProjects from './components/CurrentProjects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | SACRED FOUNDATION</title>
      </Head>
      <Layout>
        <div>
          <section className="hero-section">
            <div className="container mx-auto">
              <HeroSection />
            </div>
          </section>
       
          <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">

              {/* Left Section - Images */}
              <div className="relative">
                {/* Main Image */}
                <img src="/images/climate-change.jpg" alt="Community work" className="rounded-lg shadow-lg w-full h-auto" />

                {/* 10+ Years Badge */}
                <div className="absolute top-6 left-6 bg-pink-500 text-white font-bold rounded-full px-4 py-2 text-center">
                  <span>2+ <br /> YEARS</span>
                </div>

                              </div>

              {/* Right Section - Text Content */}
              <div className="mt-12 lg:mt-0 lg:ml-16">
                <h2 className="text-3xl font-extrabold text-orange-500 sm:text-4xl">
                  Who <span className="text-black">We Are</span>
                </h2>
                <p className="mt-4 text-lg text-gray-700">
                The SACRED Foundation (Sustainability and Climate Research for Empowerment and Development Foundation) is a distinguished non-profit organization dedicated to advancing climate-resilient socio-environmental development in Odisha. As a registered Section 8 entity, SACRED Foundation addresses critical environmental challenges through practical and sustainable solutions that promote environmental stewardship and support social advancement. Committed to fostering climate-resilient communities while aligning with the United Nations Sustainable Development Goals (UN SDGs), we integrate education with hands-on experience to prepare future leaders in sustainability.
                </p>
                <p className="mt-4 text-md text-gray-500">
                In collaboration with the Trident Group of Institutions, as well as various other educational institutions and industries, SACRED Foundation leads initiatives focused on renewable energy, waste management, and water conservation. Our initial projects include converting food waste into nutrient-rich compost, utilizing UV technology to treat wastewater for agricultural irrigation, and deploying carbon-enhanced solar panels.
                </p>

                {/* Read More Button */}
                <div className="mt-6">
                  <Link href="/about-us"> {/* Use Link instead of <a> */}
                    <span className="inline-block bg-green-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-full">
                      READ MORE
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <WorksSection />

          {/* Card Section */}
          <section className="bg-white py-16">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold text-green-500 mb-4">OUR IMPACT</h2>
              <h3 className="text-2xl text-[#316b9e] mb-8">
                NATURAL RESOURCE MANAGEMENT & SUSTAINABLE LIVELIHOOD
              </h3>
              <p className="text-black-900 mb-12">
                SACRED believes in the overall development of the community by promoting livelihood,
                natural resource management, and access to clean cooking and income-generating activities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card 1 */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src="/images/soil-water-conservation.jpg"
                    alt="Soil & Water Conservation"
                    className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-700">Soil & Water Conservation</h4>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src="/images/orchard-development.jpg"
                    alt="Orchard Based Livelihood Development"
                    className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-700">Orchard Based Livelihood Development</h4>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src="/images/off-farm-promotion.jpg"
                    alt="Off Farm Based Livelihood Promotion"
                    className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-700">Off Farm Based Livelihood Promotion</h4>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src="/images/fighting-climate-change.jpg"
                    alt="Fighting Climate Change"
                    className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-700">Fighting Climate Change</h4>
                  </div>
                </div>
              </div>

              <Link href="#" className="mt-8 inline-block px-6 py-3 text-lg bg-green-500 text-white rounded-full hover:bg-blue-400 transition duration-300">
                Know More
              </Link>
            </div>
          </section>
          <CurrentProjects />
          <AwardsSection />
          <PartnersSection />
          <FinancialSection />
        </div>
      </Layout>
    </>
  );
}
