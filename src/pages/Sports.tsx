
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Target, Users, Calendar, MapPin } from 'lucide-react';
import sports1 from "../assets/images/sports/marathon1.jpg";
import sports2 from "../assets/images/sports/marathon2.jpg";
import sports3 from "../assets/images/sports/marathon4.jpg";
import sports4 from "../assets/images/sports/marathon5.jpg";
import sports5 from "../assets/images/sports/marathon7.jpg";
import sports6 from "../assets/images/sports/marathon9.jpg";
import sports7 from "../assets/images/sports/marathon3.jpg";
import sports8 from "../assets/images/sports/marathon6.jpg";
import sports9 from "../assets/images/sports/marathon14.jpg";


const Sports = () => {
  const sportsPrograms = [
    {
      title: "Cricket Training",
      image: sports1
    },
    {
      title: "Football Academy",
      image: sports2
    },
    {
      title: "Athletics Program",
      image: sports3
    },
    {
      title: "Kabaddi Training",
      image: sports4
    },
    {
      title: "Kabaddi Training",
      image: sports5
    },
    {
      title: "Kabaddi Training",
      image: sports6
    },
    {
      title: "Kabaddi Training",
      image: sports7
    },
    {
      title: "Kabaddi Training",
      image: sports8
    },
    {
      title: "Kabaddi Training",
      image: sports9
    }
  ];

  const achievements = [
    {
      event: "District Level Cricket Championship",
      position: "Winners",
      year: "2024",
      venue: "Ahmednagar Sports Complex",
      participants: "School Cricket Team",
      icon: Trophy,
      type: "team"
    },
    {
      event: "Inter-School Football Tournament",
      position: "Runners-up",
      year: "2024",
      venue: "Sangamner Football Ground",
      participants: "School Football Team",
      icon: Medal,
      type: "team"
    },
    {
      event: "State Level Athletics Meet",
      position: "3rd Place in 100m",
      year: "2023",
      venue: "Pune Athletics Stadium",
      participants: "Rahul Patil (Class 10)",
      icon: Medal,
      type: "individual"
    },
    {
      event: "Regional Kabaddi Championship",
      position: "Semi-Finalists",
      year: "2023",
      venue: "Nashik Sports Arena",
      participants: "School Kabaddi Team",
      icon: Trophy,
      type: "team"
    }
  ];

  const upcomingEvents = [
    {
      title: "Annual Sports Day",
      date: "March 15, 2025",
      venue: "RKSN School Ground",
      description: "Inter-house competitions in various sports and athletics events"
    },
    {
      title: "District Cricket Tournament",
      date: "April 5-7, 2025",
      venue: "Ahmednagar Sports Complex",
      description: "Participation in district level cricket championship"
    },
    {
      title: "Summer Sports Camp",
      date: "May 1-31, 2025",
      venue: "School Campus",
      description: "Intensive training camp for all sports during summer vacation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sports - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Discover our sports programs and activities promoting physical fitness and sportsmanship in our community." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Sports & Athletics</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto animate-slide-up">
              Building character, teamwork, and physical fitness through comprehensive sports programs
            </p>
          </div>
        </section>

        {/* Sports Programs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Sports Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer diverse sports programs to help students develop physical fitness, discipline, and team spirit
              </p>
            </div>

<div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
  {sportsPrograms.map((program, index) => (
    <div key={index} className="break-inside-avoid overflow-hidden rounded-lg shadow-lg">
      <img 
        src={program.image} 
        alt={program.title}
        className="w-full h-auto object-cover rounded"
      />
    </div>
  ))}
</div>


          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sports Achievements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Celebrating the success of our talented athletes and sports teams
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 stagger-animation">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="bg-orange-500 p-3 rounded-full mr-4">
                          <achievement.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{achievement.event}</h3>
                          <p className="text-orange-600 font-medium">{achievement.position}</p>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-orange-600">{achievement.year}</span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{achievement.venue}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{achievement.participants}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sports Statistics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-16">Sports Impact</h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-orange-50 p-8 rounded-lg">
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-orange-600 mb-2">130</div>
                <div className="text-gray-700">Active Athletes</div>
              </div>

              <div className="bg-orange-50 p-8 rounded-lg">
                <Trophy className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
                <div className="text-gray-700">Tournaments Won</div>
              </div>

              <div className="bg-orange-50 p-8 rounded-lg">
                <Medal className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                <div className="text-gray-700">Sports Programs</div>
              </div>

              <div className="bg-orange-50 p-8 rounded-lg">
                <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
                <div className="text-gray-700">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Support Our Sports Programs</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Help us provide better sports facilities and training opportunities for our students
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white text-orange-600 hover:bg-white hover:text-orange-600 px-8 py-3">
                Sponsor Equipment
              </Button>
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3">
                Become a Coach
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sports;
