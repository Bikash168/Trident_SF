import Head from 'next/head';
import Layout from './components/layout';
import { useState } from 'react';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
  '/images/image7.png',
  '/images/image8.png',
  // Add more images as needed
];

const PictureGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <><Head>
      <title>PICTURE GALLERY | SACRED FOUNDATION</title>
    </Head>
    <Layout>
      <section className="bg-gradient-to-r from-purple-400 to-pink-500 py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-5xl font-bold text-center mb-4 animate__animated animate__fadeInDown">
            Picture Gallery
          </h2>
          <p className="text-lg text-center mb-8 animate__animated animate__fadeInUp">
          Browse through the powerful visuals from our ongoing projects, where each image highlights moments of empowerment and progress. These photographs illustrate the significant impact our initiatives have on local communities and the positive changes unfolding.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-48 object-cover transition-all duration-300 ease-in-out"
                  onClick={() => handleImageClick(image)}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold">View Image</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70" onClick={handleCloseModal}>
            <img src={selectedImage} alt="Expanded view" className="max-w-full max-h-full animate__animated animate__zoomIn" />
          </div>
        )}
      </section>
    </Layout></>
  );
};

export default PictureGallery;
