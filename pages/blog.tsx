import Head from 'next/head';
import Layout from './components/layout';

const blogPosts = [
  {
    title: 'The Importance of Climate Resilience',
    excerpt: 'Discover why climate resilience is crucial for sustainable development and community empowerment.',
    date: 'September 15, 2023',
    image: '/images/climate-resilience.jpg', // Replace with actual image URLs
    link: '/the-importance-of-climate-resilience',
  },
  {
    title: 'Empowering Women Through Education',
    excerpt: 'Explore how education can transform the lives of women and uplift entire communities.',
    date: 'August 22, 2023',
    image: '/images/women-education.jpg',
    link: '/empowering-women-through-education',
  },
  {
    title: 'Sustainable Practices for a Greener Future',
    excerpt: 'Learn about practical steps to adopt sustainability in your daily life.',
    date: 'July 10, 2023',
    image: '/images/sustainable-practices.jpg',
    link: '/sustainable-practices',
  },
  {
    title: 'Community Development Initiatives',
    excerpt: 'A deep dive into various initiatives aimed at enhancing community development.',
    date: 'June 5, 2023',
    image: '/images/community-development.jpg',
    link: '/community-development-initiatives',
  },
  // Add more blog posts as needed
];

const Blog = () => {
  return (
    <><Head>
      <title>Blog | SACRED Foundation</title>
    </Head>
    <Layout>
      <section className="bg-gradient-to-r from-purple-400 to-blue-500 py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-5xl font-bold text-center mb-4 animate__animated animate__fadeInDown">
            Our Blog
          </h2>
          <p className="text-lg text-center mb-8 animate__animated animate__fadeInUp">
            Dive into our insightful articles on climate resilience, community development, and sustainable practices. Stay informed and inspired!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-all duration-300 ease-in-out"
                />
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-2">{post.excerpt}</p>
                  <p className="text-gray-500 text-sm">{post.date}</p>
                  <a href={post.link} className="mt-2 inline-block text-blue-500 hover:text-blue-700 transition">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout></>
  );
};

export default Blog;
