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

  // Change section type to a union of the object keys
  const toggleDropdown = (section: 'whoWeAre' | 'whatWeDo' | 'getInvolved' | 'media') => {
    setDropdownOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
     <header className="bg-white sticky top-[0px] z-40 borderline">
        <div className="bg-[#CCFFCC] text-black text-xs md:text-sm py-2 sticky top-0 z-50">
          <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
            <div className="flex items-center space-x-2 md:space-x-4">
            <p className="text-sm font-medium">
                  Sustainable Action for Climate Resilient Enviro-social Development Foundation
                </p>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4 mt-2 md:mt-0">
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

        <div className="flex justify-between items-center px-4 py-3">
        <Link href="/" className="flex items-center">
        <div className="space-x-3">
              <img src="/Logo.png" alt="SACRED Logo" className="h-8 logosi" />
             
            </div>
          </Link>

          <nav className="hidden md:flex space-x-0.5 border-gray-200">
            <div className="group relative">
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex menuborder">
                Who We Are <FaAngleDown className="mart" />
              </button>
              <div className="absolute hidden group-hover:block bg-[#CCFFCC] shadow-md popmenu">
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
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex menuborder">
                What We Do <FaAngleDown className="mart" />
              </button>
              <div className="absolute hidden group-hover:block bg-[#CCFFCC] shadow-md popmenu">
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
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex menuborder">
                Get Involved <FaAngleDown className="mart" />
              </button>
              <div className="absolute hidden group-hover:block bg-[#CCFFCC] shadow-md popmenu">
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
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex menuborder padl">
                Media <FaAngleDown className="mart" />
              </button>
              <div className="absolute hidden group-hover:block bg-[#CCFFCC] shadow-md popmenu">
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
            <Link href="/contact" className="px-6 py-2 text-gray-700 hover:bg-gray-100 flex padl leftmarcon">
              Contact Us
            </Link>
          </nav>

          <div className="md:hidden">
            <button className="text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="flex flex-col md:hidden px-4 py-4 bg-white">
            <div className="flex flex-col">
              <button onClick={() => toggleDropdown('whoWeAre')} className="py-2 text-gray-700 hover:bg-gray-100 flex justify-between w-full">
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
              <button onClick={() => toggleDropdown('whatWeDo')} className="py-2 text-gray-700 hover:bg-gray-100 flex justify-between w-full">
                What We Do <FaAngleDown />
              </button>
              {dropdownOpen.whatWeDo && (
                <div className="pl-4 flex flex-col">
                  <Link href="/advocacy" className="py-2 text-gray-600 hover:bg-gray-100">
                    Advocacy
                  </Link>
                  <Link href="/consultancy" className="py-2 text-gray-600 hover:bg-gray-100">
                    Consultancy
                  </Link>
                  <Link href="/community-development" className="py-2 text-gray-600 hover:bg-gray-100">
                    Community Development
                  </Link>
                </div>
              )}
              <button onClick={() => toggleDropdown('getInvolved')} className="py-2 text-gray-700 hover:bg-gray-100 flex justify-between w-full">
                Get Involved <FaAngleDown />
              </button>
              {dropdownOpen.getInvolved && (
                <div className="pl-4 flex flex-col">
                  <Link href="/volunteers" className="py-2 text-gray-600 hover:bg-gray-100">
                    Volunteers / Internship
                  </Link>
                  <Link href="/corporates" className="py-2 text-gray-600 hover:bg-gray-100">
                    Corporates
                  </Link>
                  <Link href="/community-involvement" className="py-2 text-gray-600 hover:bg-gray-100">
                    Community Involvement
                  </Link>
                </div>
              )}
              <button onClick={() => toggleDropdown('media')} className="py-2 text-gray-700 hover:bg-gray-100 flex justify-between w-full">
                Media <FaAngleDown />
              </button>
              {dropdownOpen.media && (
                <div className="pl-4 flex flex-col">
                  <Link href="/picture-gallery" className="py-2 text-gray-600 hover:bg-gray-100">
                    Picture Gallery
                  </Link>
                  <Link href="/video-gallery" className="py-2 text-gray-600 hover:bg-gray-100">
                    Video Gallery
                  </Link>
                  <Link href="/blog" className="py-2 text-gray-600 hover:bg-gray-100">
                    Blog
                  </Link>
                </div>
              )}
              <Link href="/contact" className="py-2 text-gray-700 hover:bg-gray-100">
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-grow">{children}</main>

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
