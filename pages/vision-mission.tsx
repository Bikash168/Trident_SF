// pages/vision-mission.js
import Head from 'next/head';
import Layout from '../pages/components/layout'; // Correct path to Layout
import { PiPersonDuotone } from "react-icons/pi";
import { FaHandsHelping } from "react-icons/fa";
import { AiFillEnvironment } from "react-icons/ai";
import { FaPeopleArrows } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaHandRock } from "react-icons/fa";

const VisionMission = () => {
  return (
    <>
      <Head>
        <title>Vision/Mission | SACRED FOUNDATION</title>
      </Head>
      <Layout>
        <section className="bg-white py-12 mb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-black text-center mb-8">
              Vision & Mission of <span className="text-pink-500">SACRED Foundation</span>
            </h2>

            {/* Vision Section */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to create a world where every individual, regardless of their background, has the opportunity to thrive and contribute to a more just, compassionate, and sustainable global society. A society where the underprivileged are empowered, and where access to healthcare and education are universal rights, not privileges. And along the way, encourage empathy, understanding, and a desire in individuals to uplift those in need.
              </p>
            </div>

            {/* Mission Section */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to create a holistic and sustainable impact on society by addressing the problems persisting at the grassroots level. Every individual deserves the opportunity to reach their full potential and live their life with dignity. Through targeted educational programs, relief camps, and a nurturing environment, we are dedicated to making this a reality.
              </p>
            </div>

            {/* Values Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Value: Integrity */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                  <PiPersonDuotone className="h-12 w-12 mx-auto text-pink-500 mb-4" />
                  <h4 className="font-semibold text-lg mb-2">Integrity</h4>
                  <p className="text-gray-600">We uphold the highest standards of integrity in all our actions.</p>
                </div>

                {/* Value: Compassion */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <FaHandsHelping className="h-12 w-12 mx-auto text-pink-500 mb-4" />
                  <h4 className="font-semibold text-lg mb-2">Compassion</h4>
                  <p className="text-gray-600">We empathize with the needs of others and strive to help those in need.</p>
                </div>

                {/* Value: Sustainability */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <AiFillEnvironment className="h-12 w-12 mx-auto text-pink-500 mb-4" />
                  <h4 className="font-semibold text-lg mb-2">Sustainability</h4>
                  <p className="text-gray-600">We are committed to creating sustainable solutions for a better future.</p>
                </div>

                {/* Value: Collaboration */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <FaPeopleArrows className="h-12 w-12 mx-auto text-pink-500 mb-4" />
                  <h4 className="font-semibold text-lg mb-2">Collaboration</h4>
                  <p className="text-gray-600">We believe in the power of working together to achieve our goals.</p>
                </div>

                {/* Value: Innovation */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <FaLightbulb className="h-12 w-12 mx-auto text-pink-500 mb-4" />
                  <h4 className="font-semibold text-lg mb-2">Innovation</h4>
                  <p className="text-gray-600">We encourage creativity and embrace new ideas to drive change.</p>
                </div>

                {/* Value: Empowerment */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <FaHandRock className="h-12 w-12 mx-auto text-pink-500 mb-4" />
                  <h4 className="font-semibold text-lg mb-2">Empowerment</h4>
                  <p className="text-gray-600">We empower communities to take charge of their development.</p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default VisionMission;
