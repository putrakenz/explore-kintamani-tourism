import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-mountain.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="w-6 h-6 mr-2 text-primary" />
            <span className="text-lg font-medium">Kintamani, Bali</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Explore 
            <span className="block text-primary">Kintamani</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Discover the breathtaking beauty of Mount Batur through our authentic local experiences. 
            From thrilling jeep adventures to serene glamping under the stars.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="booking" size="lg" className="min-w-48">
              Start Your Adventure
            </Button>
            <Button variant="outline" size="lg" className="min-w-48 bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground">
              Watch Experience
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>4.9/5 Rating</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <span>500+ Happy Travelers</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;