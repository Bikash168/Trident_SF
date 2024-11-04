// components/HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-900 overflow-hidden text-white">
      {/* Background Video/GIF */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/your-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don’t support video */}
        </video>
      </div>

      
    </div>
  );
};

export default HeroSection;
