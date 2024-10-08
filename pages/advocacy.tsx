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
              At SACRED Foundation, we believe in the power of advocacy to bring about meaningful change in our communities and beyond. Our advocacy efforts focus on creating awareness, influencing policy, and empowering individuals to take action on critical social and environmental issues.
            </p>

            <h3 className="text-2xl font-semibold mb-4 animate-fade-in delay-300">Our Advocacy Goals</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 animate-fade-in delay-400">
              <li>Promote sustainable environmental practices.</li>
              <li>Champion the rights of marginalized communities.</li>
              <li>Raise awareness about climate change and its impacts.</li>
              <li>Encourage policy reforms for social justice and equity.</li>
              <li>Support educational initiatives for community empowerment.</li>
            </ul>

                        <h1 className="text-4xl font-extrabold text-center text-red-500  mb-8 animate-fade-in delay-300">
            Current  <span className="text-black">Campaigns</span>
                </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-600">
                <h4 className="text-xl font-semibold mb-2">Climate Action Now</h4>
                <p className="text-gray-700 mb-4">
                  Join us in advocating for urgent action against climate change. Our campaign focuses on reducing carbon footprints and promoting renewable energy solutions.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-700">
                <h4 className="text-xl font-semibold mb-2">Empower Women, Empower Communities</h4>
                <p className="text-gray-700 mb-4">
                  This campaign aims to elevate women&#39;s voices in decision-making processes and provide resources for women&#39;s empowerment in underserved areas.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-800">
                <h4 className="text-xl font-semibold mb-2">Right to Education</h4>
                <p className="text-gray-700 mb-4">
                  We advocate for equal access to education for all children, regardless of their socio-economic status, to ensure a brighter future for the next generation.
                </p>
              </div>
            </div>

            <h1 className="text-4xl font-extrabold text-center text-red-500  mb-8 my-5 animate-fade-in delay-1000">
            Get <span className="text-black">Involved</span>
                </h1>

            <p className="text-gray-700 mb-6 animate-fade-in delay-1000">
              Want to make a difference? Join our advocacy efforts by volunteering, participating in campaigns, or donating to support our initiatives. Together, we can drive change!
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
