
import { Helmet } from 'react-helmet-async';
import { Mail, Linkedin, Phone, Award, Users, Heart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Rajesh Sharma",
      position: "Executive Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bio: "Leading Narmadalaya with 20+ years of experience in social development and education.",
      email: "rajesh@narmadalaya.org",
      phone: "+91 98765 43210",
      achievements: ["PhD in Social Work", "25 Years NGO Experience", "Published Author"]
    },
    {
      name: "Mrs. Priya Patel",
      position: "Program Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bio: "Expert in program management and community development with focus on education and women empowerment.",
      email: "priya@narmadalaya.org",
      phone: "+91 98765 43211",
      achievements: ["Masters in Development Studies", "15 Years Field Experience", "Women Empowerment Specialist"]
    },
    {
      name: "Mr. Amit Kumar",
      position: "Education Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bio: "Passionate educator dedicated to providing quality education to underprivileged children.",
      email: "amit@narmadalaya.org",
      phone: "+91 98765 43212",
      achievements: ["M.Ed in Educational Leadership", "Teacher Training Expert", "Curriculum Development"]
    },
    {
      name: "Dr. Meera Singh",
      position: "Healthcare Coordinator",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bio: "Medical professional ensuring healthcare reaches the most vulnerable communities.",
      email: "meera@narmadalaya.org",
      phone: "+91 98765 43213",
      achievements: ["MBBS, MD Community Medicine", "Rural Healthcare Expert", "Public Health Specialist"]
    },
    {
      name: "Mr. Suresh Gupta",
      position: "Finance Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bio: "Ensuring financial transparency and efficient resource management for maximum impact.",
      email: "suresh@narmadalaya.org",
      phone: "+91 98765 43214",
      achievements: ["CA, CFA", "NGO Finance Expert", "Audit & Compliance Specialist"]
    },
    {
      name: "Ms. Kavya Joshi",
      position: "Communications Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bio: "Spreading awareness about our mission and connecting with supporters worldwide.",
      email: "kavya@narmadalaya.org",
      phone: "+91 98765 43215",
      achievements: ["Masters in Mass Communication", "Digital Marketing Expert", "PR Specialist"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Meet our dedicated team members working tirelessly to serve communities and create positive change." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Dedicated Professionals Committed to Social Change
              </p>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-orange-500 p-4 rounded-full mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-500 p-4 rounded-full mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
                <p className="text-gray-600">Years Combined Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-500 p-4 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">25,000+</h3>
                <p className="text-gray-600">Lives Impacted Together</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Our <span className="text-orange-600">Leadership Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team brings together expertise from various fields, united by a common 
                passion for creating positive social impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-3">
                        <a href={`mailto:${member.email}`} className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                          <Mail className="h-4 w-4" />
                        </a>
                        <a href={`tel:${member.phone}`} className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                          <Phone className="h-4 w-4" />
                        </a>
                        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors cursor-pointer">
                          <Linkedin className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-orange-600 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Join Our Team CTA */}
            <div className="mt-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-xl mb-6 opacity-90">
                Are you passionate about making a difference? We're always looking for dedicated individuals to join our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Open Positions
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-all">
                  Volunteer With Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;
