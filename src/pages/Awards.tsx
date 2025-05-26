
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Medal, Star, Calendar, MapPin } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "NGO Excellence Award 2024",
      organization: "Maharashtra NGO Federation",
      year: "2024",
      location: "Mumbai, Maharashtra",
      description: "Recognized for outstanding contribution to education and community development in rural areas",
      category: "Excellence",
      icon: Trophy,
      image: "/placeholder.svg",
      featured: true
    },
    {
      title: "Best Educational Initiative Award",
      organization: "Education Ministry, Government of Maharashtra",
      year: "2023",
      location: "Pune, Maharashtra",
      description: "Awarded for innovative educational programs and digital literacy initiatives at RKSN School",
      category: "Education",
      icon: Award,
      image: "/placeholder.svg",
      featured: false
    },
    {
      title: "Social Impact Recognition",
      organization: "Rotary Club International",
      year: "2023",
      location: "Nashik, Maharashtra",
      description: "Honored for significant social impact in healthcare and community welfare programs",
      category: "Social Impact",
      icon: Medal,
      image: "/placeholder.svg",
      featured: false
    },
    {
      title: "Environmental Conservation Award",
      organization: "Green India Foundation",
      year: "2022",
      location: "Aurangabad, Maharashtra",
      description: "Recognized for tree plantation drives and environmental conservation efforts",
      category: "Environment",
      icon: Star,
      image: "/placeholder.svg",
      featured: false
    },
    {
      title: "Rural Development Excellence",
      organization: "District Collector's Office",
      year: "2022",
      location: "Ahmednagar, Maharashtra",
      description: "Awarded for exceptional work in rural development and women empowerment programs",
      category: "Development",
      icon: Award,
      image: "/placeholder.svg",
      featured: false
    },
    {
      title: "Healthcare Service Award",
      organization: "Medical Association of Maharashtra",
      year: "2021",
      location: "Nagpur, Maharashtra",
      description: "Honored for providing free healthcare services and conducting medical camps in remote areas",
      category: "Healthcare",
      icon: Medal,
      image: "/placeholder.svg",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Excellence: "bg-yellow-100 text-yellow-800",
      Education: "bg-blue-100 text-blue-800",
      "Social Impact": "bg-purple-100 text-purple-800",
      Environment: "bg-green-100 text-green-800",
      Development: "bg-indigo-100 text-indigo-800",
      Healthcare: "bg-red-100 text-red-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <>
      <Helmet>
        <title>Awards - Narmadalaya Charitable Trust</title>
        <meta name="description" content="View the awards and recognition received by Narmadalaya Charitable Trust for our social impact and community service." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Awards & Recognition</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto animate-slide-up">
              Celebrating our journey of making a positive impact in communities across Maharashtra
            </p>
          </div>
        </section>

        {/* Awards Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Achievements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These awards recognize our commitment to creating lasting positive change and our dedication to serving communities
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stagger-animation ${award.featured ? 'ring-2 ring-orange-500' : ''}`}>
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <div className="relative">
                          <img 
                            src={award.image} 
                            alt={award.title}
                            className="w-full h-64 md:h-full object-cover"
                          />
                          {award.featured && (
                            <div className="absolute top-4 left-4">
                              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                Latest
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="md:w-2/3 p-8">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="bg-orange-500 p-2 rounded-full">
                              <award.icon className="h-5 w-5 text-white" />
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(award.category)}`}>
                              {award.category}
                            </span>
                          </div>
                          <div className="text-2xl font-bold text-orange-600">{award.year}</div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{award.title}</h3>
                        <p className="text-lg text-orange-600 font-medium mb-4">{award.organization}</p>
                        <p className="text-gray-600 mb-4">{award.description}</p>
                        
                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{award.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-16">Recognition Impact</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-orange-50 p-8 rounded-lg">
                <Trophy className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
                <div className="text-gray-700">Major Awards</div>
              </div>
              
              <div className="bg-orange-50 p-8 rounded-lg">
                <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                <div className="text-gray-700">Years Recognized</div>
              </div>
              
              <div className="bg-orange-50 p-8 rounded-lg">
                <Medal className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
                <div className="text-gray-700">Categories</div>
              </div>
              
              <div className="bg-orange-50 p-8 rounded-lg">
                <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-700">Credibility</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Award-Winning Mission</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              These awards motivate us to continue our work with even greater dedication. 
              Join us in creating more success stories and positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Support Our Mission
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-all">
                Become a Volunteer
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Awards;
