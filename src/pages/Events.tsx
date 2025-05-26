
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Charity Gala 2025",
      date: "February 14, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Hotel Grand Palace, Mumbai",
      description: "Join us for our annual fundraising gala featuring dinner, entertainment, and silent auction to support our education programs.",
      attendees: "200+",
      image: "/placeholder.svg",
      category: "Fundraising",
      featured: true
    },
    {
      title: "Community Health Camp",
      date: "January 25, 2025",
      time: "9:00 AM - 5:00 PM", 
      location: "Village Community Center, Nashik",
      description: "Free health checkups, medical consultations, and health awareness sessions for rural communities.",
      attendees: "500+",
      image: "/placeholder.svg",
      category: "Healthcare"
    },
    {
      title: "Tree Plantation Drive",
      date: "February 5, 2025",
      time: "7:00 AM - 11:00 AM",
      location: "Riverside Park, Pune",
      description: "Environmental conservation initiative to plant 500 trees with community volunteers.",
      attendees: "100+",
      image: "/placeholder.svg",
      category: "Environment"
    }
  ];

  const pastEvents = [
    {
      title: "Educational Workshop Series",
      date: "December 10, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "RKSN School Campus",
      description: "Teacher training workshop on modern educational techniques and digital learning methods.",
      attendees: "75",
      image: "/placeholder.svg",
      category: "Education"
    },
    {
      title: "Women Empowerment Seminar",
      date: "November 15, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Community Hall, Aurangabad",
      description: "Skill development and entrepreneurship workshop for women in rural areas.",
      attendees: "120",
      image: "/placeholder.svg",
      category: "Community"
    },
    {
      title: "Blood Donation Camp",
      date: "October 20, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "City Hospital, Nagpur",
      description: "Annual blood donation drive in partnership with local hospitals and blood banks.",
      attendees: "200",
      image: "/placeholder.svg",
      category: "Healthcare"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Education: "bg-blue-100 text-blue-800",
      Healthcare: "bg-red-100 text-red-800",
      Environment: "bg-green-100 text-green-800",
      Community: "bg-purple-100 text-purple-800",
      Fundraising: "bg-yellow-100 text-yellow-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <>
      <Helmet>
        <title>Events - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Discover upcoming events, community gatherings, and programs organized by Narmadalaya Charitable Trust." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Events & Programs</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto animate-slide-up">
              Join us in our mission to create positive change through community events and charitable programs
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't miss out on our upcoming events and be part of the positive change
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stagger-animation ${event.featured ? 'ring-2 ring-orange-500' : ''}`}>
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {event.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{event.attendees} Expected</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
                        Register Now
                      </Button>
                      <Button variant="outline" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Past Events</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Look back at our successful events and the impact we've made together
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 stagger-animation">
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{event.attendees} Attendees</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Be Part of Our Mission</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join our events and help us create lasting positive change in communities across Maharashtra
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3">
                Volunteer with Us
              </Button>
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3">
                Contact for Partnership
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Events;
