
import { Helmet } from 'react-helmet-async';

const Donation = () => {
  return (
    <>
      <Helmet>
        <title>Donation - Support Narmadalaya Charitable Trust</title>
        <meta name="description" content="Support our mission by making a donation to Narmadalaya Charitable Trust. Help us continue our work in education and community development." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Make a Donation</h1>
          <p className="text-center text-gray-600">Content coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default Donation;
