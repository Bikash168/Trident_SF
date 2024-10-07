// pages/blog/empowering-women-through-education.js
import Head from 'next/head';
import Layout from '../pages/components/layout'; // Ensure correct path

const BlogPost = () => {
  return (
    <>
      <Head>
        <title>Empowering Women Through Education | SACRED Foundation</title>
        <meta
          name="description"
          content="Explore how education can transform the lives of women and uplift entire communities through empowerment and opportunities."
        />
      </Head>
      <Layout>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Empowering Women Through Education</h1>
          <p className="text-lg mb-4">Published on August 22, 2023</p>
          <img
            src="/images/women-education.jpg"
            alt="Empowering Women Through Education"
            className="mb-6 rounded-lg"
          />
          <p className="mb-6">
            Education is one of the most powerful tools for transforming lives, especially for women. In many parts of the world, women face systemic challenges and barriers in accessing education. At SACRED Foundation, we believe that by educating women, we not only change their lives but also uplift entire communities.
          </p>
          <p className="mb-6">
            Empowering women through education leads to improved health, increased economic opportunities, and greater participation in societal decision-making processes. It also has a ripple effect — educated women are more likely to educate their children, create stronger families, and contribute to the overall economic and social development of their communities.
          </p>
          <p className="mb-6">
            Our initiatives focus on providing access to quality education, especially in marginalized and underserved communities. We collaborate with local institutions to develop programs that are inclusive, sustainable, and tailored to the specific needs of the women we serve. Whether it's through scholarships, skill-building workshops, or community outreach programs, our goal is to ensure that no woman is left behind in the journey towards educational empowerment.
          </p>
          <p className="mb-6">
            Together, we can create a future where every woman has the opportunity to learn, grow, and contribute meaningfully to her community. Join us in this mission of empowering women through education, and help us make a lasting impact on the world.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default BlogPost;
