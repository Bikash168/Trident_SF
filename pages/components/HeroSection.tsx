import React, { useEffect, useRef } from "react";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Dynamically set height for mobile devices
    const setVideoHeight = () => {
      if (videoElement) {
        if (window.innerWidth <= 768) { // Mobile
          videoElement.style.height = `${window.innerHeight}px`;
        } else { // Desktop
          videoElement.style.height = '100vh';
        }
      }
    };

    // Call the function on load and resize
    setVideoHeight();
    window.addEventListener("resize", setVideoHeight);

    // Autoplay with muted and unmute on play
    if (videoElement) {
      videoElement.muted = true;  // Start muted
      videoElement.play().catch((err) => console.error("Autoplay failed:", err));
    }

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
          ref={videoRef}
          autoPlay
          loop
          muted={true}  // Start muted
          playsInline
          className="object-cover w-full newbcss"
          style={{
            objectFit: "cover", 
            position: "absolute", 
            top: 0, 
            left: 0,
          }}
        >
          <source src="/your-video-file2.mp4" type="video/mp4" />
          {/* Fallback for browsers that don’t support video */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
