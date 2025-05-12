import React from 'react';
import Link from 'next/link';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaInstagram, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaWhatsapp,
  FaCode,
  FaRegFileAlt,
  FaRegLightbulb
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[var(--brown)]">Shubham Maurya</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Software Developer passionate about creating elegant, user-focused web solutions. 
              Specializing in modern frameworks and responsive design.
            </p>
            <div className="flex space-x-4 text-xl mt-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shubham-maurya-9932a3268/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#0077B5] transition-colors duration-300">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/maurya_shubham29/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#E4405F] transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="https://wa.me/+918850093749" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#25D366] transition-colors duration-300">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--brown)]">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <FaRegLightbulb className="text-[var(--brown)] text-sm" />
                <span>Software Development</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCode className="text-[var(--brown)] text-sm" />
                <span>Full Stack Development</span>
              </li>
              <li className="flex items-center gap-2">
                <FaRegFileAlt className="text-[var(--brown)] text-sm" />
                <span>Web Development</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--brown)]">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-white transition-colors duration-300">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--brown)]">Contact</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[var(--brown)]" />
                <span>Ghansoli Gaon, Navi Mumbai,<br />Maharashtra, 400701</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[var(--brown)]" />
                <span>+91 88500 93749</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--brown)]" />
                <span>mauryashubham12349@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Shubham Maurya. All rights reserved.
            </p>
            <div className="text-sm text-gray-400">
              Designed with 
              <span className="text-red-500 mx-1">❤</span> 
              by Shubham Maurya
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}