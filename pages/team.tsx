// pages/our-team.js
import Layout from './components/layout';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & Director',
    image: '/images/john-doe.jpg', // Replace with actual image path
    description: 'John is passionate about sustainable development and has over 15 years of experience in the field.',
  },
  {
    name: 'Jane Smith',
    role: 'Project Manager',
    image: '/images/jane-smith.jpg', // Replace with actual image path
    description: 'Jane oversees project implementation and ensures we meet our goals effectively.',
  },
  {
    name: 'Michael Brown',
    role: 'Research Analyst',
    image: '/images/michael-brown.jpg', // Replace with actual image path
    description: 'Michael conducts research on environmental policies and their impact on communities.',
  },
  {
    name: 'Emily Davis',
    role: 'Community Outreach Coordinator',
    image: '/images/emily-davis.jpg', // Replace with actual image path
    description: 'Emily works closely with communities to empower them through education and resources.',
  },
];

const OurTeam = () => {
  return (
    <Layout>
      <section className="bg-white py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurTeam;
