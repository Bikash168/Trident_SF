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
      {/* Top Bar Section - Make it sticky */}
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

      {/* Header with Logo - Make it sticky */}
      <header className="sticky top-[36px] z-40 bg-[#CCFFCC] p-4 md:p-6 flex flex-wrap items-center justify-between">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center w-full md:w-auto">
          <img src="/Logo.png" alt="Logo" className="w-12 md:w-16 lg:w-20" />
          <div className="ml-4">
            <h1 className="text-lg md:text-xl lg:text-3xl tracking-wide font-bold text-[#316b9e]">
              SACRED FOUNDATION
            </h1>
            <p className="text-xs md:text-base font-semibold text-[#316b9e]">
              Sustainable Action for Climate Resilient Envirosocial Development Foundation
            </p>
            <p className="text-xs md:text-base italic text-black-900">
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
      </header>

      {/* Navbar - Make it sticky */}
      <nav className={`bg-[#CCFFCC] sticky top-[36px] topmar nopad z-40 border-gray-200 text-black p-4 sticky top-[104px] z-30 transition-all ${menuOpen ? 'block' : 'hidden'} md:block`}>
  <div className="container mx-auto flex justify-start items-center">
    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6">
      
      {/* Dropdown: Who We Are */}
      <li className="relative group">
        <button className="flex items-center hover:text-gray-300 padbou">
          Who We Are <FaAngleDown className="ml-1" />
        </button>
        <ul className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-row bg-[#CCFFCC] text-black shadow-lg z-10 rowclimn ">
          <li className="w-full text-center">
            <Link href="/about-us" className="block px-4 py-2 hover:bg-gray-200">
              About Us
            </Link>
          </li>
          <li className="w-full text-center">
            <Link href="/vision-mission" className="block px-4 py-2 hover:bg-gray-200">
              Vision/Mission
            </Link>
          </li>
          <li className="w-full text-center">
            <Link href="/team" className="block px-4 py-2 hover:bg-gray-200">
              Our Team
            </Link>
          </li>
        </ul>
      </li>

      {/* Repeat for other dropdowns */}

      {/* Dropdown: What We Do */}
      <li className="relative group">
        <button className="flex items-center hover:text-gray-300 padbou">
          What We Do <FaAngleDown className="ml-1" />
        </button>
        <ul className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-row bg-[#CCFFCC] text-black shadow-lg z-10 rowclimn">
          <li className="w-full text-center">
            <Link href="/advocacy" className="block px-4 py-2 hover:bg-gray-200">
              Advocacy
            </Link>
          </li>
          <li className="w-full text-center">
            <Link href="/consultancy" className="block px-4 py-2 hover:bg-gray-200">
              Consultancy
            </Link>
          </li>
          <li className="w-full text-center">
            <Link href="/community-development" className="block px-4 py-2 hover:bg-gray-200">
              Community Development
            </Link>
          </li>
        </ul>
      </li>

      {/* Dropdown: Get Involved */}
      <li className="relative group">
        <button className="flex items-center hover:text-gray-300 padbou">
          Get Involved <FaAngleDown className="ml-1" />
        </button>
        <ul className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-row bg-[#CCFFCC] text-black shadow-lg z-10 rowclimn">
          <li className="w-full text-center">
            <Link href="/volunteers" className="block px-4 py-2 hover:bg-gray-200">
              Volunteers / Internship
            </Link>
          </li>
          <li className="w-full text-center">
            <Link href="/corporates" className="block px-4 py-2 hover:bg-gray-200">
              Corporates Partnership
            </Link>
          </li>
          <li className="w-full text-center">
            <Link href="/community-involvement" className="block px-4 py-2 hover:bg-gray-200">
              Institutional Partnership
            </Link>
          </li>
        </ul>
      </li>

      {/* Dropdown: Media */}
      <li className="relative group">
        <button className="flex items-center hover:text-gray-300 padbou">
          Media <FaAngleDown className="ml-1" />
        </button>
        <ul className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-row bg-[#CCFFCC] text-black shadow-lg z-10 rowclimn">
          <li className="w-full text-center">
            <Link href="/picture-gallery" className="block px-4 py-2 hover:bg-gray-200">
              Picture Gallery
            </Link>
          </li>
          <li className="w-full text-center">
            <Link href="/video-gallery" className="block px-4 py-2 hover:bg-gray-200">
              Video Gallery
            </Link>
          </li>
          <li className="w-full text-center">
            <Link href="/blog" className="block px-4 py-2 hover:bg-gray-200">
              Blog
            </Link>
          </li>
        </ul>
      </li>

      {/* Contact Us */}
      <li>
        <Link href="/contact" className="hover:text-gray-300">
          Contact Us
        </Link>
      </li>
    </ul>
  </div>
</nav>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-6 lg:p-8">{children}</main>

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
