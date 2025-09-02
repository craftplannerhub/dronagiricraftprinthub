import { MapPin, Phone, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl tracking-tight">
              <span className="text-blue-400">Dronagiri</span>
              <span className="text-white ml-1">Craft & Print Hub</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for all printing and stationery needs. We deliver quality 
              solutions that help your business make a lasting impression.
            </p>
            <p className="text-orange-400 italic">
              "One Stop Solution for All Printing & Stationery Needs"
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg text-white">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#services" className="block text-gray-300 hover:text-white transition-colors">
                Our Services
              </a>
              <a href="#packages" className="block text-gray-300 hover:text-white transition-colors">
                Packages
              </a>
              <a href="#portfolio" className="block text-gray-300 hover:text-white transition-colors">
                Portfolio
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-lg text-white">Contact Details</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">Dronagiri, Navi Mumbai, Maharashtra</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">info@dronagiricraftprint.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Dronagiri Craft & Print Hub. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for your business success
          </p>
        </div>
      </div>
    </footer>
  );
}