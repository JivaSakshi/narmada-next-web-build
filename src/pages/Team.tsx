
import { Helmet } from 'react-helmet-async';

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Meet our dedicated team members working tirelessly to serve communities and create positive change." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
          <p className="text-center text-gray-600">Content coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default Team;
