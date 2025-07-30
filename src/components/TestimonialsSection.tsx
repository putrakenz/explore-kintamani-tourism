import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Australia",
    rating: 5,
    text: "The jeep tour was absolutely incredible! Our guide was knowledgeable and the sunrise view from Mount Batur was breathtaking. Definitely the highlight of our Bali trip!",
    experience: "Jeep Tour"
  },
  {
    name: "Marco Rodriguez",
    location: "Spain",
    rating: 5,
    text: "Glamping experience exceeded all expectations. Waking up to the mountain view was magical. The staff was super friendly and the facilities were top-notch.",
    experience: "Glamping"
  },
  {
    name: "Yuki Tanaka",
    location: "Japan",
    rating: 5,
    text: "The culinary tour opened our eyes to authentic Balinese culture. Learning to cook traditional dishes and visiting the local village was an unforgettable experience.",
    experience: "Culinary Tour"
  },
  {
    name: "Emma Thompson",
    location: "UK",
    rating: 5,
    text: "Professional service from start to finish. The team went above and beyond to make our experience special. Can't wait to come back with friends!",
    experience: "All Tours"
  },
  {
    name: "David Chen",
    location: "Singapore",
    rating: 5,
    text: "Best decision we made in Bali! The combination of adventure and comfort was perfect. Highly recommend to anyone looking for an authentic Kintamani experience.",
    experience: "Jeep + Glamping"
  },
  {
    name: "Lisa Mueller",
    location: "Germany",
    rating: 5,
    text: "The attention to detail was amazing. From pickup to drop-off, everything was perfectly organized. The photography spots were incredible!",
    experience: "Jeep Tour"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from real people who've explored Kintamani with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-500 hover:scale-105 border-0 shadow-soft relative overflow-hidden">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary">{testimonial.experience}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-secondary rounded-xl px-8 py-4">
            <div className="flex items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-bold text-foreground">4.9/5</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <span className="text-muted-foreground">Based on 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;