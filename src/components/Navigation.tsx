import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Music } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-foreground">Explore Kintamani</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-smooth">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <Button variant="social" size="icon" asChild>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                  <MessageCircle />
                </a>
              </Button>
              <Button variant="social" size="icon" asChild>
                <a href="https://instagram.com/explorekintamani" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
              </Button>
              <Button variant="social" size="icon" asChild>
                <a href="https://tiktok.com/@explorekintamani" target="_blank" rel="noopener noreferrer">
                  <Music />
                </a>
              </Button>
            </div>
            <Button variant="booking" size="lg" asChild>
              <a href="#booking">Book Now</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;