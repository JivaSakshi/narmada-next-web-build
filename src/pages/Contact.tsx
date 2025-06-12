
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Get in touch with Narmadalaya Charitable Trust. Find our contact information and reach out to learn more about our programs." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                We'd Love to Hear From You
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Have questions about our programs? Want to volunteer or donate?
                    We're here to help and would love to connect with you.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-orange-500 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Our Address</h3>
                          <p className="text-gray-600">
                            Narmadalaya, Lepa Punarwas (Bairagarh),
                            Tehsil – Kasrawad, District – Khargone, Madhya Pradesh, India, Pin Code – 451228
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-orange-500 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                          <p className="text-gray-600">

                            +91 9575756141, +91 8120202010
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-orange-500 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Email Addresses</h3>
                          <p className="text-gray-600">
                            General: info@narmadalaya.org<br />
                            Donations: donate@narmadalaya.org<br />
                            Volunteer: volunteer@narmadalaya.org
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-orange-500 p-3 rounded-full">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                          <p className="text-gray-600">
                            All days - Friday: 9:00 AM - 6:00 PM
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-blue-400 p-3 rounded-full text-white hover:bg-blue-500 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-pink-600 p-3 rounded-full text-white hover:bg-pink-700 transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-red-600 p-3 rounded-full text-white hover:bg-red-700 transition-colors">
                      <Youtube className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors">
                          <option value="">Select a subject</option>
                          <option value="volunteer">Volunteer Opportunities</option>
                          <option value="donation">Donation Inquiry</option>
                          <option value="partnership">Partnership</option>
                          <option value="general">General Information</option>
                          <option value="media">Media Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors resize-none"
                          placeholder="Tell us how we can help you..."
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 text-lg font-semibold"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white h-[400px] md:h-[600px]">
          <div className="container mx-auto px-4 h-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
              <p className="text-lg text-gray-600">
                Come and see our work firsthand. We welcome visitors and volunteers.
              </p>
            </div>

            <div className="bg-gray-200 rounded-lg flex h-[400px] md:h-[380px] items-center justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.1566864615997!2d75.68538837528729!3d22.120000879816683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39627da18179c3bf%3A0x221e328cfe3a0837!2sNimar%20Abhyudaya%20Rural%20Management%20And%20Development%20Association!5e0!3m2!1sen!2sin!4v1749403617421!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
                className="w-full h-full"
                ></iframe>
            </div>
          </div>
        </section>

        {/* <section className="py-0 bg-white h-[600px] md:h-[700px]">
  <div className="container mx-auto px-0 h-full">
    <div className="text-center py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
      <p className="text-lg text-gray-600">
        Come and see our work firsthand. We welcome visitors and volunteers.
      </p>
    </div>

    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.1566864615997!2d75.68538837528729!3d22.120000879816683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39627da18179c3bf%3A0x221e328cfe3a0837!2sNimar%20Abhyudaya%20Rural%20Management%20And%20Development%20Association!5e0!3m2!1sen!2sin!4v1749403617421!5m2!1sen!2sin"
        loading="lazy"
        allowFullScreen
        className="w-full h-full border-0"
      ></iframe>
    </div>
  </div>
</section> */}

      </div>
    </>
  );
};

export default Contact;
