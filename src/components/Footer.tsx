
import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-orange-400">Narmadalaya</span>
                <span className="text-xs text-gray-400">Charitable Trust</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nimar Abhyudaya Rural Management And Development Association (N.A.R.M.A.D.A.) is a spiritually oriented service mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Home</Link></li>
              <li><Link to="/history" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/school" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Our School</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Events</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/donation" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Donate</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Our Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/school" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Education</Link></li>
              <li><Link to="/awards" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Community Awards</Link></li>
              <li><Link to="/sports" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Sports Development</Link></li>
              <li><Link to="/whats-new" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Latest Updates</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">News & Media</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Narmadalaya, lepa Punarvas, Kasrawad, Madhya Pradesh 451228
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <p className="text-gray-300 text-sm">+91 12345 67890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <p className="text-gray-300 text-sm">info@narmadalaya.org</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Narmadalaya Charitable Trust. All rights reserved. | 
            <Link to="/certificates" className="hover:text-orange-400 transition-colors ml-1">Certificates</Link> |
            <Link to="/contact" className="hover:text-orange-400 transition-colors ml-1">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
