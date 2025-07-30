import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Music, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Explore Kintamani</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Your gateway to authentic Kintamani experiences. Discover the beauty of Mount Batur through our carefully curated tours and adventures.
            </p>
            <div className="flex space-x-3">
              <Button variant="secondary" size="icon" asChild>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="secondary" size="icon" asChild>
                <a href="https://instagram.com/explorekintamani" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="secondary" size="icon" asChild>
                <a href="https://tiktok.com/@explorekintamani" target="_blank" rel="noopener noreferrer">
                  <Music className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-primary transition-colors">Jeep Tour Kintamani</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Glamping Experience</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Natural & Culinary Tour</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Photography Tours</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Custom Packages</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#booking" className="hover:text-primary transition-colors">Booking</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span>Jl. Raya Penelokan, Kintamani, Bali</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <span>info@explorekintamani.com</span>
              </div>
            </div>
            <Button variant="booking" className="w-full">
              Book Your Adventure
            </Button>
          </div>
        </div>
        
        <div className="border-t border-accent-foreground/20 mt-12 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 Explore Kintamani. All rights reserved. Crafted with love in Bali.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;