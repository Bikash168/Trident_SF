// components/ImageCollage.js
import Image from 'next/image';

const ImageCollage = () => {
  return (
    <div className="relative">
      <div className="w-full  mx-auto">
        <Image
          src="/images/img1.png" // Replace with your image path
          alt="Responsive Image Collage"
          layout="responsive" // Responsive layout
          width={1552}        // Width of the original image in pixels
          height={350}        // Height of the original image in pixels
          priority
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default ImageCollage;
