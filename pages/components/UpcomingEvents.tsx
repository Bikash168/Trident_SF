// pages/components/UpcomingEvents.js

import React from 'react';

const UpcomingEvents = () => {
  return (
    <section className="bg-black py-2">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Upcoming Events & Announcements</h2>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            <div className="p-2 bg-black shadow-md rounded-lg">
              <h3 className="text-xl text-white font-semibold">- 2nd Oct - Gandhi Jayanti- Swachhata hi Seva.     - 10th Oct - Dussehra Celebration. -Plastic Free Campus. -</h3>
            </div>
          </div>
        </div>

      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default UpcomingEvents;
