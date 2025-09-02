import { Users, Award, Clock, Smile } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Happy Clients",
    description: "Businesses trust us"
  },
  {
    icon: Award,
    number: "1000+",
    label: "Projects Completed",
    description: "Successfully delivered"
  },
  {
    icon: Clock,
    number: "24-48",
    label: "Hours Delivery",
    description: "Fast turnaround time"
  },
  {
    icon: Smile,
    number: "98%",
    label: "Satisfaction Rate",
    description: "Customer happiness"
  }
];

export default function Statistics() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Our commitment to excellence shows in every project we deliver
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <IconComponent className="w-8 h-8 text-orange-300" />
                </div>
                <div className="space-y-2">
                  <div className="text-4xl lg:text-5xl text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <h3 className="text-xl text-orange-200 mb-1">{stat.label}</h3>
                  <p className="text-blue-200 text-sm">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}