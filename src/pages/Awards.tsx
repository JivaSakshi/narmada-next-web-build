import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Trophy, Medal, Star, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import award1 from "../assets/images/award/Guru_Gourav_Puraskar.jpg";
import award2 from "../assets/images/award/Jalgaon_Award.jpg";
import award3 from "../assets/images/award/nanded_award.jpg";
import award4 from "../assets/images/award/Vasantrao_Pawar_Award.jpg";
import award5 from "../assets/images/award/keshav_smrati_award.jpg";
import award6 from "../assets/images/award/Award_Natu_Foundation.jpg";


const Awards = () => {
  const awards = [
    {
      id: "ngo-excellence-2024",
      title: "Guru Gourav Puraskar",
      organization: "by Maatru Mandir Vishwast Sanstha",
      year: "2021",
      location: "Pune, Maharashtra",
      description: "Awarded for innovative educational programs and digital literacy initiatives at RKSN School",
      category: "Excellence",
      icon: Trophy,
      image: award1,
      featured: true
    },
    {
      id: "educational-initiative-2023",
      title: "Avinashi Award in Memory of Dr. Avinash Acharya",
      organization: "by Keshav smrati Pratishthaan",
      year: "2020",
      location: "Jalgaon, Maharashtra",
      description: "Awarded for innovative educational programs and digital literacy initiatives at RKSN School",
      category: "Education",
      icon: Award,
      image: award2,
      featured: false
    },
    {
      id: "social-impact-2023",
      title: "Jankalyan Samiti Maharashtra - Shri Guruji Rashtriya Puraskar",
      organization: "Rotary Club International",
      year: "2023",
      location: "Nashik, Maharashtra",
      description: "Honored for significant social impact in healthcare and community welfare programs",
      category: "Social Impact",
      icon: Medal,
      image: award3,
      featured: false
    },
    {
      id: "social-impact-2024",
      title: "Dr. Vasantrao Pawar Award in memory of Dr. Vasantrav Pawar",
      organization: "by Nilvasant Foundation",
      year: "2019",
      location: "Nasik, Maharashtra",
      description: "Recognized for tree plantation drives and environmental conservation efforts",
      category: "Environment",
      icon: Star,
      image: award4,
      featured: false
    },
    {
      id: "social-impact-2026",
      title: "Vasundhara Krutagyata Award",
      organization: "by Omkar Trust",
      year: "2019",
      location: "Pune, Maharashtra",
      description: "Awarded for exceptional work in rural development and women empowerment programs",
      category: "Development",
      icon: Award,
      image: award5,
      featured: false
    },
    {
      id: "social-impact-2028",
      title: "Mahadev Balwant Natu Award",
      organization: "Natu Foundation",
      year: "2019",
      location: "Pune, Maharashtra",
      description: "Honored for providing free healthcare services and conducting medical camps in remote areas",
      category: "Healthcare",
      icon: Medal,
      image: award6,
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
  <Card
    key={index}
    className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stagger-animation ${award.featured ? 'ring-2 ring-orange-500' : ''}`}
  >
    <CardContent className="p-0">
      <div className="flex flex-col">
        <div className="relative">
          <img
            src={award.image}
            alt={award.title}
            className="w-full h-80 object-cover rounded-t-lg"
          />
          {award.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Latest
              </span>
            </div>
          )}
        </div>
        <div className="p-8">
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

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{award.location}</span>
            </div>

            {award.id && (
              <Link to={`/awards/${award.id}`}>
                <Button variant="outline" size="sm" className="text-orange-600 border-orange-600 hover:bg-orange-50">
                  View Details
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            )}
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
              <Link to="/donation">
                <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 font-semibold">
                  Support Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Awards;
