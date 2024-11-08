import Head from 'next/head';
import Layout from './components/layout';
import Image from 'next/image'; // Import Image from next/image
import Link from 'next/link'; // Import Link for navigation
import ImageCollage from './components/ImageCollage';

const CommunityInvolvement = () => {
  return (
    <>
      <Head>
        <title>Community Involvement | SACRED Foundation</title>
      </Head>
      <Layout>
        <ImageCollage />
        {/* Community Involvement Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Community <span className="text-cyan-600">Involvement</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 text-center">
            Community involvement is central to SACRED Foundation’s mission of achieving sustainable development. We believe lasting change happens when communities actively participate as partners in crafting solutions that address their unique needs. Through a collaborative approach, we work alongside local stakeholders to design initiatives that tackle urgent environmental issues and empower communities to take ownership of their sustainable futures.
            </p>
            <p className="text-lg text-gray-600 mb-6 text-center">
            Our programs invite local communities to engage directly in their own development, fostering a culture of volunteerism and active participation. We welcome individuals from diverse backgrounds to join us in making a meaningful impact on those who need it most, driven by our belief that 
            </p>
            <p className="text-lg text-gray-600 mb-6 text-center">
             “Together we can achieve more.”
            </p>
            {/* Image Section */}
            <div className="flex justify-center mb-8">
              <Image
                src="/images/Cimage1.jpg" // Adjust the path according to your project structure
                alt="Community Involvement Initiative"
                width={500} // Set appropriate width
                height={300} // Set appropriate height
                className="rounded-lg shadow-lg w-full md:w-1/2"
              />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-cyan-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-6">
              Get Involved!
            </h2>
            <p className="text-lg text-center text-white mb-6">
            We welcome your participation in our mission to create a sustainable future. From donating resources to volunteering your skills and knowledge, every action counts. By partnering with us, you help create a better, more sustainable future. Together, we can support communities and foster environmental resilience across the region.
            </p>
            <div className="flex justify-center">
              <Link href="/contact"> {/* Use Link for internal navigation */}
                <a className="bg-white text-cyan-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
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
