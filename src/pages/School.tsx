
import { Helmet } from 'react-helmet-async';

const School = () => {
  return (
    <>
      <Helmet>
        <title>RKSN School - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Learn about RKSN School, our educational institution providing quality education to underprivileged children." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">RKSN School</h1>
          <p className="text-center text-gray-600">Content coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default School;
