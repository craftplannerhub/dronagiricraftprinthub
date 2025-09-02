import { Button } from "./ui/button";
import { Menu, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl text-blue-600 tracking-tight">
                <span className="text-blue-700">Dronagiri</span>
                <span className="text-gray-700 ml-1">Craft & Print Hub</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors">
                Services
              </a>
              <a href="#packages" className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors">
                Packages
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors">
                Portfolio
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors">
                Contact
              </a>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow-md">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}