// pages/media.js
import Head from 'next/head';
import Layout from '../pages/components/layout';

const Media = () => {
  return (
    <><Head>
      <title>PICTURE GALLERY | SACRED FOUNDATION</title>
    </Head>
    <Layout>
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-green-800 mb-6">Media</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Picture Gallery</h3>
          <div className="grid grid-cols-3 gap-4">
            <img src="/images/photo1.jpg" alt="Project Photo" className="rounded shadow-lg" />
            <img src="/images/photo2.jpg" alt="Community Event" className="rounded shadow-lg" />
            <img src="/images/photo3.jpg" alt="Team Effort" className="rounded shadow-lg" />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Video Gallery</h3>
          <div className="grid grid-cols-2 gap-6">
            <iframe src="https://www.youtube.com/embed/example" className="w-full h-64"></iframe>
            <iframe src="https://www.youtube.com/embed/example" className="w-full h-64"></iframe>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-4">Blog</h3>
          <p>Check out our latest blog articles...</p>
        </div>
      </section>
    </Layout></>
  );
};

export default Media;
