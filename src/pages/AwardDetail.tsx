
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy, Award, Medal, Star, Calendar, MapPin, Users, Target } from 'lucide-react';

const AwardDetail = () => {
  const { id } = useParams();

  const awards = [
    {
      id: "ngo-excellence-2024",
      title: "NGO Excellence Award 2024",
      organization: "Maharashtra NGO Federation",
      year: "2024",
      location: "Mumbai, Maharashtra",
      date: "March 15, 2024",
      description: "Recognized for outstanding contribution to education and community development in rural areas. This prestigious award acknowledges our comprehensive approach to social welfare and our impact on over 10,000 beneficiaries across Maharashtra.",
      category: "Excellence",
      icon: Trophy,
      mainImage: "/placeholder.svg",
      galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      criteria: "Evaluated based on impact assessment, sustainability, innovation, and community engagement",
      impact: "Recognition led to increased funding and partnerships with 5 new corporate sponsors",
      featured: true,
      fullDescription: "The NGO Excellence Award 2024 was presented to Narmadalaya Charitable Trust in recognition of our outstanding contribution to education and community development in rural Maharashtra. This award represents the culmination of 6 years of dedicated service to underprivileged communities, particularly in the areas of education, healthcare, and women empowerment. Our innovative approach to rural development, combined with sustainable practices and measurable impact, set us apart from over 200 competing organizations. The award ceremony was attended by government officials, corporate leaders, and fellow NGOs, creating valuable networking opportunities for future collaborations."
    },
    {
      id: "educational-initiative-2023",
      title: "Best Educational Initiative Award",
      organization: "Education Ministry, Government of Maharashtra",
      year: "2023",
      location: "Pune, Maharashtra",
      date: "November 20, 2023",
      description: "Awarded for innovative educational programs and digital literacy initiatives at RKSN School",
      category: "Education",
      icon: Award,
      mainImage: "/placeholder.svg",
      galleryImages: ["/placeholder.svg", "/placeholder.svg"],
      criteria: "Innovation in teaching methods, student outcomes, and community impact",
      impact: "Led to adoption of our digital literacy model by 3 other schools in the district",
      featured: false,
      fullDescription: "This award recognizes our groundbreaking work in transforming rural education through technology integration and innovative teaching methodologies at RKSN School."
    },
    {
      id: "social-impact-2023",
      title: "Social Impact Recognition",
      organization: "Rotary Club International",
      year: "2023",
      location: "Nashik, Maharashtra",
      date: "August 10, 2023",
      description: "Honored for significant social impact in healthcare and community welfare programs",
      category: "Social Impact",
      icon: Medal,
      mainImage: "/placeholder.svg",
      galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      criteria: "Measurable social impact, community participation, and sustainable practices",
      impact: "Facilitated partnerships with international Rotary clubs for funding support",
      featured: false,
      fullDescription: "Recognition from Rotary Club International for our comprehensive healthcare initiatives and community welfare programs that have touched thousands of lives."
    }
  ];

  const award = awards.find(a => a.id === id);

  if (!award) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Award Not Found</h1>
          <Link to="/awards">
            <Button className="bg-orange-500 hover:bg-orange-600">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Awards
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{award.title} - Narmadalaya Charitable Trust</title>
        <meta name="description" content={award.description} />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4">
            <Link to="/awards" className="inline-flex items-center text-white hover:text-orange-200 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Awards
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <award.icon className="h-8 w-8 text-white" />
                </div>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  {award.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{award.title}</h1>
              <p className="text-xl opacity-90 mb-6">{award.organization}</p>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{award.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{award.location}</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 mr-2" />
                  <span>{award.year}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Main Image */}
                <div className="mb-8">
                  <img 
                    src={award.mainImage} 
                    alt={award.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Description */}
                <Card className="mb-8">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Award</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {award.fullDescription}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {award.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Award Criteria */}
                <Card className="mb-8">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Award Criteria</h2>
                    <div className="flex items-start space-x-3">
                      <Target className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-600">{award.criteria}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Impact */}
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact & Recognition</h2>
                    <div className="flex items-start space-x-3">
                      <Users className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-600">{award.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Award Info */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Award Details</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-500">Category</div>
                        <div className="font-medium">{award.category}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Year</div>
                        <div className="font-medium">{award.year}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Organization</div>
                        <div className="font-medium">{award.organization}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Location</div>
                        <div className="font-medium">{award.location}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Date</div>
                        <div className="font-medium">{award.date}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Gallery */}
                {award.galleryImages && award.galleryImages.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Gallery</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {award.galleryImages.map((image, index) => (
                          <img 
                            key={index}
                            src={image} 
                            alt={`${award.title} ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Awards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Other Awards</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards.filter(a => a.id !== id).slice(0, 3).map((relatedAward) => (
                <Card key={relatedAward.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-orange-500 p-2 rounded-full">
                        <relatedAward.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-orange-600">{relatedAward.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{relatedAward.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{relatedAward.description}</p>
                    <Link to={`/awards/${relatedAward.id}`}>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AwardDetail;
