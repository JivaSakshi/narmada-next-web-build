
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Eye, ArrowRight, Tag } from 'lucide-react';

const News = () => {
  const featuredNews = {
    title: "RKSN School Receives State Recognition for Digital Education Excellence",
    excerpt: "Our school has been recognized by the Maharashtra Education Department for outstanding implementation of digital learning programs...",
    content: "The Maharashtra Education Department has honored RKSN School with the Digital Education Excellence Award for 2024. This recognition comes after our successful implementation of comprehensive digital learning programs that have transformed the educational experience for over 350 students from rural backgrounds.",
    date: "December 20, 2024",
    author: "Dr. Priya Sharma",
    category: "Education",
    readTime: "5 min read",
    views: "1,245",
    image: "/placeholder.svg"
  };

  const newsArticles = [
    {
      title: "Free Health Camp Serves 500+ Families in Rural Maharashtra",
      excerpt: "Our medical team conducted comprehensive health checkups and provided free medicines to families in need...",
      date: "December 15, 2024",
      author: "Dr. Rajesh Patil",
      category: "Healthcare",
      readTime: "3 min read",
      views: "892",
      image: "/placeholder.svg"
    },
    {
      title: "Environmental Conservation: 1000 Trees Planted This Month",
      excerpt: "In collaboration with local communities, we successfully completed our largest tree plantation drive...",
      date: "December 10, 2024",
      author: "Mr. Suresh Kumar",
      category: "Environment",
      readTime: "4 min read",
      views: "756",
      image: "/placeholder.svg"
    },
    {
      title: "Women Empowerment Workshop Graduates 50 Participants",
      excerpt: "The latest batch of our skill development program celebrates successful completion of training...",
      date: "December 5, 2024",
      author: "Ms. Sunita Jadhav",
      category: "Community",
      readTime: "3 min read",
      views: "634",
      image: "/placeholder.svg"
    },
    {
      title: "Cricket Team Wins District Championship",
      excerpt: "RKSN School cricket team emerges victorious in the inter-school district level tournament...",
      date: "November 28, 2024",
      author: "Mr. Ganesh Patil",
      category: "Sports",
      readTime: "2 min read",
      views: "1,123",
      image: "/placeholder.svg"
    },
    {
      title: "New Computer Lab Inaugurated with 25 Latest Systems",
      excerpt: "State-of-the-art computer lab opens to provide digital literacy education to students...",
      date: "November 20, 2024",
      author: "Mr. Anil Sharma",
      category: "Education",
      readTime: "4 min read",
      views: "987",
      image: "/placeholder.svg"
    },
    {
      title: "Annual Scholarship Program Awards 50 Students",
      excerpt: "Deserving students from economically weaker sections receive financial assistance for education...",
      date: "November 15, 2024",
      author: "Dr. Meera Kulkarni",
      category: "Education",
      readTime: "3 min read",
      views: "845",
      image: "/placeholder.svg"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Education: "bg-blue-100 text-blue-800",
      Healthcare: "bg-red-100 text-red-800",
      Environment: "bg-green-100 text-green-800",
      Community: "bg-purple-100 text-purple-800",
      Sports: "bg-yellow-100 text-yellow-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <>
      <Helmet>
        <title>News - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Read the latest news articles and media coverage about Narmadalaya Charitable Trust and our community initiatives." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">News & Media</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto animate-slide-up">
              Stay informed about our latest activities, achievements, and community impact stories
            </p>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Story</h2>
            </div>

            <Card className="border-0 shadow-xl max-w-6xl mx-auto animate-fade-in">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="lg:order-2">
                    <img 
                      src={featuredNews.image} 
                      alt={featuredNews.title}
                      className="w-full h-80 lg:h-full object-cover rounded-r-lg"
                    />
                  </div>
                  <div className="lg:order-1 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredNews.category)}`}>
                        {featuredNews.category}
                      </span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                    
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{featuredNews.title}</h1>
                    <p className="text-gray-600 text-lg mb-6">{featuredNews.content}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{featuredNews.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>{featuredNews.author}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="h-4 w-4" />
                        <span>{featuredNews.views}</span>
                      </div>
                    </div>
                    
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Read Full Story <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest News</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Catch up on our recent activities and community impact stories
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stagger-animation">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="h-3 w-3" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        By {article.author}
                      </div>
                      <div className="text-sm text-gray-500">
                        {article.readTime}
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4 border-orange-500 text-orange-600 hover:bg-orange-50">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Coverage */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Media Coverage</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our work has been featured in various media outlets
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Tag className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Print Media</h3>
                  <p className="text-gray-600 mb-4">Featured in 15+ newspapers and magazines</p>
                  <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                    View Coverage
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Tag className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Television</h3>
                  <p className="text-gray-600 mb-4">Covered by regional TV channels</p>
                  <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                    Watch Videos
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Tag className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Online Media</h3>
                  <p className="text-gray-600 mb-4">Digital news platforms and blogs</p>
                  <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                    Read Articles
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;
