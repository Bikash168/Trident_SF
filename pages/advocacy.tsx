import Head from 'next/head';
import Layout from './components/layout';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ImageCollage from './components/ImageCollage';

const Advocacy = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set to true after the component mounts (on the client side)
  }, []);

  if (!mounted) {
    // Return null on the first render (SSR) to prevent mismatch between SSR and client-side render
    return null;
  }

  return (
    <>
      <Head>
        <title>Advocacy | SACRED Foundation</title>
      </Head>
      <Layout>
      <ImageCollage />
        <section className="bg-white py-12 mb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-extrabold text-center text-red-500 mb-8 animate-fade-in">
            Advocacy  <span className="text-black">at SACRED Foundation</span>
                </h1>
            <p className="text-lg text-gray-700 mb-6 animate-fade-in delay-200">
            SACRED Foundation utilizes advocacy as a key strategy for driving long-lasting change. Through raising awareness, shaping policies, and empowering individuals, we address critical social and environmental challenges. Our advocacy efforts are guided by clear goals aimed at making a meaningful impact in the areas of climate resilience and sustainable development.
            </p>


                        <h1 className="text-4xl font-extrabold text-center text-red-500  mb-8 animate-fade-in delay-300">
                        Key Advocacy <span className="text-black">Initiatives</span>
                </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-600">
                <h4 className="text-xl font-semibold mb-2">1.	Sustainable Agriculture Initiatives</h4>
                <p className="text-gray-700 mb-4">
                In partnership with local Farmer Producer Organizations (FPOs), SACRED Foundation promotes climate-resilient farming practices, organic agriculture, and sustainable waste management. These initiatives are especially focused on supporting small and marginal farmers in Odisha’s coastal regions like Puri and Khurda, helping them cope with the challenges of erratic rainfall and soil degradation due to climate change.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-700">
                <h4 className="text-xl font-semibold mb-2">2.	Circular Economy Models for Waste Management</h4>
                <p className="text-gray-700 mb-4">
                With urbanization driving increasing waste generation, SACRED Foundation has developed innovative solutions in waste valorization. Our floral waste management projects, particularly in temples and religious places, convert organic waste into compost and biofuel. This approach supports a circular economy that minimizes environmental impact while creating economic opportunities for marginalized communities.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-800">
                <h4 className="text-xl font-semibold mb-2">3.	Youth-Led Climate Action</h4>
                <p className="text-gray-700 mb-4">
                SACRED Foundation empowers youth through its student-run clubs like Prakruti and Prerna, providing training and leadership opportunities in sustainability. These platforms encourage young people to lead environmental initiatives such as tree plantation drives and waste segregation campaigns, creating a grassroots movement for climate action across Odisha.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-800">
                <h4 className="text-xl font-semibold mb-2">4.	Water Resource Management and Conservation</h4>
                <p className="text-gray-700 mb-4">
                To address water scarcity and quality issues in Odisha, SACRED Foundation has implemented programs focused on rainwater harvesting, water recycling, and groundwater conservation. In collaboration with local municipalities, we are also working on sewage treatment and sludge management, significantly improving the health of the region’s water ecosystem.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-800">
                <h4 className="text-xl font-semibold mb-2">5.	Collaborations for Climate Resilience</h4>
                <p className="text-gray-700 mb-4">
                SACRED Foundation works closely with government bodies, NGOs, and corporate partners to scale climate solutions. Our projects with Mission Shakti and other state-level initiatives focus on building climate resilience for vulnerable groups, including women, rural communities, and daily wage earners. Through these partnerships, we advocate for inclusive, community-driven climate action and contribute to the formulation of policies for environmental sustainability in Odisha.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-800">
                <h4 className="text-xl font-semibold mb-2">6.	Educational Programs and Research in ESG</h4>
                <p className="text-gray-700 mb-4">
                SACRED Foundation leads research initiatives in Environmental, Social, and Governance (ESG) models, influencing both policy decisions and business strategies. Our verified ESG curriculum at F.M. University exemplifies our commitment to integrating sustainability into higher education, helping to shape future leaders who are equipped to address the environmental challenges of tomorrow.
              </p>
              </div>
            </div>

            <h1 className="text-4xl font-extrabold text-center text-red-500  mb-8 my-5 animate-fade-in delay-1000">
            Be Part <span className="text-black">of Change</span>
                </h1>

            <p className="text-gray-700 mb-6 animate-fade-in delay-1000">
            Get involved by participating in our advocacy campaigns, volunteering your time and skills, or donating to support our impactful initiatives. Your engagement will help us develop sustainable solutions for pressing environmental and social challenges. Together, we can drive meaningful change and contribute to a better, more sustainable future.
            </p>
            <div className="text-center">
              <Link href="/contact" className="inline-block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition transform hover:scale-105">
                Contact Us
              </Link>
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
        `}</style>
      </Layout>
    </>
  );
};

export default Advocacy;
