const Honour = () => {
  return (
    <> 
      <div className="min-h-screen bg-gray-50">
        {/* School Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">HONOUR FOR NARMADALAYA BY</h2>
                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-orange-600"> Reserve Bank Officer’s Assocciation, </span>
              Mumbai
            </h2>
                <p className="text-lg text-gray-600 mb-6">
                  
On 07 March 2017 our students presented a musical program at Reserve Bank of India, Mumbai. The program was organised by RBI officer’s Association, Mumbai. On this occasion, Bharati Thakur, the founder of N.A.R.M.A.D.A. presented her journey – from Narmada Parikrama to Narmadalaya ie development of the project Narmadalaya for school dropouts and women empowerment, vocational skills to rural youth. The entire program was well appreciated by the audience. Many employees of the Reserve Bank of India have formed a whatsapp group called 'Narmadalaya Mitra' and they sponsor many students every year. Most of the group members visit Narmadalaya whenever possible to them.
                </p>
              </div>
              
              <div className="animate-slide-in-right">
                <img 
                  src="https://www.narmadalaya.org/main/img/RBI.png" 
                  alt="RKSN School Building"
                  className="w-full  bg-gradient-to-r from-orange-500 to-red-500 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Honour;
