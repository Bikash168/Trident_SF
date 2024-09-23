import Layout from './components/layout';
import { useState } from 'react';

const videos = [
  {
    src: 'https://www.youtube.com/embed/videoID1', // Replace with actual video URLs
    title: 'Community Empowerment Project',
  },
  {
    src: 'https://www.youtube.com/embed/videoID2',
    title: 'Sustainable Agriculture Initiative',
  },
  {
    src: 'https://www.youtube.com/embed/videoID3',
    title: 'Women Empowerment Program',
  },
  {
    src: 'https://www.youtube.com/embed/videoID4',
    title: 'Climate Resilience Workshop',
  },
  // Add more videos as needed
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
    <Layout>
      <section className="bg-gradient-to-r from-green-400 to-blue-500 py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-5xl font-bold text-center mb-4 animate__animated animate__fadeInDown">
            Video Gallery
          </h2>
          <p className="text-lg text-center mb-8 animate__animated animate__fadeInUp">
            Dive into our impactful videos that showcase our efforts in community development, environmental sustainability, and social empowerment. Each video is a testament to our mission and vision.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <iframe
                  src={video.src}
                  title={video.title}
                  className="w-full h-48 object-cover transition-all duration-300 ease-in-out"
                  onClick={() => handleVideoClick(video.src)}
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedVideo && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70" onClick={handleCloseModal}>
            <iframe
              src={selectedVideo}
              title="Expanded video view"
              className="max-w-full max-h-full animate__animated animate__zoomIn"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default VideoGallery;
