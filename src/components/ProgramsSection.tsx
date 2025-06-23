
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, TreePine, Users, Award, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const ProgramsSection = () => {

const programs = [
  {
    icon: GraduationCap,
    title: "Narmadalaya",
    description: "Narmadalaya is a spiritually inspired service mission dedicated to uplifting rural communities in the Nimar Region. Since 2010, we provide free formal and non-formal education from preschool to high school across 15 villages. We empower local women as educators and promote vocational skills, health awareness, and environmental responsibility for sustainable development.",
    image: "https://www.narmadalaya.org/main/img/narmadalaya_home.jpg",
    link: "#"
  },
  {
    icon: Heart,
    title: "Ramkrishna Sarda Niketan",
    description: "Ramkrishna Sarda Niketan was started at Lepa Punarvas in April 2015 to provide quality education to children from economically weaker sections. With branches at Bhattyan and Chhoti Khargone, the school offers free education, vocational training, meals, and uniforms. Our students excel in academics, sports, music, and vocational skills.",
    image: "https://www.narmadalaya.org/main/img/rksn/rksn.jpg",
    link: "#"
  },
  {
    icon: TreePine,
    title: "VIVEKANANDA INSTITUTE OF RURAL TECHNOLOGY (VIRT)",
    description: "VIRT was established at Lepa Punarvas in May 2015 as a Rural Technology Training Center. We offer a two-year diploma in Basic Rural Technology affiliated with NIOS. Our program provides practical skills to rural youth, with 10 students currently undergoing training in sustainable rural technologies.",
    image: "https://www.narmadalaya.org/main/img/rit/rit.jpg",
    link: "#"
  },
  {
    icon: Users,
    title: "Narmada Nirmiti",
    description: "Narmada Nirmiti was launched in 2015 to support widows and deserted women through tailoring training. 25 women have earned diplomas and gained self-reliance. The unit now produces quilts and garments and participates in exhibitions across Maharashtra, empowering women through skill-building and financial independence.",
    image: "https://www.narmadalaya.org/main/img/nirmiti/3.png",
    link: "#"
  },
  {
    icon: Award,
    title: "Goshala",
    description: "The Goshala, donated by Sant Rajgiri Baba in 2014, now shelters 31 cows supporting the milk needs of our students. We promote sustainable farming through a gobar gas plant, vermi compost, organic farming, and hydroponics. This reflects our commitment to rural development and eco-friendly practices.",
    image: "https://www.narmadalaya.org/main/img/goshala/goshala.jpg",
    link: "#"
  },
  {
    icon: Camera,
    title: "Narmada Swar Lahri",
    description: "Narmada Swar Lahri is a student orchestra trained by classical singer Mrs. Shubhada Marathe. They perform Sanskrit stotras, folk songs, and awareness pieces on Narmada conservation. The group has performed at RBI Mumbai, Bharatiya Vidya Bhavan, and Rally for Rivers, showcasing rich local culture.",
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
