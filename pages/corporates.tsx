import Head from 'next/head';
import Layout from './components/layout';
import Image from 'next/image';
import Link from 'next/link';
import ImageCollage from './components/ImageCollage';

const CorporatePartnership = () => {
  return (
    <Layout>
      <Head>
        <title>Corporate Partnership | SACRED Foundation</title>
      </Head>
      <ImageCollage />
      {/* Corporate Partnership Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Individual & Corporate <span className="text-blue-600">Partnership</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 text-center">
          SACRED Foundation is dedicated to providing essential resources to marginalized communities, helping them create brighter futures. Through the support of our individual and corporate partners, we drive impactful initiatives in areas such as education for underprivileged children, healthcare, women's empowerment, disaster relief, and sustainable livelihoods. 
          </p>
          <p className="text-lg text-gray-600 mb-6 text-center">
            Join us in making a lasting impact through our focused welfare projects designed to uplift communities and foster long-term development.
          </p>

          {/* Image Section */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/image1.jpg" // Adjust the path according to your project structure
              alt="SACRED Foundation Initiative"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full md:w-1/2"
            />
          </div>
        </div>
      </section>

      {/* Individual Partnership Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Individual <span className="text-black">Partnership</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <p className="text-lg text-gray-600 textalin">
            Individual partnerships are fundamental to the success of SACRED Foundation's initiatives. Your support directly helps provide essential services, such as education, healthcare, and skill development, to marginalized communities. By collaborating with us, you contribute to advancing social equity and positively impacting lives.
              <br /><br />
            There are various ways to get involved, from offering your time and expertise to raising awareness within your community. Every contribution, regardless of size, has the potential to make a meaningful difference. Join us in spreading the message, engaging your network, and supporting our efforts to foster a more just and sustainable world.
            </p>
            <div className="rounded-lg shadow-lg">
              <Image
                src="/images/image1.jpg" // Adjust the path according to your project structure
                alt="SACRED Foundation Initiative"
                width={700}
                height={300}
                className="rounded-lg shadow-lg w-full md:w-1/2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Partnership Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Corporate <span className="text-blue-600">Partnership</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 text-center textalin">
          SACRED Foundation values the power of collaboration and invites corporate partners to engage in meaningful Corporate Social Responsibility (CSR) initiatives. By partnering with us, companies can support projects that address key challenges in areas like education, healthcare, gender equality, disaster relief, and sustainable development in underserved communities.
          </p>
          <p className="text-lg text-gray-600 mb-6 text-center textalin">
          These collaborations provide an opportunity for companies to align their business objectives with impactful social and environmental outcomes, while also meeting India’s CSR obligations under the Companies Act 2013. Together, we can drive positive change and contribute to the long-term development of communities in need.
          </p>

          {/* Image Section */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/image2 (2).jpg" // Adjust the path according to your project structure
              alt="SACRED Foundation Initiative"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full md:w-1/2"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Partner with Us for Greater Impact
          </h2>
          <p className="text-lg text-center text-white mb-6">
            Become a Corporate Partner and contribute to meaningful change. Let&apos;s create sustainable solutions for the challenges faced by underserved communities while fulfilling your corporate responsibility. Your support makes a world of difference.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <span className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 cursor-pointer">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CorporatePartnership;
