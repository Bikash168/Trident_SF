// pages/about-us.js
import Layout from './components/layout';

const AboutUs = () => {
  return (
    <Layout>
   <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        
        {/* Text Section */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h2 className="text-4xl font-bold text-black mb-4">
            About <span className="text-pink-500">SACRED Foundation</span>
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            At the heart of SACRED Foundation is a commitment to fostering resilience through climate action and social development. We empower local communities by providing tools and resources to adapt and thrive in the face of environmental challenges.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            With over 10 years of experience, we have spearheaded numerous projects aimed at climate resilience, gender empowerment, and sustainable development. Our work impacts thousands of lives by supporting underprivileged communities with innovative solutions.
          </p>
          <p className="text-gray-700 text-lg">
            In the financial year 2023-2024, we reached over 1.83 million people through our projects across India. Our programs are focused on building sustainable futures in regions like Bihar, Uttar Pradesh, Madhya Pradesh, and Delhi.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <div className="relative w-full h-auto">
            <div className="absolute top-0 left-0 bg-pink-500 rounded-full w-80 h-80 lg:w-96 lg:h-96 z-0 -translate-x-1/2 -translate-y-1/2"></div>
            <Image
              src="/images/children-group.jpg"  // Replace with your image path
                        />
          </div>
        </div>

      </div>
    </section>

<section className="bg-purple-500 text-white p-10 rounded-lg max-w-xl mx-auto shadow-lg">
      <div className="flex flex-col items-center">
        {/* Icon */}
        <div className="bg-white rounded-full p-4 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-12 w-12 text-purple-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m2-4h.01M4 13h16M5 8h.01M4 16h.01M4 20h16a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z"
            />
          </svg>
        </div>
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        {/* Content */}
        <p className="text-center text-white leading-relaxed">
          Our vision is to create a world where every individual, regardless of
          their background, has the opportunity to thrive and contribute to a
          more just, compassionate, and sustainable global society. A society
          where the underprivileged are empowered, and where access to
          healthcare and education are universal rights, not privileges. And
          along the way, encourage empathy, understanding, and a desire in
          individuals to uplift those in need.
        </p>
      </div>
    </section>


       <section className="bg-orange-500 text-white p-10 rounded-lg max-w-xl mx-auto shadow-lg">
      <div className="flex flex-col items-center">
        {/* Icon */}
        <div className="bg-white rounded-full p-4 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-12 w-12 text-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 17v2a2 2 0 001.85 1.995L11 21h2a2 2 0 001.995-1.85L15 19v-2m0-12h5a2 2 0 012 2v10a2 2 0 01-1.85 1.995L20 19h-5m-6 0H4a2 2 0 01-2-2V7a2 2 0 011.85-1.995L4 5h5m6-4h4a2 2 0 012 2v4m0 0l-3.5 3.5M21 7l-3.5 3.5"
            />
          </svg>
        </div>
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        {/* Content */}
        <p className="text-center text-white leading-relaxed">
          Our mission is to create a holistic and sustainable impact on society
          by addressing the problems persisting at the grassroots level. Every
          individual deserves the opportunity to reach their full potential and
          live their life with dignity. Through targeted educational programs,
          relief camps, and a nurturing environment, we are dedicated to making
          this a reality.
        </p>
      </div>
    </section>

    <section className="bg-gray-100 p-10 rounded-lg max-w-4xl mx-auto shadow-lg flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
      {/* Founder Image */}
      <div className="flex-shrink-0">
        <img
          src="/founder.jpg" // Replace with actual image URL
          alt="Founder"
          className="rounded-full w-48 h-48 object-cover"
        />
      </div>
      {/* Message Content */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4">A Message from Our Founder</h2>
        <p className="text-gray-700 leading-relaxed">
          "At SACRED Foundation, our goal has always been to create a meaningful
          impact in the lives of those affected by environmental and social
          challenges. Our journey is rooted in the belief that through resilience,
          compassion, and innovation, we can empower communities to build a better
          future. Together, we are striving to create sustainable solutions that
          not only benefit our generation but future generations to come."
        </p>
        <p className="mt-4 font-semibold text-lg">- Founder Name</p>
      </div>
    </section>


    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Registration & Accreditation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Individual Registration Items */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">NGO Darpan</h3>
            <p className="text-gray-600">Registered with NGO Darpan for national-level social interventions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">CSR-1 Registration</h3>
            <p className="text-gray-600">Eligible for Corporate Social Responsibility (CSR) funding.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">UNDP & UNEP</h3>
            <p className="text-gray-600">Accredited by UNDP and UNEP for environmental research grants.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">BIRAC & DST</h3>
            <p className="text-gray-600">Registered for research funding with BIRAC, DST, and other scientific bodies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">MORD</h3>
            <p className="text-gray-600">Partnering with Ministry of Rural Development for grassroots projects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">E-Anudan Portal</h3>
            <p className="text-gray-600">Registered on the E-Anudan portal for direct grants and funding.</p>
          </div>
        </div>
      </div>
    </section>

    
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-green-800 mb-6">Who We Are</h2>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">About Us</h3>
          <p>SACRED Foundation is committed to sustainable environmental and social development through climate resilience projects...</p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Vision/Mission</h3>
          <p>Vision: Our goal is to empower local actions for a global impact...</p>
          <p>Mission: To foster a world where ecosystems and societies thrive in harmony...</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Our Team</h3>
          <p>Our dedicated team of experts works together to implement innovative solutions...</p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;

