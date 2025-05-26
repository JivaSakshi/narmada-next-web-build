
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Camera, Users, GraduationCap, Heart, TreePine, Award } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: Camera },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'community', name: 'Community', icon: Users },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'environment', name: 'Environment', icon: TreePine },
    { id: 'events', name: 'Events', icon: Award }
  ];

  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Students in Science Lab",
      category: "education",
      description: "Our students conducting experiments in the newly equipped science laboratory."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Community Health Camp",
      category: "healthcare",
      description: "Free medical checkup camp organized for rural communities."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Tree Plantation Drive",
      category: "environment",
      description: "Volunteers participating in our annual tree plantation initiative."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Classroom Learning",
      category: "education",
      description: "Interactive learning session in our primary education program."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Annual Sports Day",
      category: "events",
      description: "Students showcasing their athletic talents during sports competition."
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Women Empowerment Workshop",
      category: "community",
      description: "Skill development workshop for women in rural areas."
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Healthcare Training",
      category: "healthcare",
      description: "Training session for community health workers."
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Sports Training Program",
      category: "events",
      description: "Professional coaching session for young athletes."
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Computer Literacy Class",
      category: "education",
      description: "Digital literacy program for students and adults."
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Clean Water Initiative",
      category: "environment",
      description: "Installation of water purification systems in villages."
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Volunteer Training",
      category: "community",
      description: "Orientation program for new volunteers joining our mission."
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Cultural Festival",
      category: "events",
      description: "Celebrating local culture and traditions with the community."
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Gallery - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Explore our photo gallery showcasing our programs, events, and community impact through images." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Capturing Moments of Impact and Transformation
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                  }`}
                >
                  <category.icon className="h-5 w-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
                        {item.category}
                      </span>
                    </div>

                    {/* Overlay Content */}
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-20">
                <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No photos found</h3>
                <p className="text-gray-500">Try selecting a different category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Gallery Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-orange-600 mb-2">500+</h3>
                <p className="text-gray-600">Photos Captured</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-orange-600 mb-2">50+</h3>
                <p className="text-gray-600">Events Documented</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-orange-600 mb-2">25+</h3>
                <p className="text-gray-600">Years of Memories</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-orange-600 mb-2">1000+</h3>
                <p className="text-gray-600">Stories Shared</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Be Part of Our Story</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Every photo tells a story of hope, transformation, and impact. 
              Join us in creating more moments worth capturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Volunteer With Us
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-all">
                Share Your Photos
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
