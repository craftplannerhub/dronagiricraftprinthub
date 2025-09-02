import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PlayCircle, CheckCircle, Star, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-ping"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 relative">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200 shadow-lg">
              <Star className="w-4 h-4 text-orange-500 fill-current" />
              <span className="text-orange-600 text-sm">Trusted by 500+ Businesses</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl text-gray-900 leading-tight tracking-tight">
                All Printing & Stationery Solutions 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500"> Under One Roof</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                We provide complete stationery & print services for builders, shops, and all businesses — 
                from letterheads to flex boards. Professional quality, delivered fast.
              </p>
            </div>
            
            {/* Key benefits */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">24-48 Hour Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Best Prices</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get a Free Quote
              </Button>
            </div>
            
            <div className="pt-6">
              <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 italic">
                "One Stop Solution for All Printing & Stationery Needs"
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1676474511128-b2e20f267c28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcmludGluZyUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTYwMDM1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern printing workspace"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Two smaller images */}
              <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1717079557034-9773cbb8235b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwc3RhY2slMjBkZXNpZ258ZW58MXx8fHwxNzU2MDAzNTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business cards design"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1664095885268-f3ea118334c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHByaW50JTIwbWF0ZXJpYWxzfGVufDF8fHx8MTc1NjAwMzU0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Colorful print materials"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            {/* Floating cards with enhanced design */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-2xl border border-blue-100 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Professional Quality</p>
                  <p className="text-2xl text-blue-600">500+ Projects</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-2xl backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <PlayCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-orange-100">Fast Delivery</p>
                  <p className="text-2xl">24-48 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}