import { Heart, Star } from "lucide-react";
import jeepIcon from "@/assets/jeep-icon.jpg";
import glampingIcon from "@/assets/glamping-icon.jpg";
import culinaryIcon from "@/assets/culinary-icon.jpg";

const experiences = [
  {
    title: "Jeep Tour Kintamani",
    description: "Off-road adventure with volcano views",
    image: jeepIcon,
    rating: 4.97,
    reviews: 128,
    price: "IDR 750K",
    duration: "4 hours",
    host: "Hosted by Made",
    category: "Adventure",
  },
  {
    title: "Luxury Glamping",
    description: "Camping under the stars with mountain views",
    image: glampingIcon,
    rating: 4.92,
    reviews: 84,
    price: "IDR 1.2M",
    duration: "1 night",
    host: "Hosted by Ketut",
    category: "Unique stays",
  },
  {
    title: "Culinary Journey",
    description: "Cook and explore local Balinese cuisine",
    image: culinaryIcon,
    rating: 4.89,
    reviews: 156,
    price: "IDR 450K",
    duration: "5 hours",
    host: "Hosted by Wayan",
    category: "Food & Drink",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Experiences in Kintamani
          </h2>
          <p className="text-muted-foreground mt-2">
            Unique activities with local experts
          </p>
        </div>
        
        {/* Experience Cards Grid - Airbnb Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <img 
                  src={exp.image} 
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Wishlist Heart */}
                <button className="absolute top-3 right-3 p-2 rounded-full hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-card stroke-2 drop-shadow-md hover:fill-primary hover:text-primary transition-colors" />
                </button>
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-card px-3 py-1 rounded-full text-xs font-semibold">
                  {exp.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground text-base">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-foreground" />
                    <span className="text-sm font-medium">{exp.rating}</span>
                    <span className="text-muted-foreground text-sm">({exp.reviews})</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm">
                  {exp.description}
                </p>
                
                <p className="text-muted-foreground text-sm">
                  {exp.host} · {exp.duration}
                </p>
                
                <p className="text-foreground font-semibold pt-1">
                  From <span className="underline">{exp.price}</span>
                  <span className="font-normal text-muted-foreground"> / person</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="mt-10 text-center">
          <button className="px-6 py-3 border border-foreground rounded-lg font-semibold hover:bg-secondary transition-colors">
            Show all experiences
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;