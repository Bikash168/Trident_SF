// components/HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="object-cover opacity-60 w-full h-full sm:object-contain md:object-cover"
          style={{
            minHeight: '100%',
            minWidth: '100%',
            maxHeight: '100%',
            maxWidth: '100%',
          }}
        >
          <source src="/your-fallback-image.mp4" type="video/mp4" />
          {/* Fallback for browsers that don’t support video */}
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
};

export default HeroSection;
