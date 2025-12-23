import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mountain.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative">
      {/* Hero Image - Full Width */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Mount Batur Kintamani"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-end pb-20 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-card mb-4 drop-shadow-lg">
                Explore Kintamani
              </h1>
              <p className="text-lg md:text-xl text-card/90 mb-6 drop-shadow-md">
                Discover unique experiences and activities hosted by local experts
              </p>
              <Button variant="primary" size="xl" className="rounded-lg">
                Get inspired
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;