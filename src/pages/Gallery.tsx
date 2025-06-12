
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
      image: "https://www.narmadalaya.org/main/img/Memory_03.jpg",
      title: "Appreciation",
      category: "all",
      description: "Appreciation of our work by Ex. President of India, Hon. Shrimati Pratibha Tai Patil."
    },
    {
      id: 2,
      image: "https://www.narmadalaya.org/main/img/events/shivir3.jpg",
      title: "Narmada Swar Lahri",
      category: "events",
      description: "Narmada Jayanti Utsav - Lepa Punarvas."
    },
    {
      id: 3,
      image: "https://www.narmadalaya.org/main/img/events/shivir4.jpg",
      title: "Narmada Jayanti Utsav",
      category: "events",
      description: "Lepa Punarvas"
    },
    {
      id: 4,
      image: "https://www.narmadalaya.org/main/img/events/narmada_jayanti5.jpg",
      title: "Narmada Jayanti Utsav",
      category: "events",
      description: "Lepa Punarvas"
    },
    {
      id: 5,
      image: "https://www.narmadalaya.org/main/img/events/shivir6.jpg",
      title: "Nimar Abhyudaya - Goshala",
      category: "events",
      description: "Lepa Punarvas"
    },
    {
      id: 6,
      image: "https://www.narmadalaya.org/main/img/events/shivir7.jpg",
      title: "Nimar Abhyudaya - Goshala",
      category: "community",
      description: "Lepa Punarvas"
    },
    {
      id: 7,
      image: "https://www.narmadalaya.org/main/img/events/shivir8.jpg",
      title: "Adhyatmik Shivir",
      category: "healthcare",
      description: "Lepa Punarvas"
    },
    {
      id: 8,
      image: "https://www.narmadalaya.org/main/img/sports/marathon10.jpg",
      title: "11km IIM Indore Marathon",
      category: "events",
      description: "2020"
    },
    {
      id: 9,
      image: "https://www.narmadalaya.org/main/img/sports/marathon14.jpg",
      title: "10km Shivpur Marathon",
      category: "education",
      description: "2018"
    },
    {
      id: 10,
      image: "https://www.narmadalaya.org/main/img/award/Jalgaon_Award.jpg",
      title: "2020",
      category: "environment",
      description: "Avinashi Award in Memory of Dr. Avinash Acharya by Keshav smrati Pratishthaan, Jalgaon"
    },
    {
      id: 11,
      image: "https://www.narmadalaya.org/main/img/award/Vasantrao_Pawar_Award.jpg",
      title: "2019",
      category: "community",
      description: "Dr. Vasantrao Pawar Award in memory of Dr. Vasantrav Pawar by Nilvasant Foundation, Nasik"
    },
    {
      id: 12,
      image: "https://www.narmadalaya.org/main/img/award/award.jpg",
      title: "2016",
      category: "events",
      description: "Vishista Seva Samman by Santeshwar Foundation, New Delhi"
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
                <h3 className="text-3xl font-bold text-orange-600 mb-2">15+</h3>
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
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white  text-center">
           <div className="p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Journey</h3>
            <p className="text-orange-100 mb-6 text-lg">
             Every contribution—whether a donation, a volunteer hour, or a small act of kindness—fuels these numbers and the meaningful change behind them. Be a catalyst for growth and empowerment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Donate Now
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

export default Gallery;
