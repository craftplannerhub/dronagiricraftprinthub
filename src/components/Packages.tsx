import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Starter Package",
    description: "Perfect for small shops and startups",
    price: "Contact for Quote",
    features: [
      "500 Visiting Cards",
      "100 Letterheads",
      "2 Invoice Books (100 pages each)",
      "1 Custom Rubber Stamp",
      "200 Promotional Flyers",
      "Basic Design Support"
    ],
    popular: false
  },
  {
    name: "Premium Package",
    description: "Ideal for builders and large businesses",
    price: "Contact for Quote",
    features: [
      "1000 Letterheads (Premium Quality)",
      "5 Invoice Books (100 pages each)",
      "100 Employee ID Cards",
      "500 Brochures (Tri-fold)",
      "2 Flex Boards (3x6 feet)",
      "10 Site Diaries",
      "Custom Packaging Materials",
      "Priority Design Support",
      "Free Delivery"
    ],
    popular: true
  }
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Choose Your Perfect Package
          </h2>
          <p className="text-lg text-gray-600">
            Tailored solutions for businesses of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-orange-500 shadow-xl' : 'shadow-lg'}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-4 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">Most Popular</span>
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-gray-900">{pkg.name}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">{pkg.description}</CardDescription>
                <div className="mt-4">
                  <div className="text-3xl text-blue-600">{pkg.price}</div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full py-3 rounded-full ${
                    pkg.popular 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  Get Quote
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}