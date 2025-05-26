
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, TreePine, Users, Award, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education & Schools",
      description: "Quality education for underprivileged children through our dedicated school programs and educational initiatives.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/school"
    },
    {
      icon: Heart,
      title: "Community Healthcare",
      description: "Comprehensive healthcare services and health awareness programs for rural and urban communities.",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/whats-new"
    },
    {
      icon: TreePine,
      title: "Environmental Conservation",
      description: "Protecting our environment through tree plantation drives, clean water initiatives, and sustainability programs.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/events"
    },
    {
      icon: Users,
      title: "Skill Development",
      description: "Empowering youth and adults with vocational training and skill development programs for better livelihoods.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/awards"
    },
    {
      icon: Award,
      title: "Sports & Recreation",
      description: "Promoting physical fitness and sportsmanship through various sports activities and competitions.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/sports"
    },
    {
      icon: Camera,
      title: "Cultural Programs",
      description: "Preserving and promoting local culture through festivals, art exhibitions, and cultural events.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/gallery"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            <span>Our Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Making a Difference Through 
            <span className="text-orange-600"> Diverse Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to community development encompasses education, healthcare, 
            environmental conservation, and cultural preservation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-orange-500 p-2 rounded-lg">
                    <program.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
                <Button asChild variant="outline" className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all">
                  <Link to={program.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
            <Link to="/whats-new">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
