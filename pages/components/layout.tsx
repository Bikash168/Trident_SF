import { useState } from 'react';
import Link from 'next/link';
import {
  FaAngleDown,
  FaBars,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTimes,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{
    whoWeAre: boolean;
    whatWeDo: boolean;
    getInvolved: boolean;
    media: boolean;
  }>({
    whoWeAre: false,
    whatWeDo: false,
    getInvolved: false,
    media: false,
  });

  // Toggle dropdown for specific sections
  const toggleDropdown = (section: 'whoWeAre' | 'whatWeDo' | 'getInvolved' | 'media') => {
    setDropdownOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white sticky top-0 z-50">
        {/* Contact info section */}
        <div className="bg-[#CCFFCC] text-black text-xs md:text-sm py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm font-medium text-center md:text-left">
          Sustainable Action for Climate Resilient Enviro-social Development Foundation
        </p>
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-2 md:mt-0">
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
          {/* Social media icons */}
          <div className="flex space-x-2 mt-2 md:mt-0">
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
    </div>
        {/* Main navigation */}
        <div className="flex justify-between items-center px-4 py-3 bg-white shadow-md">
          <Link href="/" className="flex items-center">
            <img src="/Logo.png" alt="SACRED Logo" className="h-8 logosi" />
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-4">
            <div className="group relative">
              <button className="px-4 py-2 flex items-center text-gray-700 hover:bg-gray-100">
                Who We Are <FaAngleDown className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-[#CCFFCC] shadow-md">
                <Link href="/about-us" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                  About Us
                </Link>
                <Link href="/vision-mission" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Vision/Mission
                </Link>
                <Link href="/team" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Our Team
                </Link>
              </div>
            </div>
            <div className="group relative">
              <button className="px-4 py-2 flex items-center text-gray-700 hover:bg-gray-100">
                What We Do <FaAngleDown className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-[#CCFFCC] shadow-md">
                <Link href="/advocacy" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Advocacy
                </Link>
                <Link href="/consultancy" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Consultancy
                </Link>
                <Link href="/community-development" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Community Development
                </Link>
              </div>
            </div>
            <div className="group relative">
              <button className="px-4 py-2 flex items-center text-gray-700 hover:bg-gray-100">
                Get Involved <FaAngleDown className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-[#CCFFCC] shadow-md">
                <Link href="/volunteers" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Volunteers / Internship
                </Link>
                <Link href="/corporates" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Corporates
                </Link>
                <Link href="/community-involvement" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Community Involvement
                </Link>
              </div>
            </div>
            <div className="group relative">
              <button className="px-4 py-2 flex items-center text-gray-700 hover:bg-gray-100">
                Media <FaAngleDown className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-[#CCFFCC] shadow-md">
                <Link href="/picture-gallery" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Picture Gallery
                </Link>
                <Link href="/video-gallery" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Video Gallery
                </Link>
                <Link href="/blog" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Blog
                </Link>
              </div>
            </div>
            <Link href="/contact" className="px-6 py-2 text-gray-700 hover:bg-gray-100">
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="flex flex-col md:hidden px-4 py-4 bg-white">
            <button onClick={() => toggleDropdown('whoWeAre')} className="py-2 flex justify-between text-gray-700 hover:bg-gray-100">
              Who We Are <FaAngleDown />
            </button>
            {dropdownOpen.whoWeAre && (
              <div className="pl-4 flex flex-col">
                <Link href="/about-us" className="py-2 text-gray-600 hover:bg-gray-100">
                  About Us
                </Link>
                <Link href="/vision-mission" className="py-2 text-gray-600 hover:bg-gray-100">
                  Vision/Mission
                </Link>
                <Link href="/team" className="py-2 text-gray-600 hover:bg-gray-100">
                  Our Team
                </Link>
              </div>
            )}
            {/* Similar structure for other sections */}
            <Link href="/contact" className="py-2 text-gray-700 hover:bg-gray-100">
              Contact Us
            </Link>
          </nav>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-[#CCFFCC] text-black p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold">SACRED Foundation</h3>
            <p>Building resilient communities through sustainable development.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <p>Bhubaneswar, India</p>
            <p>+91-9439173220</p>
            <p>info@sacred.foundation</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
