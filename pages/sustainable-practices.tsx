// pages/blog/sustainable-practices.js
import Head from 'next/head';
import Layout from '../pages/components/layout'; // Ensure correct path

const BlogPost = () => {
  return (
    <>
      <Head>
        <title>Sustainable Practices for a Greener Future | SACRED Foundation</title>
        <meta
          name="description"
          content="Learn about practical steps and sustainable practices that can help build a greener future for communities and the planet."
        />
      </Head>
      <Layout>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Sustainable Practices for a Greener Future</h1>
          <p className="text-lg mb-4">Published on July 10, 2023</p>
          <img
            src="/images/sustainable-practices.jpg"
            alt="Sustainable Practices for a Greener Future"
            className="mb-6 rounded-lg"
          />
          <p className="mb-6">
            Sustainability isn't just a buzzword; it's a necessary approach to ensuring that we, and future generations, can thrive in a healthy environment. Adopting sustainable practices in our daily lives is one of the most effective ways to contribute to a greener future.
          </p>
          <p className="mb-6">
            At SACRED Foundation, we believe that small, consistent changes can lead to significant environmental impacts. Whether it's reducing waste, conserving energy, or making eco-friendly purchasing decisions, every action counts. Here's how you can make a difference:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Reduce your plastic consumption by switching to reusable bags, bottles, and containers.</li>
            <li className="mb-2">Conserve water by fixing leaks, taking shorter showers, and using water-saving devices.</li>
            <li className="mb-2">Save energy by switching to LED bulbs, using energy-efficient appliances, and unplugging devices when not in use.</li>
            <li className="mb-2">Adopt a plant-based diet, or at least reduce your meat consumption to lower your carbon footprint.</li>
            <li className="mb-2">Recycle and compost whenever possible, and encourage your community to do the same.</li>
          </ul>
          <p className="mb-6">
            Sustainable practices are not only beneficial for the environment but also for your well-being. By living sustainably, you're fostering a healthier, more mindful lifestyle that aligns with nature. The collective efforts of individuals, communities, and organizations like SACRED Foundation can create lasting change for the planet.
          </p>
          <p className="mb-6">
            Join us in our mission to create a greener, more resilient future. Start today by implementing one small change, and inspire others to follow. Together, we can make sustainability the foundation of a thriving, greener world.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default BlogPost;
