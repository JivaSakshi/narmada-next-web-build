
import { Helmet } from 'react-helmet-async';

const News = () => {
  return (
    <>
      <Helmet>
        <title>News - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Read the latest news articles and media coverage about Narmadalaya Charitable Trust and our community initiatives." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">News</h1>
          <p className="text-center text-gray-600">Content coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default News;
