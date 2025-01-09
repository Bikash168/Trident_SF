import React, { useEffect, useRef, useState } from "react";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true); // Video starts muted
  const [isPlaying, setIsPlaying] = useState(false); // Track if video is playing

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

    // Ensure video autoplay works with mute on initial load
    if (videoElement && isPlaying) {
      videoElement.play().catch((err) => console.error("Autoplay failed:", err));
    }

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("resize", setVideoHeight);
    };
  }, [isPlaying]);

  // Handle user interaction to unmute and play the video
  const handleUserInteraction = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Unmute the video
      setIsMuted(false); // Update state
      videoRef.current.play().catch((err) => console.error("Play failed:", err)); // Start playing video
      setIsPlaying(true); // Video is playing
    }
  };

  return (
    <div
      className="relative w-full min-h-screen bg-gray-900 text-white overflow-hidden cusminscre"
      onClick={handleUserInteraction} // Allow unmuting and playing on click
      onTouchStart={handleUserInteraction} // Allow unmuting and playing on touch
    >
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full cuswidhts">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted} // Ensure muted is controlled by state
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
