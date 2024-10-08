// pages/awards.js
import Head from 'next/head';
import Image from 'next/image';
import Layout from './components/layout';

export default function Awards() {
  const awardsData = [
    {
      title: 'Best Climate Action Initiative 2023',
      description: 'Awarded by XYZ for outstanding contribution to climate resilience.',
      date: 'June 2023',
      image: '/images/award1.jpg', // Image path
    },
    {
      title: 'Sustainability Leadership Award',
      description: 'Recognized for leadership in environmental sustainability.',
      date: 'April 2022',
      image: '/images/award2.jpg', // Image path
    },
    {
      title: 'Clean Energy Innovation Certificate',
      description: 'Certified for pioneering work in green hydrogen research.',
      date: 'August 2024',
      image: '/images/award3.jpg', // Image path
    },
  ];

  return (
    <>
      <Head>
        <title>Awards & Recognition | SACRED Foundation</title>
        <meta name="description" content="SACRED Foundation Awards and Recognitions" />
      </Head>
      <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Awards & Recognition
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awardsData.map((award, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden p-6 transform transition-transform hover:scale-105"
              >
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={award.image}
                    alt={award.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-700">{award.title}</h2>
                <p className="text-gray-600 mt-2">{award.description}</p>
                <p className="text-gray-500 mt-4">{award.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}
