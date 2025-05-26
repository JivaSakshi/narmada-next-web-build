
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, Award, Shield } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "12A Registration Certificate",
      description: "Income Tax Department registration under Section 12A",
      issueDate: "March 15, 2019",
      validUntil: "Permanent",
      icon: FileText,
      image: "/placeholder.svg"
    },
    {
      title: "80G Certificate",
      description: "Tax exemption certificate under Section 80G",
      issueDate: "April 10, 2019", 
      validUntil: "March 31, 2024",
      icon: Award,
      image: "/placeholder.svg"
    },
    {
      title: "FCRA Registration",
      description: "Foreign Contribution Regulation Act registration",
      issueDate: "June 20, 2020",
      validUntil: "June 19, 2025",
      icon: Shield,
      image: "/placeholder.svg"
    },
    {
      title: "NGO Darpan Registration",
      description: "NITI Aayog NGO Darpan unique ID registration",
      issueDate: "January 5, 2021",
      validUntil: "Permanent",
      icon: FileText,
      image: "/placeholder.svg"
    },
    {
      title: "Trust Registration Certificate",
      description: "Public Trust registration certificate",
      issueDate: "February 28, 2018",
      validUntil: "Permanent",
      icon: Award,
      image: "/placeholder.svg"
    },
    {
      title: "CSR Eligibility Certificate",
      description: "Corporate Social Responsibility eligibility certificate",
      issueDate: "August 12, 2022",
      validUntil: "August 11, 2025",
      icon: Shield,
      image: "/placeholder.svg"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Organization Certificates - Narmadalaya Charitable Trust</title>
        <meta name="description" content="View our official certificates, registrations, and accreditations that validate our charitable work." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Organization Certificates</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto animate-slide-up">
              Our official certifications and registrations that validate our commitment to transparency and legal compliance
            </p>
          </div>
        </section>

        {/* Certificates Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stagger-animation">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-orange-500 p-3 rounded-full">
                        <cert.icon className="h-6 w-6 text-white" />
                      </div>
                      <button className="text-orange-600 hover:text-orange-700 transition-colors">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="mb-4">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-48 object-cover rounded-lg border border-gray-200"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                    <p className="text-gray-600 mb-4">{cert.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Issue Date:</span>
                        <span className="font-medium">{cert.issueDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Valid Until:</span>
                        <span className="font-medium">{cert.validUntil}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Transparency */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Commitment to Transparency</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              These certificates demonstrate our commitment to legal compliance, financial transparency, 
              and ethical operations. We maintain all necessary registrations to ensure donor confidence 
              and regulatory adherence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <FileText className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Compliance</h3>
                <p className="text-gray-600">All required registrations and legal documentation maintained</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tax Benefits</h3>
                <p className="text-gray-600">80G certification enables tax deductions for donors</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Trust & Security</h3>
                <p className="text-gray-600">Regular audits and compliance checks ensure accountability</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Certificates;
