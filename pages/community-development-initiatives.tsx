// pages/blog/community-development-initiatives.js
import Head from 'next/head';
import Layout from '../pages/components/layout'; // Ensure correct path
import ImageCollage from './components/ImageCollage';

const BlogPost = () => {
  return (
    <>
      <Head>
        <title>Community Development Initiatives | SACRED Foundation</title>
        <meta
          name="description"
          content="Discover various initiatives that aim to enhance community development through sustainable practices and empowerment."
        />
      </Head>
      <Layout>
      <ImageCollage />
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
       
          <h1 className="text-4xl font-bold mb-6">Community Development Initiatives</h1>
          <p className="text-lg mb-4">Published on June 5, 2023</p>
          <img
            src="/images/community-development.jpg"
            alt="Community Development Initiatives"
            className="mb-6 rounded-lg"
          />
          <p className="mb-6">
            At SACRED Foundation, we are committed to fostering strong, resilient communities through various development initiatives. Community development is about building local capacities, empowering individuals, and creating environments where everyone can thrive.
          </p>
          <p className="mb-6">
            Our initiatives focus on a holistic approach, combining social, economic, and environmental sustainability. We work closely with local stakeholders to identify key challenges and opportunities, ensuring that our efforts are relevant, impactful, and sustainable over the long term.
          </p>
          <p className="mb-6">
            Some of our key community development initiatives include:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Building resilient infrastructure that supports local economies and reduces environmental impact.</li>
            <li className="mb-2">Creating education and skill development programs aimed at empowering youth and women.</li>
            <li className="mb-2">Promoting health and well-being through clean water access, sanitation projects, and free health check-up camps.</li>
            <li className="mb-2">Encouraging community participation in environmental conservation and sustainable practices.</li>
            <li className="mb-2">Providing support for local entrepreneurs and small businesses through mentorship and funding opportunities.</li>
          </ul>
          <p className="mb-6">
            These initiatives are designed to foster a sense of ownership and pride within communities, ensuring that development efforts are led by local needs and aspirations. We believe that empowering people at the grassroots level is the key to long-term success and prosperity.
          </p>
          <p className="mb-6">
            Our community development work goes beyond addressing immediate needs — it's about creating a foundation for future growth, sustainability, and resilience. By focusing on education, health, infrastructure, and environmental sustainability, SACRED Foundation is helping communities thrive for generations to come.
          </p>
          <p className="mb-6">
            We invite you to be a part of our journey. Together, we can drive meaningful change and build a better future for all.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default BlogPost;
