
import { Helmet } from 'react-helmet-async';
import { Target, Eye, Heart, Users, Globe, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Vision = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every initiative with empathy and genuine care for human dignity."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of community collaboration and inclusive development."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Our programs are designed for long-term impact and environmental responsibility."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creative solutions to address complex social challenges."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Vision & Mission - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Discover the vision, mission, and core values of Narmadalaya Charitable Trust. Learn about our commitment to creating sustainable social impact through education and community development." />
        <meta name="keywords" content="Narmadalaya vision, mission, values, charitable trust, social impact, community development" />
        <link rel="canonical" href="https://narmadalaya.org/vision" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Vision & Mission</h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Guiding Principles That Drive Our Purpose
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              {/* Vision */}
              <div className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To build empowered and self-reliant communities in the Nimar region of Madhya Pradesh by ensuring equal access to education, livelihood, and environmental sustainability.
                </p>
                <p className="text-gray-600 leading-relaxed">

We envision a society where women and children lead with confidence, communities take ownership of their development, and inclusive education paves the way for a brighter, greener future.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-red-500 p-3 rounded-full">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                 To transform lives through integrated programs in education, vocational training, women’s empowerment, and environmental awareness.
                </p>
                <p className="text-gray-600 leading-relaxed">

We are dedicated to fostering sustainable development by addressing grassroots challenges, promoting community participation, and enabling individuals to achieve long-term self-sufficiency and dignity.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Core <span className="text-orange-600">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These fundamental principles guide every decision we make and every action we take 
                in service of our communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow border-0 shadow-lg">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Goals Section */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Our Strategic <span className="text-orange-600">Goals</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Short-term Goals (2024-2025)</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Expand educational programs to reach 2,000 more students</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Launch digital literacy programs in rural areas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Establish 10 new community health centers</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Plant 15,000 trees across different regions</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Long-term Vision (2025-2030)</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Become a leading educational institution in the region</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Achieve carbon neutrality in all our operations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Create sustainable livelihood opportunities for 1,000 families</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Establish partnerships with international organizations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Vision;
