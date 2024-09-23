import Head from 'next/head';
import Layout from './components/layout';
import Image from 'next/image';
import { useState } from 'react';

const CorporatePartnership = () => {
  return (
    <><Head>
      <title>Corporates Partnership | SACRED Foundation</title>
    </Head>
    <Layout>
      {/* Corporate Partnership Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Individual & Corporate <span className="text-blue-600">Partnership</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 text-center">
            Over the past decade, Sacred Foundation has worked relentlessly to provide the necessary resources for marginalized communities, empowering them to build brighter futures. As one of the most active NGOs in the country, Sacred Foundation focuses on initiatives ranging from education for underprivileged children to healthcare, women's empowerment, disaster relief, and sustainable livelihood programs.
          </p>
          <p className="text-lg text-gray-600 mb-6 text-center">
            Join us in making a lasting impact through our focused welfare projects designed to uplift communities and foster long-term development.
          </p>

          {/* Image Section */}
          <div className="flex justify-center mb-8">
            <Image 
              src="/mnt/data/image.png" 
              alt="Sacred Foundation Corporate Partnership" 
              className="rounded-lg shadow-lg w-full md:w-1/2"
              width={500}
              height={500}
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
            <p className="text-lg text-gray-600">
              At Sacred Foundation, individual partnerships play a crucial role in the success of our projects. Your support provides vulnerable individuals with essential services such as education, healthcare, and skill development. By partnering with us, you become an advocate for social justice and a key player in transforming lives.
              <br /><br />
              There are many ways to get involved: from volunteering your time and expertise to raising awareness among your network. Every act of contribution, big or small, makes a difference. Spread the word, engage your community, and take part in our efforts to build a more equitable world.
            </p>
            <div className="rounded-lg shadow-lg">
              <Image 
                src="/mnt/data/image.png" 
                alt="Individual Partnership with Sacred Foundation" 
                className="rounded-lg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
       {/* Corporate Partnership Section */}
       <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Corporate <span className="text-blue-600">Partnership</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 text-center">
            At Sacred Foundation, we believe in the power of collaboration to create a sustainable impact. Our Corporate Social Responsibility (CSR) partnerships offer companies an opportunity to support transformative initiatives that address education, healthcare, gender equality, disaster relief, and sustainable development across vulnerable communities.
          </p>
          <p className="text-lg text-gray-600 mb-6 text-center">
            By partnering with us, corporations can align their social and environmental objectives with impactful projects, ensuring compliance with India's mandatory CSR regulations under the Companies Act 2013. Together, we can foster inclusive growth and long-term community development.
          </p>

          {/* Image Section */}
          <div className="flex justify-center mb-8">
            <Image 
              src="/mnt/data/image.png" 
              alt="Corporate Partnership with Sacred Foundation" 
              className="rounded-lg shadow-lg w-full md:w-1/2"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-orange-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Partner with Us for Greater Impact
          </h2>
          <p className="text-lg text-center text-white mb-6">
            Become a Corporate Partner and contribute to meaningful change. Let’s create sustainable solutions for the challenges faced by underserved communities while fulfilling your corporate responsibility. Your support makes a world of difference.
          </p>
          <div className="flex justify-center">
            <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout></>
  );
};

export default CorporatePartnership;
