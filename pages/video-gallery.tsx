import Head from 'next/head';
import Layout from './components/layout';
import { useState } from 'react';

const videos = [
  {
    src: 'https://www.youtube.com/embed/_To-u5OVx18?si=gesV58CaMzQjSkk7',
    title: 'Environmental Sustainability: Building a Resilient Future',
  },
  {
    src: 'https://www.youtube.com/embed/hORNlw6Ge6U?si=MHRxvyaYcHrrubAn',
    title: 'Sustainable Agriculture Initiative',
  },
  {
    src: 'https://www.youtube.com/embed/s67LARbCoUU?si=Lxml5bvy-AGdELwP',
    title: 'Women Empowerment Program',
  },
  {
    src: 'https://www.youtube.com/embed/rlhgeByiLmM?si=YKtNXYtkCmr6N1QZ',
    title: 'Climate Resilience Workshop',
  },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoClick = (src: string) => {
    setSelectedVideo(src);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <Head>
        <title>VIDEO GALLERY | SACRED FOUNDATION</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Layout>
        <section className="bg-gradient-to-r from-green-400 to-blue-500 py-12 mb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h2 className="text-5xl font-bold text-center mb-4 animate__animated animate__fadeInDown">
              Video Gallery
            </h2>
            <p className="text-lg text-center mb-8 animate__animated animate__fadeInUp">
              Our video library offers a deeper understanding of our initiatives, showcasing the
              real-life impact of our programs. These videos illustrate the positive change we are
              driving in communities through empowerment, development, and sustainability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  <iframe
                    src={video.src}
                    title={video.title}
                    className="w-full h-48 object-cover transition-all duration-300 ease-in-out"
                    onClick={() => handleVideoClick(video.src)}
                    allowFullScreen
                    aria-label={video.title}
                  ></iframe>
                </div>
              ))}
            </div>
          </div>

          {/* Modal for expanded video */}
          {selectedVideo && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
              onClick={handleCloseModal}
            >
              <div onClick={(e) => e.stopPropagation()} className="relative w-full h-full">
                <iframe
                  src={selectedVideo}
                  title="Expanded video view"
                  className="w-full h-96 animate__animated animate__zoomIn"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </section>
      </Layout>
    </>
  );
};

export default VideoGallery;
