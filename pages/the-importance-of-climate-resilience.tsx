// pages/blog/the-importance-of-climate-resilience.js
import Head from 'next/head';
import Layout from '../pages/components/layout'; // Ensure correct path

const BlogPost = () => {
  return (
    <>
      <Head>
        <title>The Importance of Climate Resilience | SACRED Foundation</title>
        <meta name="description" content="Discover why climate resilience is crucial for sustainable development and community empowerment." />
      </Head>
      <Layout>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">The Importance of Climate Resilience</h1>
          <p className="text-lg mb-4">Published on September 15, 2023</p>
          <img src="/images/climate-resilience.jpg" alt="Climate Resilience" className="mb-6 rounded-lg" />
          <p className="mb-6">
            Climate resilience is the ability to anticipate, prepare for, and respond to hazardous events, trends, or disturbances related to climate. SACRED Foundation aims to build climate resilience through local and global initiatives...
          </p>
          <p className="mb-6">
            By empowering communities and driving sustainable development, we can mitigate the impacts of climate change and create resilient environments that ensure long-term well-being for both people and the planet.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default BlogPost;
