// pages/index.js

import Layout from '../pages/components/layout';
import Carousel from '../pages/components/Carousel';
import Head from 'next/head';
import WorksSection from './components/WorksSection';
import AwardsSection from './components/AwardsSection';
import PartnersSection from './components/PartnersSection';
import FinancialSection from './components/FinancialSection';
import CurrentProjects from './components/CurrentProjects';
import UpcomingEvents from './components/UpcomingEvents';

export default function Home() {
  return (
    <><>
      <Head>
        <title>Home | SACRED FOUNDATION</title>
      </Head>
    </><Layout>
        <div>
          <section className="hero-section bg-gray-50 py-12">
            <div className="container mx-auto">
              <Carousel />
            </div>
          </section>
          <UpcomingEvents />
          <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">

              {/* Left Section - Images */}
              <div className="relative">
                {/* Main Image */}
                <img src="/images/climate-change.png" alt="Community work" className="rounded-lg shadow-lg w-full h-auto" />

                {/* 10+ Years Badge */}
                <div className="absolute top-6 left-6 bg-pink-500 text-white font-bold rounded-full px-4 py-2 text-center">
                  <span>10+ <br /> YEARS</span>
                </div>

                {/* Secondary Image */}
                <div className="absolute bottom-6 right-6 w-32 h-32">
                  <img src="/images/social development.jpg" alt="Child smiling" className="rounded-lg shadow-md w-full h-full object-cover" />
                </div>
              </div>

              {/* Right Section - Text Content */}
              <div className="mt-12 lg:mt-0 lg:ml-16">
                <h2 className="text-3xl font-extrabold text-green-500 sm:text-4xl">
                  Who <span className="text-black">We Are</span>
                </h2>
                <p className="mt-4 text-lg text-gray-700">
                  SACRED Foundation stands as a pillar of support, dedicated to uplifting communities and driving positive change globally.
                  We are a registered non-profit organization focusing on key areas such as climate resilience, social development, and environmental conservation.
                  Our commitment ensures inclusive growth and sustainable solutions for pressing global challenges.
                </p>
                <p className="mt-4 text-md text-gray-500">
                  Through compassion, collaboration, and integrity, our efforts aim to create lasting impact. Join us as we strive to empower communities and build a sustainable future where dignity and opportunity are accessible to all.
                </p>

                {/* Read More Button */}
                <div className="mt-6">
                  <a href="/about-us" className="inline-block bg-green-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-full">
                    READ MORE
                  </a>
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

              <a
                href="#"
                className="mt-8 inline-block px-6 py-3 text-lg bg-green-500 text-white rounded-full hover:bg-blue-400 transition duration-300"
              >
                Know More
              </a>
            </div>
          </section>
          <CurrentProjects />
          <AwardsSection />
          <PartnersSection />
          <FinancialSection />
        </div>
      </Layout></>
  );
}
