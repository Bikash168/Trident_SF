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
        const isMobile = window.innerWidth <= 768;
        videoElement.style.height = isMobile
          ? `${window.innerHeight}px`
          : "100vh";
      }
    };

    // Call the function on load and resize
    setVideoHeight();
    window.addEventListener("resize", setVideoHeight);
    window.addEventListener("orientationchange", setVideoHeight);

    // Ensure autoplay works when video is muted
    if (videoElement && isPlaying) {
      videoElement.play().catch((err) =>
        console.error("Autoplay failed:", err)
      );
    }

    // Clean up listeners on unmount
    return () => {
      window.removeEventListener("resize", setVideoHeight);
      window.removeEventListener("orientationchange", setVideoHeight);
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
      className="relative w-full min-h-screen bg-gray-900 text-white overflow-hidden"
      onClick={handleUserInteraction} // Allow unmuting and playing on click
      onTouchStart={handleUserInteraction} // Allow unmuting and playing on touch
    >
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted} // Controlled by state
          playsInline
          preload="auto" // Optimize for slow connections
          className="object-cover w-full h-full"
          style={{
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {/* Provide multiple video sources for better compatibility */}
          <source src="/your-video-file-low.mp4" type="video/mp4" media="(max-width: 768px)" />
          <source src="/your-video-file-high.mp4" type="video/mp4" media="(min-width: 769px)" />
          <source src="/your-video-file2.mp4" type="video/mp4" />
          {/* Fallback for browsers that don’t support video */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
