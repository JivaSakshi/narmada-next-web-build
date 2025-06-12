
import { Helmet } from 'react-helmet-async';
import { Calendar, Users, Award, Heart } from "lucide-react";

const History = () => {
  const milestones = [
    {
      year: "2010",
      title: "Foundation of Narmadalaya",
      description: "Narmadalaya Charitable Trust was established with a vision to serve humanity and uplift underprivileged communities.",
      icon: Heart
    },
    {
      year: "2011",
      title: "Community Health Programs",
      description: "Expanded our services to include comprehensive healthcare and wellness programs for rural communities.",
      icon: Calendar
    },
    {
      year: "2015",
      title: "First Educational Initiative",
      description: "Launched our first school program, providing quality education to children in rural areas.",
      icon: Users
    },
    {
      year: "2016",
      title: "Environmental Conservation",
      description: "Initiated large-scale environmental conservation projects including tree plantation drives.",
      icon: Award
    },
    {
      year: "2017",
      title: "Digital Education",
      description: "Adapted to digital platforms during the pandemic, ensuring continuous education for all students.",
      icon: Users
    },
    {
      year: "2025",
      title: "15 Years of Service",
      description: "Celebrating 15 years of dedicated service to humanity with over 25,00 lives impacted.",
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
                15 Years of Dedicated Service to Humanity
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Bharati Thakur</h2>
                <p className="text-lg text-gray-600 mb-6">

                  Bharati Thakur, the founder of N.A.R.M.A.D.A. is an avid traveller, nature lover, cyclist, a well-known writer and a former Central Government employee in Maharashtra, gave up her lucrative career for N.A.R.M.A.D.A.

                  A rebel in her family, Bharati left home in her mid-30s to work in the far away and neglected areas of the North Eastern parts of India. She was instrumental in setting up a school and getting back the tribal children of those areas back to the school, where otherwise, going to school was nowhere a priority.

                  In 2005, Bharati and two of her friends undertook a 3200 km journey on the banks of the Narmada river. The journey, an arduous walk over various terrains has great significance in the canons of Hinduism and even in other spiritual disciplines. It is called Narmada Parikrama – circumambulation of the river Narmada. Bharati completed this journey in 5 months.

                  This journey helped her to see the conditions of people living on the banks of Narmada – she understood their view point on the Narmada Valley Development Plan and witnessed the reality on the ground. She came across people in the Nimar region who were severely affected and deprived. She decided to devote herself to this cause. This region is very fertile and gets bumper crops of wheat, cotton, soyabean and pulses. Yet, prosperity that should be associated with the fertility of land is not visible. It is essentially because the proportion of land holders and landless labors is inverse. Growing number of child labor has resulted in increase in school dropouts. The number of such school dropouts is very alarming. Most of these children work on farms and are engaged in agriculture activities like plucking cotton, chilies, and tending the cattle etc. Girls bear the brunt of managing the household chores and looking after their young siblings when their parents are away on the fields working on daily wages.

                  In July 2009 Bharati came to Mandleshwar, a small town in Maheshwar tehsil of Madhya Pradesh on the north bank of Narmada. She started teaching school drop outs and students very weak in studies at Lepa, a place on the south banks of Narmada. The overwhelming response by the drop out students for her endeavor encouraged Bharati to expand her activities in few nearby villages with the help of local womenfolk. In 2010. With the help of like-minded people of Mandleshwar, Bharati established Nimar Abhyudaya Rural Management and Development Association (N.A.R.M.A.D.A.). </p>
              </div>

              <div className="animate-slide-in-right">
                <img
                  src="https://www.narmadalaya.org/main/img/didi_ji.jpg"
                  alt="RKSN School Building"
                  className="w-full  bg-gradient-to-r from-orange-500 to-red-500 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* History Content */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  A Legacy of Compassion
                </h2>
                <p className="text-xl text-orange-100 max-w-3xl mx-auto">
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
                        <milestone.icon className="h-8 w-8 orange" />
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
            </div>
          </div>
        </section>


      </div>
    </>
  );
};

export default History;
