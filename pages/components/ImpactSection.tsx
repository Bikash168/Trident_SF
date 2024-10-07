// components/ImpactSection.js
import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when the section is in view
          observer.disconnect(); // Stop observing after the first trigger
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          Our Impact
        </h2>

        {/* Impact Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* People Impacted */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-pink-600">People Impacted</h3>
            <p className="text-5xl font-bold text-gray-800 mt-4">
              {isVisible ? <CountUp start={0} end={10000} duration={2} /> : "0"}
              <span className="text-sm">+</span>
            </p>
            <p className="text-gray-600 mt-2">Individuals directly benefitting from our programs.</p>
          </div>

          {/* Projects Completed */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-pink-600">Projects Completed</h3>
            <p className="text-5xl font-bold text-gray-800 mt-4">
              {isVisible ? <CountUp start={0} end={150} duration={2} /> : "0"}
              <span className="text-sm">+</span>
            </p>
            <p className="text-gray-600 mt-2">Sustainability and community initiatives successfully implemented.</p>
          </div>

          {/* Volunteers */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-pink-600">Volunteers</h3>
            <p className="text-5xl font-bold text-gray-800 mt-4">
              {isVisible ? <CountUp start={0} end={500} duration={2} /> : "0"}
              <span className="text-sm">+</span>
            </p>
            <p className="text-gray-600 mt-2">Dedicated individuals supporting our mission.</p>
          </div>

          {/* Partnerships */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-pink-600">Global Partnerships</h3>
            <p className="text-5xl font-bold text-gray-800 mt-4">
              {isVisible ? <CountUp start={0} end={20} duration={2} /> : "0"}
              <span className="text-sm">+</span>
            </p>
            <p className="text-gray-600 mt-2">Collaborating with international organizations for global impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
