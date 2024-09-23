// pages/contact.tsx
import React, { useState, useEffect } from 'react';
import Layout from '../pages/components/layout';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Head from 'next/head';
const Contact = () => {
  // State for triggering animations on scroll
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 150) {
        setShowContent(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <><>
      <Head>
        <title>Contact Us | SACRED Foundation</title>
      </Head>
    </><Layout>
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-pink-900 mb-12 text-center">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaPhone className="text-4xl mb-4 text-green-600" />
                <h3 className="text-xl font-semibold text-pink-900 mb-2">Call Us</h3>
                <p>+91-9439173220</p>
              </div>
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaEnvelope className="text-4xl mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold text-pink-900 mb-2">Email Us</h3>
                <p>info@sacred.foundation</p>
              </div>
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaMapMarkerAlt className="text-4xl mb-4 text-red-600" />
                <h3 className="text-xl font-semibold text-pink-900 mb-2">Visit Us</h3>
                <p>Plot No. – F2, Chandaka Industrial Estate, Chandrasekharpur, Bhubaneswar – 24, Odisha, India - 751024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-100 text-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-pink-900 mb-8 text-center">Send Us a Message</h2>
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-pink-900">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-400 focus:outline-none"
                      placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-pink-900">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-400 focus:outline-none"
                      placeholder="Your Email" />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-pink-900">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-400 focus:outline-none"
                    placeholder="Subject" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-pink-900">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-400 focus:outline-none"
                    rows={5}
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-pink-900 text-white rounded-full hover:bg-blue-400 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout></>
  );
};

export default Contact;

