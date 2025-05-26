
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="h-4 w-4" />
              <span>About Narmadalaya</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Dedicated to 
              <span className="text-orange-600"> Serving Humanity</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Narmadalaya Charitable Trust has been at the forefront of social service since its inception. 
              We believe in creating sustainable change through education, community development, and 
              environmental conservation. Our mission is to empower underprivileged communities and 
              provide them with the tools they need to build a better future.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              From establishing educational institutions to organizing community health programs, 
              we work tirelessly to address the root causes of social challenges. Our holistic 
              approach ensures that every intervention creates lasting impact.
            </p>

            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
                <div className="text-gray-600">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-gray-600">Programs Running</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                <Link to="/history">Learn Our Story</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/vision">Our Vision & Mission</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Education Program"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <Target className="h-8 w-8 text-orange-500 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-600 text-sm">Empowering communities through sustainable development and education.</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <Users className="h-8 w-8 text-orange-500 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Community Focus</h3>
                  <p className="text-gray-600 text-sm">Building stronger communities through inclusive programs and initiatives.</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Community Development"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg">
              <Award className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
