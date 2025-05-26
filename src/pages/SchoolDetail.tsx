
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, Award, MapPin, Phone, Mail, Calendar, Clock, TrendingUp, Heart } from 'lucide-react';

const SchoolDetail = () => {
  const schoolInfo = {
    name: "Raja Kiran Shikshan Niketan (RKSN) School",
    established: "2018",
    location: "Village Narmada, Tal. Sangamner, Dist. Ahmednagar, Maharashtra - 422605",
    phone: "+91 9876543210",
    email: "info@rksnschool.org",
    principal: "Mrs. Sunita Sharma",
    students: "350+",
    teachers: "25",
    classrooms: "15",
    passRate: "100%"
  };

  const facilities = [
    {
      icon: BookOpen,
      title: "Smart Classrooms",
      description: "15 well-equipped classrooms with smart boards, projectors, and digital learning tools for interactive education",
      image: "/placeholder.svg"
    },
    {
      icon: Users,
      title: "Computer Laboratory",
      description: "Modern computer lab with 25 workstations, high-speed internet, and latest software for digital literacy",
      image: "/placeholder.svg"
    },
    {
      icon: Award,
      title: "Science Laboratories",
      description: "Fully equipped physics, chemistry, and biology labs with modern equipment for hands-on learning",
      image: "/placeholder.svg"
    },
    {
      icon: GraduationCap,
      title: "Central Library",
      description: "Extensive collection of 5000+ books, journals, digital resources, and quiet study areas",
      image: "/placeholder.svg"
    },
    {
      icon: Users,
      title: "Sports Complex",
      description: "Multi-purpose sports ground for cricket, football, volleyball, and indoor games facility",
      image: "/placeholder.svg"
    },
    {
      icon: Heart,
      title: "Medical Room",
      description: "Dedicated health care facility with trained nurse and first aid equipment for student safety",
      image: "/placeholder.svg"
    }
  ];

  const programs = [
    {
      title: "Primary Education (1st - 5th Grade)",
      description: "Foundation learning with focus on basic literacy, numeracy, life skills, and moral values using innovative teaching methods",
      students: "180",
      subjects: ["Mathematics", "English", "Hindi", "Marathi", "Environmental Studies", "Arts & Crafts"],
      icon: BookOpen,
      image: "/placeholder.svg"
    },
    {
      title: "Secondary Education (6th - 10th Grade)",
      description: "Comprehensive curriculum preparing students for board examinations with emphasis on conceptual understanding",
      students: "120",
      subjects: ["Science", "Mathematics", "English", "Hindi", "Marathi", "Social Studies", "Computer Science"],
      icon: GraduationCap,
      image: "/placeholder.svg"
    },
    {
      title: "Skill Development Program",
      description: "Vocational training in computer skills, handicrafts, entrepreneurship, and personality development",
      students: "50",
      subjects: ["Computer Applications", "Handicrafts", "Entrepreneurship", "Communication Skills"],
      icon: Users,
      image: "/placeholder.svg"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "100% Pass Rate Achievement",
      description: "All 45 students of Class X successfully passed Maharashtra State Board examinations with flying colors. 15 students scored above 90%.",
      icon: Trophy,
      image: "/placeholder.svg"
    },
    {
      year: "2023",
      title: "Best Rural School Award",
      description: "Recognized as the best rural school in Ahmednagar district by District Education Officer for excellence in education and infrastructure.",
      icon: Award,
      image: "/placeholder.svg"
    },
    {
      year: "2022",
      title: "Digital Learning Pioneer",
      description: "First school in the region to implement comprehensive digital learning program, serving as a model for other rural schools.",
      icon: GraduationCap,
      image: "/placeholder.svg"
    }
  ];

  const dailySchedule = [
    { time: "7:30 AM", activity: "School Assembly & Prayer" },
    { time: "8:00 AM", activity: "First Period Begins" },
    { time: "10:30 AM", activity: "Morning Break" },
    { time: "11:00 AM", activity: "Classes Resume" },
    { time: "1:00 PM", activity: "Lunch Break" },
    { time: "2:00 PM", activity: "Afternoon Classes" },
    { time: "4:00 PM", activity: "Extra-curricular Activities" },
    { time: "5:00 PM", activity: "School Ends" }
  ];

  return (
    <>
      <Helmet>
        <title>RKSN School Details - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Detailed information about Raja Kiran Shikshan Niketan School, our educational programs, facilities, and achievements." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 animate-fade-in">{schoolInfo.name}</h1>
              <p className="text-xl opacity-90 mb-8 animate-slide-up">
                Empowering rural children through quality education and holistic development since {schoolInfo.established}
              </p>
              <div className="grid md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">{schoolInfo.students}</div>
                  <div className="text-sm opacity-90">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{schoolInfo.teachers}</div>
                  <div className="text-sm opacity-90">Teachers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{schoolInfo.classrooms}</div>
                  <div className="text-sm opacity-90">Classrooms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{schoolInfo.passRate}</div>
                  <div className="text-sm opacity-90">Pass Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* School Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our School</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Raja Kiran Shikshan Niketan (RKSN) School stands as a beacon of hope in rural Maharashtra, 
                  providing quality education to children from economically disadvantaged families. Established 
                  in {schoolInfo.established}, our school has been transforming lives through innovative teaching 
                  methods and modern infrastructure.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We believe every child deserves access to quality education regardless of their economic background. 
                  Our dedicated faculty, state-of-the-art facilities, and comprehensive curriculum ensure students 
                  receive the best possible learning experience while developing strong moral values.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">Established</div>
                    <div className="text-gray-600">{schoolInfo.established}</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">Principal</div>
                    <div className="text-gray-600">{schoolInfo.principal}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="RKSN School Campus"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Contact Information */}
            <Card className="mb-16">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Address</div>
                      <div className="text-gray-600">{schoolInfo.location}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Phone</div>
                      <div className="text-gray-600">{schoolInfo.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">{schoolInfo.email}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Educational Programs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Educational Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive education programs designed to nurture academic excellence and character development
              </p>
            </div>

            <div className="space-y-12">
              {programs.map((program, index) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-orange-500 p-3 rounded-full">
                          <program.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{program.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-orange-50 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-orange-600">{program.students}</div>
                          <div className="text-sm text-gray-600">Students Enrolled</div>
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-orange-600">{program.subjects.length}</div>
                          <div className="text-sm text-gray-600">Subjects Offered</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Subjects:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.subjects.map((subject, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">World-Class Facilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern infrastructure and facilities designed to support holistic education and development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={facility.image} 
                      alt={facility.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-orange-500 p-2 rounded-full">
                        <facility.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{facility.title}</h3>
                    </div>
                    <p className="text-gray-600">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Schedule */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Daily Schedule</h2>
                <p className="text-xl text-gray-600">
                  A well-structured day designed to balance academics, activities, and personal development
                </p>
              </div>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {dailySchedule.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2 text-orange-600 font-bold min-w-20">
                          <Clock className="h-4 w-4" />
                          <span>{item.time}</span>
                        </div>
                        <div className="text-gray-900 font-medium">{item.activity}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Achievements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recognition of our commitment to educational excellence and student success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-orange-600 mb-2">{achievement.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Visit RKSN School</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Experience our commitment to quality education firsthand. Schedule a visit to see our facilities and meet our dedicated team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3">
                Schedule a Visit
              </Button>
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3">
                Admission Enquiry
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SchoolDetail;
