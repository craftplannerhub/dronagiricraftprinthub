import { 
  FileText, 
  Mail, 
  CreditCard, 
  Stamp,
  BookOpen,
  Receipt,
  Truck,
  FileSpreadsheet,
  Calendar,
  FileCheck,
  IdCard,
  Shield,
  Image,
  Megaphone,
  Eye,
  Layout,
  ShoppingBag,
  Tag,
  Package,
  ArrowRight
} from "lucide-react";

const services = [
  {
    category: "Identity & Communication",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    description: "Professional business identity solutions",
    items: [
      { name: "Letterheads", icon: FileText },
      { name: "Envelopes", icon: Mail },
      { name: "Business Cards", icon: CreditCard },
      { name: "Stamps", icon: Stamp },
      { name: "Notepads", icon: BookOpen }
    ]
  },
  {
    category: "Billing & Accounts",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    description: "Complete billing and accounting stationery",
    items: [
      { name: "Invoice Books", icon: Receipt },
      { name: "Receipt Books", icon: Receipt },
      { name: "Delivery Challans", icon: Truck },
      { name: "Quotation Books", icon: FileSpreadsheet }
    ]
  },
  {
    category: "Office & Site Use",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    description: "Essential office and construction site materials",
    items: [
      { name: "Diaries", icon: Calendar },
      { name: "Contracts", icon: FileCheck },
      { name: "ID Cards", icon: IdCard },
      { name: "Safety Stickers", icon: Shield }
    ]
  },
  {
    category: "Marketing & Promotion",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    description: "Eye-catching marketing materials",
    items: [
      { name: "Brochures", icon: Image },
      { name: "Flyers", icon: Megaphone },
      { name: "Posters", icon: Eye },
      { name: "Flex Boards", icon: Layout },
      { name: "Banners", icon: Layout }
    ]
  },
  {
    category: "Packaging & Branding",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    description: "Custom packaging and branding solutions",
    items: [
      { name: "Printed Bags", icon: ShoppingBag },
      { name: "Stickers", icon: Tag },
      { name: "Tape", icon: Package },
      { name: "Labels", icon: Tag }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-orange-100 px-6 py-3 rounded-full mb-6">
            <Package className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700">Our Services</span>
          </div>
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6 leading-tight">
            Our Business Stationery &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500"> Print Essentials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete range of professional stationery and printing solutions tailored for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((category, index) => (
            <div key={index} className={`${category.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100`}>
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 ${category.iconBg} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                    <Package className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">
                    {category.category}
                  </h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={itemIndex} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/80 transition-all duration-300 group/item cursor-pointer">
                      <div className={`flex-shrink-0 w-10 h-10 ${category.iconBg} rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-5 h-5 ${category.iconColor}`} />
                      </div>
                      <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors flex-1">{item.name}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-300" />
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className={`w-full py-3 px-4 bg-gradient-to-r ${category.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 group-hover:shadow-xl`}>
                  View All Services
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}