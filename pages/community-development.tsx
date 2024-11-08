import Head from 'next/head';
import Layout from './components/layout';
import Link from 'next/link';
import Image from 'next/image';
import ImageCollage from './components/ImageCollage';

const CommunityDevelopment = () => {
  return (
    <>
      <Head>
        <title>Community Development | SACRED Foundation</title>
      </Head>
      <Layout>
        <ImageCollage />
        <section className="bg-white py-12 mb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-center text-fuchsia-500 mb-8 transition-transform transform hover:scale-105">
              Community Development <span className="text-black">Initiatives</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6 text-center animate-fadeIn  textalin">
            Community development is a core pillar of our work, focused on empowering local populations to drive their own progress and sustainability. We are committed to fostering a culture of collaboration where communities, institutions, and industries come together to create impactful, long-lasting change. Our approach ensures that development is inclusive, addressing both environmental and social needs, and is driven by the aspirations of the people we serve. Below are six key community initiatives that SACRED Foundation is committed to-
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6 ">
              {[
                {
                  title: 'Sustainable Agriculture Programs',
                  description: 'We support local farmers by introducing eco-friendly farming practices, promoting organic farming, and providing training on climate-resilient crops. These initiatives help farmers adapt to changing weather patterns and improve their livelihoods.',
                  imgSrc: '/images/community-engagement.jpg',
                },
                {
                  title: 'Waste Management Solutions',
                  description: 'Our community-based waste management programs encourage recycling and composting. We work with local groups to reduce waste and transform it into valuable resources like compost, biofuel, and fertilizers, contributing to a circular economy.',
                  imgSrc: '/images/Waste Management.jpg',
                },
                {
                  title: 'Water Conservation and Management',
                  description: 'We implement rainwater harvesting systems and conduct awareness campaigns on water conservation. Our efforts help communities in water-scarce regions improve their water availability and quality, supporting sustainable agricultural practices and clean drinking water.',
                  imgSrc: '/images/women-empowerment.jpg',
                },
                {
                  title: 'Skill Development and Training',
                  description: 'We provide skill-building workshops that empower individuals with vocational skills and sustainability knowledge. These programs enhance employment opportunities and foster a culture of sustainability within local communities.',
                  imgSrc: '/images/education-program.jpg',
                },
                {
                  title: 'Youth Engagement in Environmental Action',
                  description: 'We actively involve young people in environmental conservation through educational programs and climate action projects. By fostering youth leadership, we equip the next generation with the tools to drive positive environmental change.',
                  imgSrc: '/images/healthcare-initiative.jpg',
                },
                {
                  title: 'Health and Hygiene Education',
                  description: 'We run community health and hygiene awareness programs, focusing on sanitation and waste management. These initiatives help improve living conditions and promote healthy lifestyles, particularly in underserved areas.',
                  imgSrc: '/images/environmental-awareness.jpg',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fadeIn"
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    width={500} // Set a width for the image
                    height={300} // Set a height for the image
                    className="w-full h-48 object-cover rounded-md mb-4 transition-transform transform hover:scale-105"
                  />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
            <h1 className="text-4xl font-extrabold text-center text-fuchsia-500 mb-8 transition-transform transform hover:scale-105">
            Collaborate with Us <span className="text-black">for a Brighter Future</span>
            </h1>
            <p className="text-gray-700 mb-6 text-center animate-fadeIn">
            Together, we can build stronger and more resilient communities. Join our community development programs and help us make a difference.
            </p>
            <div className="text-center">
              <Link href="/contact" className="inline-block bg-fuchsia-500 text-white py-2 px-4 rounded hover:bg-fuchsia-600 transition">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        <style jsx>{`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out forwards;
          }
        `}</style>
      </Layout>
    </>
  );
};

export default CommunityDevelopment;
