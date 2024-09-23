// pages/contact.js
import Layout from './components/layout';

const Contact = () => {
  return (
    <Layout>
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-green-800 mb-6">Contact Us</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded" />
          <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded" rows="6"></textarea>
          <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded">Send Message</button>
        </form>
        <div className="mt-8">
          <p>Email: contact@sacredfoundation.org</p>
          <p>Phone: +1 234-567-890</p>
          <p>Address: 123 Climate Avenue, Green City, Earth</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

