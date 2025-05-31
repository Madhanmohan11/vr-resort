import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                MADRASS VILLA
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Experience luxury and tranquility at our exclusive resort. Where every moment becomes a cherished memory 
                and every stay exceeds your expectations.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-400">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-400">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-400">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-teal-400">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Premium Resort Location</p>
                    <p className="text-gray-400 text-sm">ECR Chennai, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <p className="text-gray-300">+91 9876543210</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <p className="text-gray-300">info@madrassvilla.com</p>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-teal-400">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  About Us
                </a>
                <a href="#gallery" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  Gallery
                </a>
                <a href="#booking" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  Booking
                </a>
                {/* add */}
                <a href="../pages/AdminLogin.tsx" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  Admin Portal
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
             © {currentYear} MADRASS VILLA. All rights reserved. | Designed with ❤️ by <span className="text-orange-400 font-semibold">M-websolution.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
