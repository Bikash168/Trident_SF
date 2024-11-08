import React, { useEffect } from "react";

const HeroSection: React.FC = () => {
  useEffect(() => {
    // Dynamically set height for mobile devices
    const setVideoHeight = () => {
      const videoElement = document.getElementById('hero-video') as HTMLVideoElement;
      if (window.innerWidth <= 768) { // Mobile
        videoElement.style.height = `${window.innerHeight}px`;
      } else { // Desktop
        videoElement.style.height = '100vh';
      }
    };

    // Call the function on load and resize
    setVideoHeight();
    window.addEventListener("resize", setVideoHeight);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("resize", setVideoHeight);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gray-900 text-white overflow-hidden cusminscre">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full cuswidhts">
        <video
          id="hero-video"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full newbcss"
          style={{
            objectFit: "cover", 
            position: "absolute", 
            top: 0, 
            left: 0,
          }}
        >
          <source src="/your-video-file.mp4" type="video/mp4" />
          {/* Fallback for browsers that don’t support video */}
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
};

export default HeroSection;
