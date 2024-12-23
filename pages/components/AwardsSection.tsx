import Link from "next/link";

export default function AwardsSection() {
    return (
      <div className="container mx-auto py-12 px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="text-green-600">Awards</span> & RECOGNITION
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Celebrating excellence, honoring achievements, and inspiring others to
          reach new heights through acknowledgment and appreciation.
        </p>
  
        {/* Awards Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Image with Green Brush Stroke */}
          <div className="relative mb-8 md:mb-0 md:w-1/2">
            <div className="absolute w-full h-full bg-green-600 rounded-lg -z-10 transform -translate-x-6 -translate-y-6">
              {/* Green background for brush effect */}
            </div>
            <img
              src="/images/award.jpg" // Update with your actual image path
              alt="Best Volunteer Award"
              className="rounded-lg shadow-lg"
            />
          </div>
  
          {/* Right Side: Award Description */}
          <div className="md:w-1/2 pl-0 md:pl-12">
            <h3 className="text-2xl font-bold mb-4">Best Volunteer Award</h3>
            <p className="text-gray-700 mb-6">
              Raise India Foundation got BEST VOLUNTEER AWARD several times for
              organizing health checkup camps.
            </p>
            <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700">
  <Link href="/awards">
    View All Awards
  </Link>
</button>
          </div>
        </div>
      </div>
    );
  }
  