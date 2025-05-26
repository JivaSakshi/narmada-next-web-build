
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, Users, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Empowering Communities Through Education",
      subtitle: "Building a brighter future for underprivileged children",
      description: "Join us in our mission to provide quality education and create opportunities for those who need it most.",
      cta: "Learn More",
      link: "/school"
    },
    {
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      title: "Preserving Nature, Protecting Future",
      subtitle: "Environmental conservation for sustainable development",
      description: "Our commitment to environmental protection ensures a greener tomorrow for the next generation.",
      cta: "Our Projects",
      link: "/events"
    },
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Community Development Programs",
      subtitle: "Transforming lives through comprehensive care",
      description: "From healthcare to skill development, we're committed to holistic community empowerment.",
      cta: "Get Involved",
      link: "/whats-new"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            transform: `translateX(${(index - currentSlide) * 100}%)`,
          }}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl text-white">
                  <div className="animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium mb-6 text-orange-300">
                      {slide.subtitle}
                    </h2>
                    <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl opacity-90">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        asChild 
                        size="lg" 
                        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-6"
                      >
                        <Link to={slide.link}>{slide.cta}</Link>
                      </Button>
                      <Button 
                        asChild 
                        variant="outline" 
                        size="lg" 
                        className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6"
                      >
                        <Link to="/donation">Donate Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-orange-500 scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-20 right-8 z-20 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <Heart className="h-8 w-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm opacity-80">Lives Touched</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-80">Volunteers</div>
            </div>
            <div className="text-center">
              <GraduationCap className="h-8 w-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm opacity-80">Students</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
