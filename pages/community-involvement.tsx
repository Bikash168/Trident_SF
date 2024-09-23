import Head from 'next/head';
import Layout from './components/layout';
import Image from 'next/image';

const CommunityInvolvement = () => {
  return (
    <><Head>
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
            Sacred Foundation is dedicated to building resilient communities by reaching the "last mile." Through partnerships with NGOs, INGOs, institutional donors, and educational institutions, we are creating lasting, sustainable solutions for the most marginalized populations. Our approach focuses on collaboration and innovation to empower communities and drive long-term development.
          </p>
        </div>
      </section>

      {/* Partnership Opportunities Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Partnership Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <p className="text-lg text-gray-600">
              At Sacred Foundation, we believe in the power of collective action to bring about positive change. By partnering with national and international organizations, donors, and educational institutions, we aim to:
              <ul className="list-disc pl-5 mt-3">
                <li>Empower vulnerable populations with access to education, healthcare, and livelihoods.</li>
                <li>Ensure sustainable development that promotes environmental conservation and local capacity building.</li>
                <li>Foster inclusive growth that targets marginalized communities to "reach the last mile."</li>
                <li>Provide disaster relief and preparedness to build resilient, self-reliant communities.</li>
              </ul>
              Join us in making a lasting difference through strategic partnerships designed to uplift and empower those in need.
            </p>
            <div className="rounded-lg shadow-lg">
              <Image 
                src="/images/community-partnership.jpg" 
                alt="Community Partnership" 
                className="rounded-lg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our Impact
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-center">
            Over the years, our partnerships have helped us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">100+ NGOs</h3>
              <p className="text-gray-600">
                We collaborate with over 100 local and international NGOs to extend our reach to communities in need.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">10,000+ Beneficiaries</h3>
              <p className="text-gray-600">
                Our efforts have impacted over 10,000 individuals across various regions, providing education, healthcare, and disaster relief.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Global Collaboration</h3>
              <p className="text-gray-600">
                By working with global institutional donors and INGOs, we ensure sustainable development across borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Partner with Sacred Foundation
          </h2>
          <p className="text-lg text-center text-white mb-6">
            We invite NGOs, INGOs, institutional donors, and educational institutions to join hands with us in creating a sustainable future for marginalized communities. Together, we can reach the last mile and build resilient societies that thrive.
          </p>
          <div className="flex justify-center">
            <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              Become a Partner
            </a>
          </div>
        </div>
      </section>
    </Layout></>
  );
};

export default CommunityInvolvement;
