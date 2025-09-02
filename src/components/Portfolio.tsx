import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Eye, Heart } from "lucide-react";

const portfolioItems = [
  {
    title: "Business Stationery Suite",
    category: "Corporate Identity",
    image: "https://images.unsplash.com/photo-1517263869251-3d367cb6db21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzdGF0aW9uZXJ5JTIwbGV0dGVyaGVhZHxlbnwxfHx8fDE3NTYwMDMwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Complete corporate identity package including letterheads, business cards, and envelopes"
  },
  {
    title: "Marketing Brochures",
    category: "Print Design",
    image: "https://images.unsplash.com/photo-1651164653520-010c766aebf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGJyb2NodXJlcyUyMGRlc2lnbnxlbnwxfHx8fDE3NTYwMDMwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Eye-catching tri-fold brochures that effectively communicate your brand message"
  },
  {
    title: "Flex Banners & Signage",
    category: "Large Format",
    image: "https://images.unsplash.com/photo-1693031630177-b897fb9d7154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGV4JTIwYmFubmVyJTIwcHJpbnRpbmd8ZW58MXx8fHwxNzU2MDAzMDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "High-quality outdoor signage and flex banners for maximum visibility"
  },
  {
    title: "Professional Workspace",
    category: "Office Setup",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NTk1Mjc5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Complete office stationery solutions for modern businesses"
  },
  {
    title: "Printing Production",
    category: "Manufacturing",
    image: "https://images.unsplash.com/photo-1649336044348-01af0934e610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc1NjAwMzU0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "State-of-the-art printing equipment ensuring premium quality output"
  },
  {
    title: "Creative Materials",
    category: "Design & Print",
    image: "https://images.unsplash.com/photo-1664095885268-f3ea118334c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHByaW50JTIwbWF0ZXJpYWxzfGVufDF8fHx8MTc1NjAwMzU0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Vibrant and creative print materials that make your brand stand out"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
            <Eye className="w-5 h-5 text-orange-400" />
            <span className="text-white">Our Portfolio</span>
          </div>
          <h2 className="text-3xl lg:text-5xl text-white mb-6 leading-tight">
            Our Work
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400"> Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See examples of our professional printing and design work that has helped businesses make lasting impressions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Hover actions */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Eye className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Heart className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-white mb-2 group-hover:text-orange-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="mb-8">
            <p className="text-xl text-gray-300 mb-4">
              Ready to see your brand come to life?
            </p>
            <p className="text-gray-400">
              Let's discuss your project and create something amazing together!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300">
              View More Work
            </Button>
            <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}