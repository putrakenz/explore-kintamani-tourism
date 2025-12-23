import { MapPin, Star, Clock, Users, Shield } from "lucide-react";

const MapSection = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Where Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Where you'll be
          </h2>
          
          <div className="rounded-xl overflow-hidden border border-border">
            <div className="aspect-[16/9] md:aspect-[21/9] bg-muted relative">
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
          </div>
          
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5" />
              <h3 className="font-semibold text-lg">Kintamani, Bali, Indonesia</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Located in the highlands of Bali, Kintamani offers stunning views of Mount Batur and Lake Batur. 
              The area is known for its cool climate, beautiful sunrise views, and authentic Balinese culture.
            </p>
          </div>
        </div>

        {/* Things to Know */}
        <div className="border-t border-border pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Things to know
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* What's included */}
            <div>
              <h3 className="font-semibold mb-4">What's included</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 mt-0.5 text-foreground" />
                  <span>Professional local guide</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 text-foreground" />
                  <span>Flexible timing options</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 mt-0.5 text-foreground" />
                  <span>All equipment provided</span>
                </li>
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="font-semibold mb-4">Guest requirements</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>Up to 10 guests ages 6 and up can attend</li>
                <li>Comfortable walking shoes recommended</li>
                <li>Please bring warm clothing for mountain weather</li>
              </ul>
            </div>

            {/* Cancellation Policy */}
            <div>
              <h3 className="font-semibold mb-4">Cancellation policy</h3>
              <p className="text-muted-foreground mb-3">
                Free cancellation up to 24 hours before the experience starts.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-accent font-medium">Full refund guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-8 md:gap-16">
            <div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-muted-foreground text-sm">Happy guests</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">4.96</div>
              <div className="text-muted-foreground text-sm">Average rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">5 years</div>
              <div className="text-muted-foreground text-sm">Hosting experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="text-muted-foreground text-sm">Response rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;