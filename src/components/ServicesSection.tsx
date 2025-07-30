import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Star, MapPin } from "lucide-react";
import jeepIcon from "@/assets/jeep-icon.jpg";
import glampingIcon from "@/assets/glamping-icon.jpg";
import culinaryIcon from "@/assets/culinary-icon.jpg";

const services = [
  {
    title: "Jeep Tour Kintamani",
    description: "Experience the thrill of off-road adventure with breathtaking views of Mount Batur volcano and Lake Batur.",
    image: jeepIcon,
    duration: "4-6 hours",
    capacity: "4-6 people",
    rating: 4.9,
    price: "From IDR 750K",
    features: [
      "Professional driver & guide",
      "Sunrise/sunset options",
      "Photo stops at best viewpoints",
      "Traditional breakfast included"
    ]
  },
  {
    title: "Glamping Experience",
    description: "Luxury camping under the stars with panoramic mountain views and premium amenities for ultimate comfort.",
    image: glampingIcon,
    duration: "1-2 nights",
    capacity: "2-4 people",
    rating: 4.8,
    price: "From IDR 1.2M",
    features: [
      "Luxury tents with facilities",
      "Mountain view terrace",
      "Campfire & BBQ setup",
      "Breakfast with sunrise view"
    ]
  },
  {
    title: "Natural & Culinary Tour",
    description: "Discover local culture through authentic Balinese cuisine and explore hidden natural gems around Kintamani.",
    image: culinaryIcon,
    duration: "5-7 hours",
    capacity: "6-10 people",
    rating: 4.7,
    price: "From IDR 450K",
    features: [
      "Traditional cooking class",
      "Local market visit",
      "Hidden waterfall trek",
      "Cultural village experience"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Premium Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully curated adventures designed to showcase the best of Kintamani's natural beauty and local culture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-500 hover:scale-105 border-0 shadow-soft overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{service.rating}</span>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {service.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {service.capacity}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-primary">{service.price}</span>
                    <span className="text-sm text-muted-foreground">per person</span>
                  </div>
                  <Button variant="booking" className="w-full">
                    Book This Experience
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;