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
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 transition-transform transform hover:scale-105">
              Community Development Initiatives
            </h2>
            <p className="text-lg text-gray-700 mb-6 text-center animate-fadeIn">
              At SACRED Foundation, we believe that empowered communities are the backbone of sustainable development. Our initiatives focus on improving the quality of life for individuals and families, fostering resilience and self-sufficiency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
              {[
                {
                  title: 'Community Engagement',
                  description: 'We actively involve community members in decision-making processes, ensuring their voices are heard and valued.',
                  imgSrc: '/images/community-engagement.jpg',
                },
                {
                  title: 'Education Programs',
                  description: 'Our educational initiatives aim to provide quality education and vocational training to empower individuals for better opportunities.',
                  imgSrc: '/images/education-program.jpg',
                },
                {
                  title: 'Women Empowerment',
                  description: 'We focus on empowering women through skill development, entrepreneurship, and access to resources to enhance their roles in society.',
                  imgSrc: '/images/women-empowerment.jpg',
                },
                {
                  title: 'Sustainable Agriculture',
                  description: 'Our programs promote sustainable farming practices to enhance food security and improve livelihoods in rural communities.',
                  imgSrc: '/images/sustainable-agriculture.jpg',
                },
                {
                  title: 'Healthcare Initiatives',
                  description: 'We provide access to healthcare services and awareness programs to improve the health and well-being of communities.',
                  imgSrc: '/images/healthcare-initiative.jpg',
                },
                {
                  title: 'Environmental Awareness',
                  description: 'Our initiatives raise awareness about environmental issues and promote sustainable practices within communities.',
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

            <h3 className="text-2xl font-semibold mb-4 text-center transition-transform transform hover:scale-105">
              Join Us in Making a Difference
            </h3>
            <p className="text-gray-700 mb-6 text-center animate-fadeIn">
              Together, we can create a more resilient and empowered society. Explore how you can get involved with our community development initiatives.
            </p>
            <div className="text-center">
              <Link href="/contact" className="inline-block bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition">
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
