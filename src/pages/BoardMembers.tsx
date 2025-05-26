
import { Helmet } from 'react-helmet-async';

const BoardMembers = () => {
  return (
    <>
      <Helmet>
        <title>Board Members - Narmadalaya Charitable Trust</title>
        <meta name="description" content="Meet the dedicated board members of Narmadalaya Charitable Trust who guide our mission and vision." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Board Members</h1>
          <p className="text-center text-gray-600">Content coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default BoardMembers;
