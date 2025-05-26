import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, Award, MapPin, Phone, Mail, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const School = () => {
  const facilities = [
    {
      icon: BookOpen,
      title: "Modern Classrooms",
      description: "Well-equipped classrooms with smart boards and digital learning tools"
    },
    {
      icon: Users,
      title: "Computer Lab",
      description: "25 computers with high-speed internet for digital literacy programs"
    },
    {
      icon: Award,
      title: "Science Laboratory",
      description: "Fully equipped physics, chemistry, and biology labs for practical learning"
    },
    {
      icon: GraduationCap,
      title: "Library",
      description: "Extensive collection of books, journals, and digital resources"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "100% Pass Rate",
      description: "All students successfully passed their board examinations"
    },
    {
      year: "2023",
      title: "Best School Award",
      description: "Recognized as the best rural school in the district"
    },
    {
      year: "2022",
      title: "Digital Learning Pioneer",
      description: "First school in the region to implement comprehensive digital learning"
    }
  ];

  const programs = [
    {
      title: "Primary Education (1st - 5th Grade)",
      description: "Foundation learning with focus on basic literacy, numeracy, and life skills",
      students: "180",
      icon: BookOpen
    },
    {
      title: "Secondary Education (6th - 10th Grade)",
      description: "Comprehensive curriculum including science, mathematics, languages, and social studies",
      students: "120",
      icon: GraduationCap
    },
    {
      title: "Skill Development Program",
      description: "Vocational training in computer skills, crafts, and entrepreneurship",
      students: "50",
      icon: Users
    }
  ];

  return (
    <>
      <Helmet>
        <title>RKSN School - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Learn about RKSN School, our educational institution providing quality education to underprivileged children." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold mb-6 animate-fade-in">RKSN School</h1>
              <p className="text-xl opacity-90 mb-8 animate-slide-up">
                Empowering young minds through quality education and holistic development
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4">Established 2018</h3>
                <p className="text-lg opacity-90 mb-6">
                  Providing free quality education to 350+ students from underprivileged backgrounds
                </p>
                <Link to="/school-details">
                  <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 font-semibold">
                    Explore School Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* School Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About RKSN School</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Raja Kiran Shikshan Niketan (RKSN) School was established with the mission to provide 
                  quality education to children from economically disadvantaged families. Our school serves 
                  as a beacon of hope, transforming lives through education.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We believe that every child deserves access to quality education regardless of their 
                  economic background. Our dedicated faculty and modern infrastructure ensure that 
                  students receive the best possible learning experience.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">350+</div>
                    <div className="text-gray-600">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">25</div>
                    <div className="text-gray-600">Teachers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">15</div>
                    <div className="text-gray-600">Classrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">100%</div>
                    <div className="text-gray-600">Pass Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="animate-slide-in-right">
                <img 
                  src="/placeholder.svg" 
                  alt="RKSN School Building"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Educational Programs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Educational Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive education programs designed to nurture well-rounded individuals
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 stagger-animation">
                  <CardHeader className="text-center">
                    <div className="bg-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                      <program.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">{program.students}</div>
                      <div className="text-sm text-gray-600">Students Enrolled</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">School Facilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern infrastructure and facilities to support quality education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 stagger-animation">
                  <CardContent className="p-6">
                    <div className="bg-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                      <facility.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.title}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Achievements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recognizing our commitment to educational excellence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 stagger-animation">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">{achievement.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Visit RKSN School</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                We welcome visitors and encourage community involvement in our educational mission
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <p className="opacity-90">Village Narmada, Tal. Sangamner, Dist. Ahmednagar, Maharashtra - 422605</p>
              </div>
              
              <div className="text-center">
                <Phone className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="opacity-90">+91 9876543210</p>
              </div>
              
              <div className="text-center">
                <Mail className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="opacity-90">info@rksnschool.org</p>
              </div>
            </div>

            <div className="text-center mt-12 space-x-4">
              <Link to="/school-details">
                <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 font-semibold">
                  View Full Details
                </Button>
              </Link>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default School;
