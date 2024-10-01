import { useState } from 'react';
import Link from 'next/link';
import { ReactNode } from 'react';
import { FaAngleDown, FaBars, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTimes, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar Section */}
      <div className="bg-[#CCFFCC] text-black text-xs md:text-sm py-2 sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
          {/* Left: Contact Information */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <span className="flex items-center space-x-1">
              <FaMapMarkerAlt />
              <span>Bhubaneswar, India</span>
            </span>
            <span className="flex items-center space-x-1">
              <FaPhoneAlt />
              <span>+91-9439173220</span>
            </span>
            <span className="flex items-center space-x-1">
              <FaEnvelope />
              <span>info@sacred.foundation</span>
            </span>
          </div>
          {/* Right: Social Media Links */}
          <div className="flex items-center space-x-2 md:space-x-4 mt-2 md:mt-0">
            <a href="https://www.facebook.com/people/Sacred-Foundation/61565399609076/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-400" />
            </a>
            <a href="https://x.com/sacred71444" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/sacred.foundation/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-400" />
            </a>
            <a href="https://www.linkedin.com/company/sacred-foundation/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-400" />
            </a>
            <a href="https://www.youtube.com/channel/UCQqRznDd-fld_dI3QR4yLxQ" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Header with Logo */}
      <header className="sticky top-[36px] z-40 bg-white p-4 md:p-6 flex flex-wrap items-center justify-between borderline">
        {/* Logo and Title */}
        <Link href="/" className="w-full md:w-auto">
          <img src="/Logo.jpg" alt="Logo" className="h-16 logosi" /> {/* Adjust height as needed */}
          <div className="ml-4">
            <p className="text-sm md:text-base font-semibold text-gray-500">
            SUSTAINABLE ACTION FOR CLIMATE RESILIENT ENVIROSOCIAL DEVELOPMENT FOUNDATION
            </p>
            <p className="text-xs md:text-base italic text-black">
              … building resilience, inspiring change
            </p>
          </div>
        </Link>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navbar */}
      <nav className={`bg-white sticky top-[104px] z-30 transition-all ${menuOpen ? 'block' : 'hidden'} md:block padtop`} >
        <div className="container mx-auto flex justify-end items-center ulli">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6">
            {/** Navbar Items with Dropdowns */}
            {[
              {
                title: 'Who We Are',
                links: [
                  { href: '/about-us', label: 'About Us' },
                  { href: '/vision-mission', label: 'Vision/Mission' },
                  { href: '/team', label: 'Our Team' },
                ],
              },
              {
                title: 'What We Do',
                links: [
                  { href: '/advocacy', label: 'Advocacy' },
                  { href: '/consultancy', label: 'Consultancy' },
                  { href: '/community-development', label: 'Community Development' },
                ],
              },
              {
                title: 'Get Involved',
                links: [
                  { href: '/volunteers', label: 'Volunteers / Internship' },
                  { href: '/corporates', label: 'Corporates Partnership' },
                  { href: '/community-involvement', label: 'Institutional Partnership' },
                ],
              },
              {
                title: 'Media',
                links: [
                  { href: '/picture-gallery', label: 'Picture Gallery' },
                  { href: '/video-gallery', label: 'Video Gallery' },
                  { href: '/blog', label: 'Blog' },
                ],
              },
            ].map((item) => (
              <li className="relative group" key={item.title}>
                <button className="flex items-center hover:text-gray-300">
                  {item.title} <FaAngleDown className="ml-1" />
                </button>
                <ul className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col bg-[#CCFFCC] text-black shadow-lg z-10">
                  {item.links.map(link => (
                    <li className="w-full text-center" key={link.label}>
                      <Link href={link.href} className="block px-4 py-2 hover:bg-gray-200">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            {/* Contact Us */}
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </header>

      

      {/* Main Content */}
      <main className="flex-grow ">{children}</main>

      {/* Footer */}
      <footer className="bg-[#CCFFCC] text-black p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg text-[#316b9e] font-bold mb-4">About Us</h3>
            <p className='textalin'>An organization focused on sustainable actions for climate-resilient socio-environmental development implements strategies that promote environmental sustainability, foster social progress, and enhance resilience to the impacts of climate change.</p>
          </div>

          {/* Quick Links */}
          <div className='padleft'>
            <h3 className="text-lg text-[#316b9e] font-bold mb-4">Quick Links</h3>
            <ul>
              <li><Link href="/index" className="text-black block hover:text-blue-400">Home</Link></li>
              <li><Link href="/about-us" className="text-black block hover:text-blue-400">About Us</Link></li>
              <li><Link href="/vision-mission" className="text-black block hover:text-blue-400">Vision/Mission</Link></li>
              <li><Link href="/team" className="text-black block hover:text-blue-400">Our Team</Link></li>
              <li><Link href="/contact" className="text-black block hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Quick Links for Trident Group Websites */}
          <div>
            <h3 className="text-lg text-[#316b9e] font-bold mb-4">Trident Group Websites</h3>
            <ul>
              <li><Link href="https://tat.ac.in/" className="text-black block hover:text-blue-400">Trident Academy of Technology</Link></li>
              <li><Link href="https://tact.ac.in/" className="text-black block hover:text-blue-400">Trident Academy of Creative Technology</Link></li>
              <li><a href="https://taps.ac.in/" className="text-black block hover:text-blue-400">Trident Academy of Professional Studies</a></li>
              <li><Link href="https://trident.ac.in/" className="text-black block hover:text-blue-400">Trident Group of Institutions</Link></li>
              <li><a href="https://dfgroup.in/" className="text-black block hover:text-blue-400">The DF Group</a></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg text-[#316b9e] font-bold mb-4">Contact Us</h3>
            <p className='textalin'>Plot No. – F2, Chandaka Industrial Estate,
            Chandrasekharpur, Bhubaneswar – 24, Odisha, India - 751024.</p>
           <br /> 
            <p>Email: info@sacred.foundation</p>
            <p>Phone: +91-9439173220</p>
          </div>

          {/* Social Media Links */}
          <div className='flex items-center justify-between'>
            <h3 className="text-lg text-[#316b9e] font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Sacred-Foundation/61565399609076/" className="hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://x.com/sacred71444" className="hover:text-blue-400">
                <FaXTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/sacred.foundation/" className="hover:text-blue-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/sacred-foundation/" className="hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.youtube.com/@sacredfoundation" className="hover:text-blue-400">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-[#316b9e] text-center">
          <p>&copy; 2024 Sacred Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
