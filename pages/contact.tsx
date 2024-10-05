import React, { useState, useEffect } from 'react';
import Layout from '../pages/components/layout';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import Head from 'next/head';
import Map from '../pages/components/map';
import { FaXTwitter } from 'react-icons/fa6';

// Define an interface for the form data
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 150) {
        setShowContent(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (data: FormData) => { // Specify the type for data
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message);
    } else {
      alert(result.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    await sendEmail(formData); // Call the sendEmail function with form data

    // Reset the form after sending
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Contact Us | SACRED Foundation</title>
      </Head>
      <Layout>
        {/* Introduction Section */}
        <section className="py-16 bg-gray-50 text-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-pink-900 mb-4">We are Here to Help!</h2>
            <p className="mb-8">
              If you have any questions, concerns, or suggestions, feel free to reach out to us using the form below or through any of the contact details provided.
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
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

        {/* Google Map Section */}
        <section className="py-16 bg-gray-100 text-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-pink-900 mb-8 text-center">Our Location</h2>
            <div className="max-w-3xl mx-auto">
              <Map />
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-100 text-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-pink-900 mb-8 text-center">Send Us a Message</h2>
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-pink-900">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-400 focus:outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-pink-900">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-400 focus:outline-none"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-pink-900">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-400 focus:outline-none"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-pink-900">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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

        {/* Social Media Section */}
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-pink-900 mb-4">Connect with Us</h2>
            <p className="mb-6">Follow us on our social media platforms for updates and news.</p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl text-blue-600 hover:text-blue-500" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-600" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl text-pink-500 hover:text-pink-400" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-3xl text-red-600 hover:text-red-500" />
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
