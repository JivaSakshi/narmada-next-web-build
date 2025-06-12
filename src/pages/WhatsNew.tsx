
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { CalendarCheck, Bell, Heart, Users, GraduationCap, TreePine } from 'lucide-react';
import whatsNew1 from "../assets/images/board/jitendra.png";
import whatsNew2 from "../assets/images/board/jitendra.png";
import whatsNew3 from "../assets/images/board/jitendra.png";
import whatsNew4 from "../assets/images/board/jitendra.png";
import whatsNew5 from "../assets/images/board/jitendra.png";
import whatsNew6 from "../assets/images/board/jitendra.png";


const WhatsNew = () => {
  const updates = [
    {
      date: "December 15, 2024",
      category: "Education",
      icon: GraduationCap,
      title: "Three schools at lepa punarwas, bhattiyan and chhoti khargone",
      description: "We are excited to announce the opening of a state-of-the-art computer lab with 25 new computers, providing digital literacy education to over 300 students.",
      image: "/placeholder.svg",
      important: true
    },
    {
      date: "November 28, 2024",
      category: "Healthcare",
      icon: Heart,
      title: "Vivekananda institute of rural technology - vocational training centre",
      description: "Our medical team conducted a comprehensive health camp in 5 villages, providing free medical checkups and medicines to over 500 families.",
      image: "/placeholder.svg",
      important: false
    },
    {
      date: "November 10, 2024",
      category: "Environment",
      icon: TreePine,
      title: "Narmadalaya fablab - digital fabrication lab",
      description: "In collaboration with local communities, we successfully planted 1000 trees across different locations, contributing to environmental conservation.",
      image: "/placeholder.svg",
      important: false
    },
    {
      date: "October 25, 2024",
      category: "Community",
      icon: Users,
      title: "Skills on wheels - mobile vocation training van ",
      description: "Started a series of skill development workshops for women, focusing on tailoring, handicrafts, and entrepreneurship development.",
      image: "/placeholder.svg",
      important: true
    },
    {
      date: "October 12, 2024",
      category: "Education",
      icon: GraduationCap,
      title: "Goushala ",
      description: "Launched a scholarship program providing financial assistance to 50 deserving students from economically weaker sections.",
      image: "/placeholder.svg",
      important: false
    },
    {
      date: "September 30, 2024",
      category: "Achievement",
      icon: Bell,
      title: "Narmada swar lahari",
      description: "Narmadalaya Charitable Trust was honored with the NGO Excellence Award for outstanding contribution to education and community development.",
      image: "/placeholder.svg",
      important: true
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Education: "bg-blue-100 text-blue-800",
      Healthcare: "bg-red-100 text-red-800",
      Environment: "bg-green-100 text-green-800",
      Community: "bg-purple-100 text-purple-800",
      Achievement: "bg-yellow-100 text-yellow-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <>
      <Helmet>
        <title>What's New - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Stay updated with the latest news, updates, and announcements from Narmadalaya Charitable Trust." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">What's New</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto animate-slide-up">
              Stay updated with our latest initiatives, achievements, and community impact stories
            </p>
          </div>
        </section>

        {/* Latest Updates */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Recent Updates</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Keep track of our ongoing projects, new initiatives, and community impact
              </p>
            </div>

            <div className="space-y-8">
              {updates.map((update, index) => (
                <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 stagger-animation ${update.important ? 'ring-2 ring-orange-500' : ''}`}>
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/3">
                        <img 
                          src={update.image} 
                          alt={update.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                      </div>
                      <div className="lg:w-2/3 p-8">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="bg-orange-500 p-2 rounded-full">
                              <update.icon className="h-5 w-5 text-white" />
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(update.category)}`}>
                              {update.category}
                            </span>
                            {update.important && (
                              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                                Important
                              </span>
                            )}
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <CalendarCheck className="h-4 w-4 mr-1" />
                            {update.date}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{update.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{update.description}</p>
                        
                        <div className="mt-6">
                          <button className="text-orange-600 hover:text-orange-700 font-medium transition-colors">
                            Read More →
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <Bell className="h-16 w-16 text-orange-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
              <p className="text-xl text-gray-600 mb-8">
                Subscribe to our newsletter to receive the latest updates and stories directly in your inbox
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhatsNew;
