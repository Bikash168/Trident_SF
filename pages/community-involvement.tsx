import Head from 'next/head';
import Layout from './components/layout';
import Image from 'next/image'; // Import Image from next/image
import Link from 'next/link'; // Import Link for navigation

const CommunityInvolvement = () => {
  return (
    <>
      <Head>
        <title>Community Involvement | SACRED Foundation</title>
      </Head>
      <Layout>
        {/* Community Involvement Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Community <span className="text-blue-600">Involvement</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 text-center">
              At SACRED Foundation, we believe that community involvement is crucial for sustainable development. Our programs engage local communities, empowering them to take charge of their own growth and development. As part of our initiatives, we actively promote volunteerism and encourage individuals to participate in our various projects. 
            </p>
            <p className="text-lg text-gray-600 mb-6 text-center">
              We recognize that “together we can achieve more,” and we invite everyone to join hands with us to make a difference in the lives of those in need. By fostering a culture of collaboration, we can create lasting change in our communities.
            </p>
            
            {/* Image Section */}
            <div className="flex justify-center mb-8">
              <Image
                src="/images/image1.jpg" // Adjust the path according to your project structure
                alt="Community Involvement Initiative"
                width={500} // Set appropriate width
                height={300} // Set appropriate height
                className="rounded-lg shadow-lg w-full md:w-1/2"
              />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-orange-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-6">
              Get Involved!
            </h2>
            <p className="text-lg text-center text-white mb-6">
              We encourage you to join us in our efforts to uplift communities. Whether you want to volunteer, donate, or simply spread the word, every action counts. Let&apos;s come together to create a better future for all!
            </p>
            <div className="flex justify-center">
              <Link href="/contact"> {/* Use Link for internal navigation */}
                <a className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CommunityInvolvement;
