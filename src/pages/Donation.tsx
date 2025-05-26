import { Helmet } from 'react-helmet-async';
import { Heart, Users, GraduationCap, TreePine, Shield, CreditCard, Smartphone, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Donation = () => {
  const donationTiers = [
    {
      amount: 500,
      title: "Supporter",
      impact: "Provides school supplies for 1 child for a month",
      popular: false
    },
    {
      amount: 2000,
      title: "Advocate",
      impact: "Sponsors a child's education for 1 month",
      popular: true
    },
    {
      amount: 5000,
      title: "Champion",
      impact: "Funds a health checkup camp for 50 people",
      popular: false
    },
    {
      amount: 10000,
      title: "Hero",
      impact: "Provides vocational training for 5 adults",
      popular: false
    }
  ];

  const impactAreas = [
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "School fees, books, uniforms, and educational materials for underprivileged children.",
      goal: "₹50,000",
      raised: "₹32,000",
      percentage: 64
    },
    {
      icon: Heart,
      title: "Healthcare Services",
      description: "Medical camps, treatments, and health awareness programs for rural communities.",
      goal: "₹75,000",
      raised: "₹48,000",
      percentage: 64
    },
    {
      icon: TreePine,
      title: "Environmental Protection",
      description: "Tree plantation, clean water initiatives, and environmental conservation projects.",
      goal: "₹30,000",
      raised: "₹25,000",
      percentage: 83
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Skill development, women empowerment, and livelihood generation programs.",
      goal: "₹40,000",
      raised: "₹28,000",
      percentage: 70
    }
  ];

  return (
    <>
      <Helmet>
        <title>Donation - Support Narmadalaya Charitable Trust</title>
        <meta name="description" content="Support our mission by making a donation to Narmadalaya Charitable Trust. Help us continue our work in education and community development." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Make a Donation</h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
                Your generosity can transform lives and build a better tomorrow
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Every Donation Counts</h3>
                <p className="text-lg opacity-90">
                  100% of your donation goes directly to our programs. 
                  Administrative costs are covered by our board members.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Donation */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Choose Your <span className="text-orange-600">Impact Level</span>
              </h2>
              <p className="text-xl text-gray-600">
                Select an amount or enter a custom donation to support our cause
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {donationTiers.map((tier, index) => (
                <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${tier.popular ? 'ring-2 ring-orange-500' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-gray-900">₹{tier.amount.toLocaleString()}</CardTitle>
                    <p className="text-lg font-semibold text-orange-600">{tier.title}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-6">{tier.impact}</p>
                    <Button className={`w-full ${tier.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-800 hover:bg-gray-900'}`}>
                      Donate Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Custom Amount */}
            <Card className="max-w-2xl mx-auto border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Custom Amount</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter Amount (₹)
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-lg"
                      placeholder="Enter custom amount"
                      min="100"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Donation Purpose (Optional)
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors">
                      <option value="">Where needed most</option>
                      <option value="education">Education Programs</option>
                      <option value="healthcare">Healthcare Services</option>
                      <option value="environment">Environmental Projects</option>
                      <option value="community">Community Development</option>
                    </select>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg py-3">
                    <Heart className="h-5 w-5 mr-2" />
                    Donate Custom Amount
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Current <span className="text-orange-600">Fundraising Goals</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Track the progress of our ongoing campaigns and see how your contribution 
                makes a direct impact in these key areas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {impactAreas.map((area, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="bg-orange-500 p-3 rounded-full">
                        <area.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                        <p className="text-gray-600">{area.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-gray-700">Progress</span>
                        <span className="text-orange-600">{area.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-300"
                          style={{ width: `${area.percentage}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Raised: {area.raised}</span>
                        <span className="text-gray-900 font-medium">Goal: {area.goal}</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full mt-4 border-orange-500 text-orange-600 hover:bg-orange-50">
                      Support This Cause
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Secure <span className="text-orange-600">Payment Options</span>
                </h2>
                <p className="text-xl text-gray-600">
                  We offer multiple secure payment methods for your convenience
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <CreditCard className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Credit/Debit Cards</h3>
                    <p className="text-gray-600">Visa, Mastercard, Rupay</p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <Smartphone className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Wallets</h3>
                    <p className="text-gray-600">UPI, Paytm, PhonePe</p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <Building className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Net Banking</h3>
                    <p className="text-gray-600">All major banks</p>
                  </CardContent>
                </Card>
              </div>

              {/* Security & Tax Info */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Shield className="h-8 w-8 text-green-500 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Safe</h3>
                        <p className="text-gray-600">
                          All donations are processed through secure, encrypted channels. 
                          Your financial information is protected with bank-level security.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <GraduationCap className="h-8 w-8 text-blue-500 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Tax Benefits</h3>
                        <p className="text-gray-600">
                          Your donations are eligible for tax deduction under Section 80G. 
                          You'll receive an official receipt for tax purposes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Other Ways to Help */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Other Ways to Support Us</h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
              Not ready to donate? There are many other ways you can help us make a difference
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Volunteer</h3>
                <p className="opacity-90 mb-4">
                  Donate your time and skills to directly impact our programs
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                  Join as Volunteer
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Heart className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Spread Awareness</h3>
                <p className="opacity-90 mb-4">
                  Share our mission on social media and with your network
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                  Share Our Story
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Building className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Corporate Partnership</h3>
                <p className="opacity-90 mb-4">
                  Partner with us for CSR initiatives and employee engagement
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                  Explore Partnership
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Donation;
