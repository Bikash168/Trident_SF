// pages/our-team.js
import Head from 'next/head';
import Layout from './components/layout';
import ImageCollage from './components/ImageCollage';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

const ManagementteamMembers = [
  {
    name: 'Dr. Biswabijoyee Panigrahi',
    role: 'Founder',
    image: '/images/Team1.jpg',
    description:
      'Dr. Biswabijoyee Panigrahi, a seasoned Indian Direct Tax Consultant, Edupreneur, Angel Investor, and Sustainability Advisor, brings over 45 years of expertise in Renewable Energy, Fintech, and AI-driven platforms. Passionate about fostering impactful startups, he supports brilliant founders at bootstrap and pre-seeding/seeding stages to scale innovations that create positive change and align with Sustainable Development Goals (SDGs). Dr. Panigrahi’s dedication to real-world problem-solving and his extensive experience make him a visionary leader in sustainable development.',
    linkedin: 'https://www.linkedin.com/in/biswabijoyee-panigrahi-294409ba/',
  },
  {
    name: 'Smitarani Panigrahi',
    role: 'Founder',
    image: '/images/Team.jpg',
    description:
      'Mrs. Smitarani Panigrahi, a founding trustee of the foundation, has been leading its activities as Managing Trustee since inception. A noted social activist, she played a pivotal role in building the Trident Group of Institutions on a self-financing model and conceptualized "Indevin" for CSR innovations. She also serves as Director of Trident Softech and Spatial Planning and Managing Partner of Inland Engineers. With a Post-Graduate Degree in Life Sciences, she drives biotechnology growth under the foundation, blending her expertise with her passion for social development.',
    facebook: 'https://www.facebook.com/smitarani-panigrahi', // Added Facebook link
  },
];

const ExicutieteamMembers = [
  {
    name: 'Dr. Manas Ranjan Senapati',
    role: 'Associate consultant',
    image: '/images/Team3.jpg',
    description:
      'Dr. Manas Ranjan Senapati is an accomplished academician and researcher with expertise in environmental science and sustainability. He is dedicated to addressing global environmental challenges through impactful research and education.',
    linkedin: 'https://www.linkedin.com/in/dr-manas-ranjan-senapati-b8679324/',
  },
  {
    name: 'Mr. Bimal Prasad Mohapatra',
    role: 'Associate consultant',
    image: '/images/Team4.jpg',
    description:
      'Mr. Bimal Prasad Mohapatra is a seasoned professional in rural development and financial management. He is committed to empowering communities through innovative strategies and sustainable solutions.',
    linkedin: 'https://www.linkedin.com/in/bimal-prasad-mohapatra-b5672b1b0/',
  },
  {
    name: 'Dr. Dipti Mayee Sahoo',
    role: 'Associate consultant',
    image: '/images/Team6.jpg',
    description:
      'Dr. Dipti Mayee Sahoo is a dedicated researcher specializing in environmental science and social science. She is passionate about sustainable development and community empowerment through innovative solutions',
    linkedin: 'https://www.linkedin.com/in/dipti-mayee-sahoo-478735155/',
  },
  {
    name: 'Dr. Somanatha Jena',
    role: 'Associate consultant',
    image: '/images/Team5.jpg',
    description:
      'Dr. Somanatha Jena is an experienced academic and researcher with expertise in environmental science, biotechnology and climate change. He is committed to fostering sustainable practices and empowering communities through education and innovation.',
    linkedin: 'https://www.linkedin.com/in/somanatha-jena-11884361/',
  },
  {
    name: 'Mr. Deepak Mohapatra',
    role: 'Associate consultant',
    image: '/images/Team7.jpg',
    description:
      'Emily works closely with communities to empower them through education and resources.',
    linkedin: 'https://www.linkedin.com/in/mr-deepak-mohapatra/',
  },
  {
    name: 'Mr. Satya Sundar Mishra',
    role: 'Associate consultant',
    image: '/images/Team8.jpg',
    description:
      'Emily works closely with communities to empower them through education and resources.',
    linkedin: 'https://www.linkedin.com/in/mr-satya-sundar-mishra/',
  },
  {
    name: 'Mr. Mohammed Nadeem Iqbal',
    role: 'Associate consultant',
    image: '/images/Team9.jpg',
    description:
      'Emily works closely with communities to empower them through education and resources.',
    linkedin: 'https://www.linkedin.com/in/mr-mohammed-nadeem-iqbal/',
  },
  {
    name: 'Mr. Bikash Jethy',
    role: 'Associate consultant',
    image: '/images/Team10.jpg',
    description:
      'Emily works closely with communities to empower them through education and resources.',
    linkedin: 'https://www.linkedin.com/in/bikash-jethy-88bb3158/',
  },
];

const OurTeam = () => {
  return (
    <>
      <Head>
        <title>TEAM | SACRED FOUNDATION</title>
      </Head>
      <Layout>
        <ImageCollage />
        <section className="bg-white py-12 mb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-center text-blue-500 mb-8">
              Meet Our <span className="text-black">Leaders</span>
            </h1>
            <div className="flex justify-center">
              <div
                className={`grid ${
                  ManagementteamMembers.length === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-3'
                } gap-8 justify-items-center`}
              >
                {ManagementteamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-gray-600 mb-4">{member.role}</p>
                    <p className="text-gray-700">{member.description}</p>
                    <div className="flex justify-center mt-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 flex items-center mx-2"
                        >
                          <FaLinkedin className="mr-2" /> Connect on LinkedIn
                        </a>
                      )}
                      {member.facebook && (
                        <a
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 flex items-center mx-2"
                        >
                          <FaFacebook className="mr-2" /> Connect on Facebook
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-4xl font-extrabold text-center text-blue-500 mb-8">
              Meet Our <span className="text-black">Executive Team</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ExicutieteamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 flex items-center justify-center mt-4"
                    >
                      <FaLinkedin className="mr-2" /> Connect on LinkedIn
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default OurTeam;
