
import { Helmet } from 'react-helmet-async';
import { Calendar, Users, Award, Heart } from "lucide-react";

const History = () => {
  const milestones = [
    {
      year: "1999",
      title: "Foundation of Narmadalaya",
      description: "Narmadalaya Charitable Trust was established with a vision to serve humanity and uplift underprivileged communities.",
      icon: Heart
    },
    {
      year: "2005",
      title: "First Educational Initiative",
      description: "Launched our first school program, providing quality education to children in rural areas.",
      icon: Users
    },
    {
      year: "2010",
      title: "Community Health Programs",
      description: "Expanded our services to include comprehensive healthcare and wellness programs for rural communities.",
      icon: Calendar
    },
    {
      year: "2015",
      title: "Environmental Conservation",
      description: "Initiated large-scale environmental conservation projects including tree plantation drives.",
      icon: Award
    },
    {
      year: "2020",
      title: "Digital Education",
      description: "Adapted to digital platforms during the pandemic, ensuring continuous education for all students.",
      icon: Users
    },
    {
      year: "2024",
      title: "25 Years of Service",
      description: "Celebrating 25 years of dedicated service to humanity with over 25,000 lives impacted.",
      icon: Award
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our History - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Learn about the history and journey of Narmadalaya Charitable Trust - 25 years of dedicated service to humanity through education, healthcare, and community development." />
        <meta name="keywords" content="Narmadalaya history, charitable trust, NGO journey, community service, social impact" />
        <link rel="canonical" href="https://narmadalaya.org/history" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Journey</h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                25 Years of Dedicated Service to Humanity
              </p>
            </div>
          </div>
        </section>

        {/* History Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  A Legacy of <span className="text-orange-600">Compassion</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From humble beginnings to a thriving organization, our journey has been marked by 
                  unwavering commitment to serving those in need. Every milestone represents countless 
                  lives touched and communities transformed.
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex items-start space-x-8">
                      <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        <milestone.icon className="h-8 w-8" />
                      </div>
                      
                      <div className="flex-grow bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="text-2xl font-bold text-orange-600">{milestone.year}</span>
                          <div className="h-px bg-orange-200 flex-grow"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white text-center">
                <h3 className="text-3xl font-bold mb-4">Be Part of Our Continuing Story</h3>
                <p className="text-xl mb-6 opacity-90">
                  Join us as we write the next chapter of service, compassion, and positive change.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                    Get Involved
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-all">
                    Support Our Mission
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default History;
