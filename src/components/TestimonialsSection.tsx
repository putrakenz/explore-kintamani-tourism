import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah",
    avatar: "S",
    location: "Melbourne, Australia",
    date: "December 2024",
    rating: 5,
    text: "The jeep tour was absolutely incredible! Our guide Made was so knowledgeable and the sunrise view from Mount Batur was breathtaking. One of the best experiences of our Bali trip.",
  },
  {
    name: "Marco",
    avatar: "M",
    location: "Barcelona, Spain",
    date: "November 2024",
    rating: 5,
    text: "Glamping experience exceeded all expectations. Waking up to the mountain view was magical. The staff went above and beyond. Highly recommend!",
  },
  {
    name: "Yuki",
    avatar: "Y",
    location: "Tokyo, Japan",
    date: "October 2024",
    rating: 5,
    text: "The culinary tour opened our eyes to authentic Balinese culture. Learning to cook traditional dishes and visiting the local village was unforgettable.",
  },
  {
    name: "Emma",
    avatar: "E",
    location: "London, UK",
    date: "September 2024",
    rating: 5,
    text: "Professional service from start to finish. The team made our honeymoon extra special. Can't wait to come back!",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              What guests are saying
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <Star className="w-5 h-5 fill-foreground" />
              <span className="font-semibold">4.96</span>
              <span className="text-muted-foreground">· 368 reviews</span>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full border border-border hover:border-foreground transition-colors disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full border border-border hover:border-foreground transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((review, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-foreground" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                "{review.text}"
              </p>
              
              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
                  <span className="text-background font-semibold">{review.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-muted-foreground text-xs">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Reviews */}
        <div className="mt-8">
          <button className="px-6 py-3 border border-foreground rounded-lg font-semibold hover:bg-card transition-colors">
            Show all 368 reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;