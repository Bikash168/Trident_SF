// pages/consultancy.js
import Head from 'next/head';
import Layout from './components/layout';
import Link from 'next/link';
import ImageCollage from './components/ImageCollage';

const Consultancy = () => {
  return (
    <>
      <Head>
        <title>Consultancy | SACRED Foundation</title>
      </Head>
      <Layout>
        <ImageCollage />
        <section className="bg-white py-12 mb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-8 animate-fade-in ">
              Consultancy <span className="text-black">Services</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6 animate-fade-in delay-200">
              At SACRED Foundation, we offer expert consultancy services aimed at driving sustainable development and social change. Our team of experienced professionals is dedicated to providing tailored solutions that address the unique challenges faced by communities and organizations.
            </p>
            <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-8 animate-fade-in delay-300">
              Our Areas of <span className="text-black">Expertise</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
              {[
                {
                  title: 'Sustainable Development',
                  description: 'We provide guidance on implementing sustainable practices that benefit both communities and the environment.',
                },
                {
                  title: 'Social Impact Assessment',
                  description: 'Our assessments help organizations understand the social implications of their projects and initiatives.',
                },
                {
                  title: 'Capacity Building',
                  description: 'We empower organizations through training and development programs to enhance their capabilities.',
                },
                {
                  title: 'Policy Development',
                  description: 'Our team assists in formulating policies that promote equity, sustainability, and social justice.',
                },
                {
                  title: 'Community Engagement',
                  description: 'We help organizations effectively engage with communities to ensure their voices are heard and valued.',
                },
                {
                  title: 'Research and Analysis',
                  description: 'Our research services provide data-driven insights to inform decision-making and strategy development.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-${400 + index * 100}`}
                >
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
            <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-8 animate-fade-in delay-1000">
              Why <span className="text-black">Choose Us?</span>
            </h1>
            <p className="text-gray-700 mb-6 animate-fade-in delay-1100">
              Our consultancy services are built on a foundation of integrity, collaboration, and a deep commitment to social impact. We partner with clients to create tailored solutions that drive positive change and foster resilience.
            </p>
            <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-8 animate-fade-in delay-1200">
              Get  <span className="text-black">in Touch</span>
            </h1>
            <p className="text-gray-700 mb-6 animate-fade-in delay-1300">
              Interested in learning more about our consultancy services? Contact us today to discuss how we can support your initiatives.
            </p>
            <div className="text-center">
              <Link href="/contact" className="inline-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition transform hover:scale-105">
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
          .delay-1100 { animation-delay: 1.1s; }
          .delay-1200 { animation-delay: 1.2s; }
          .delay-1300 { animation-delay: 1.3s; }
        `}</style>
      </Layout>
    </>
  );
};

export default Consultancy;
