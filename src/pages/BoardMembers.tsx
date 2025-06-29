
import { Helmet } from 'react-helmet-async';
import { Award, Users, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const BoardMembers = () => {
  const boardMembers = [
    {
      name: "Dr. Ravi Krishnamurthy",
      position: "Chairman",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bio: "Renowned social activist and former IAS officer with 35+ years of public service experience.",
      qualifications: ["IAS (Retd.)", "PhD Public Administration", "Padma Shri Awardee"],
      expertise: "Public Policy & Governance"
    },
    {
      name: "Mrs. Sunita Agarwal",
      position: "Vice Chairperson",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bio: "Leading entrepreneur and philanthropist dedicated to women's empowerment and education.",
      qualifications: ["MBA Harvard", "Women Entrepreneur Award", "Social Impact Leader"],
      expertise: "Women Empowerment & Education"
    },
    {
      name: "Dr. Manjeet Singh",
      position: "Secretary",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bio: "Medical professional and researcher committed to healthcare accessibility in rural areas.",
      qualifications: ["MBBS, MD", "Public Health Specialist", "WHO Consultant"],
      expertise: "Healthcare & Rural Development"
    },
    {
      name: "Mr. Arjun Mehta",
      position: "Treasurer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bio: "Chartered Accountant and financial expert ensuring transparency and accountability.",
      qualifications: ["CA, CFA", "Financial Analyst", "Audit Expert"],
      expertise: "Financial Management & Compliance"
    },
    {
      name: "Prof. Deepika Sharma",
      position: "Education Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bio: "Former university professor and education policy expert with focus on inclusive education.",
      qualifications: ["PhD Education", "Former Vice Chancellor", "Education Policy Expert"],
      expertise: "Educational Strategy & Policy"
    },
    {
      name: "Mr. Vikram Joshi",
      position: "Legal Advisor",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bio: "Senior advocate specializing in social justice and human rights law.",
      qualifications: ["LLM Human Rights", "Senior Advocate", "Human Rights Activist"],
      expertise: "Legal Affairs & Human Rights"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Board Members - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Meet the dedicated board members of Narmadalaya Charitable Trust who guide our mission and vision." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Board of Directors</h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Visionary Leaders Guiding Our Mission Forward
              </p>
            </div>
          </div>
        </section>

        {/* Board Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leadership & <span className="text-orange-600">Governance</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our Board of Directors comprises distinguished individuals from diverse backgrounds, 
                bringing together decades of experience in public service, business, education, and social work. 
                They provide strategic guidance and ensure our organization maintains the highest standards 
                of governance and impact.
              </p>
            </div>

            {/* Board Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="text-center bg-white rounded-lg shadow-lg p-6">
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">6</h3>
                <p className="text-gray-600">Board Members</p>
              </div>
              <div className="text-center bg-white rounded-lg shadow-lg p-6">
                <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">150+</h3>
                <p className="text-gray-600">Years Combined Experience</p>
              </div>
              <div className="text-center bg-white rounded-lg shadow-lg p-6">
                <Briefcase className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">5</h3>
                <p className="text-gray-600">Industry Sectors</p>
              </div>
              <div className="text-center bg-white rounded-lg shadow-lg p-6">
                <GraduationCap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">10+</h3>
                <p className="text-gray-600">Advanced Degrees</p>
              </div>
            </div>

            {/* Board Members Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {member.position}
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-orange-600 font-medium mb-3">{member.expertise}</p>
                    <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Qualifications:</h4>
                      <ul className="space-y-1">
                        {member.qualifications.map((qualification, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                            {qualification}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Governance Information */}
            <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Governance & <span className="text-orange-600">Transparency</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Board Meetings</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Quarterly board meetings</li>
                    <li>• Annual strategic planning sessions</li>
                    <li>• Regular committee meetings</li>
                    <li>• Annual general meetings</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Committees</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Finance & Audit Committee</li>
                    <li>• Program Review Committee</li>
                    <li>• Human Resources Committee</li>
                    <li>• Strategic Planning Committee</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-6">
                  Our board ensures full transparency and accountability in all operations. 
                  Annual reports and financial statements are available for public review.
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                  View Annual Reports
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BoardMembers;
