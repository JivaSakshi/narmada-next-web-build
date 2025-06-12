
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, TreePine, Users, Award, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Narmadalaya",
      description: "“Informal educational centres started in 2010 with only 14 students in Lepa village. This activity is meant...",
      image: "https://www.narmadalaya.org/main/img/narmadalaya_home.jpg",
      link: "#"
    },
    {
      icon: Heart,
      title: "Ramkrishna Sarda Niketan",
      description: "First School with vocational training in Nimar Region in Madhya Pradesh...",
      image: "https://www.narmadalaya.org/main/img/rksn/rksn.jpg",
      link: "#"
    },
    {
      icon: TreePine,
      title: "Ramkrishna Technical Institute",
      description: "A rural technology Centre has been set up in 2016. Training in Plumbing, Carpentering, Welding..",
      image: "https://www.narmadalaya.org/main/img/rit/rit.jpg",
      link: "#"
    },
    {
      icon: Users,
      title: "Narmada Nirmiti",
      description: "An initiative to empower village womenfolk",
      image: "https://www.narmadalaya.org/main/img/nirmiti/3.png",
      link: "#"
    },
    {
      icon: Award,
      title: "Goshala",
      description: "he Goshala was donated by Sant Rajgiri baba to us in 2014 with 6 cows. Presently 21 Nimari breed cows..",
      image: "https://www.narmadalaya.org/main/img/goshala/goshala.jpg",
      link: "#"
    },
    {
      icon: Camera,
      title: "Narmada Swar Lahri",
      description: "Narmada Swar Lahari is a musical orchestra of students of Ramkrishna Sarda Niketan. They are...",
      image: "https://www.narmadalaya.org/main/img/lahari/lahri.jpg",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            <span>Our Activities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Making a Difference Through 
            <span className="text-orange-600"> NARMADALAYA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Nimar Abhyudaya began it’s work in the rural area of Nimar Region of Madhya Pradesh specially in the Narmada basin in 2010. Since then, it’s activities have expanded many folds.
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
