
import { Helmet } from 'react-helmet-async';
import { Mail, Linkedin, Phone, Award, Users, Heart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import team1 from "../assets/images/board/digvijay_singh_chouhan.png";
import team2 from "../assets/images/board/nilesh.png";
import team3 from "../assets/images/board/golu.png";
import team4 from "../assets/images/board/hemandra.png";
import team5 from "../assets/images/board/shankar.png";
import team6 from "../assets/images/board/jitendra.png";


const Team = () => {
  const teamMembers = [
    {
      name: "Mr. Digvijay Singh Chouhan",
      position: "Chief Project Coordinator",
      image: team1,
      bio: "Looks after Construction and Administration",
      email: "digvijay@narmadalaya.org",
      phone: "+91 00000 00000"
    },
    {
      name: "Mr. Nilesh Giri",
      position: "Program Coordinator",
      image: team2,
      bio: "Software Developer",
      email: "nilesh@narmadalaya.org",
      phone: "+91 00000 00000",    },
    {
      name: "Mr. Golu Kewat",
      position: "Coordinator",
      image: team3,
      bio: "Hospitality Management and supervision of mid-day meals",
      email: "golu@narmadalaya.org",
      phone: "+91 00000 00000",
    },
    {
      name: "Mr. Hemandra Rathor",
      position: "Healthcare Coordinator",
      image: team4,
      bio: "Warden and Teacher",
      email: "Hemandra@narmadalaya.org",
      phone: "+91 00000 00000",
    },
    {
      name: "Mr. Shankar Kewat",
      position: "Coordinator",
      image: team5,
      bio: "Fabrication of shades and electrical maintenance",
      email: "shankar@narmadalaya.org",
      phone: "+91 00000 00000",
    },
    {
      name: "Mr. Jitendra Kewat",
      position: "Coordinator",
      image: team6,
      bio: "Construction and Maintenance",
      email: "jitendra@narmadalaya.org",
      phone: "+91 00000 00000",
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
        <section className="relative py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Dedicated Professionals Committed to Social Change
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* Team Stats */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center animate-slide-up stagger-animation">
                <div className="bg-orange-500 p-4 rounded-full mb-4 hover-glow">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div className="flex flex-col items-center animate-slide-up stagger-animation">
                <div className="bg-orange-500 p-4 rounded-full mb-4 hover-glow">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
                <p className="text-gray-600">Years Combined Experience</p>
              </div>
              <div className="flex flex-col items-center animate-slide-up stagger-animation">
                <div className="bg-orange-500 p-4 rounded-full mb-4 hover-glow">
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
            <div className="text-center mb-16 animate-fade-in">
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
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden hover-lift stagger-animation">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
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
                    
                    {/* <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div> */}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Join Our Team CTA */}
            <div className="mt-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white text-center animate-scale-in">
              <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-xl mb-6 opacity-90">
                Are you passionate about making a difference? We're always looking for dedicated individuals to join our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
                  View Open Positions
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
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
