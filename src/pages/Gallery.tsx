
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Explore our photo gallery showcasing our programs, events, and community impact through images." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
          <p className="text-center text-gray-600">Content coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default Gallery;
