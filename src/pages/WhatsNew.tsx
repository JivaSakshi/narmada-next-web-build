
import { Helmet } from 'react-helmet-async';

const WhatsNew = () => {
  return (
    <>
      <Helmet>
        <title>What's New - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Stay updated with the latest news, updates, and announcements from Narmadalaya Charitable Trust." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">What's New</h1>
          <p className="text-center text-gray-600">Content coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default WhatsNew;
