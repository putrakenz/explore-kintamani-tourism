import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

const MapSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Find Us in Paradise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Located in the heart of Kintamani with easy access to all major attractions and stunning mountain views.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="w-6 h-6 mr-3 text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Jl. Raya Penelokan, Kintamani<br />
                  Bangli Regency, Bali 80652<br />
                  Indonesia
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href="https://maps.google.com/?q=-8.242,115.373" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Phone className="w-6 h-6 mr-3 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-muted-foreground" />
                    <span>+62 812-3456-7890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-muted-foreground" />
                    <span>info@explorekintamani.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-muted-foreground" />
                    <span>Daily: 5:00 AM - 8:00 PM</span>
                  </div>
                </div>
                <Button variant="booking" className="w-full">
                  Contact Us Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-0 bg-gradient-mountain text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold">1,717m</div>
                    <div className="text-sm opacity-90">Elevation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15-25°C</div>
                    <div className="text-sm opacity-90">Temperature</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">2 hours</div>
                    <div className="text-sm opacity-90">From Ubud</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">365 days</div>
                    <div className="text-sm opacity-90">Open Year</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-soft border-0 overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126459.07891911413!2d115.31445!3d-8.242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1bb6b9b1d9b5f%3A0x1b1b1b1b1b1b1b1b!2sKintamani%2C%20Bangli%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </Card>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="shadow-soft border-0 text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Travelers</div>
              </Card>
              <Card className="shadow-soft border-0 text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">5 Years</div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;