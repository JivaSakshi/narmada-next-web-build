const HistoryAbout = () => {
  return (
    <> 
      <div className="min-h-screen bg-gray-50">
        {/* School Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Bharati Thakur</h2>
                <p className="text-lg text-gray-600 mb-6">
               
Bharati Thakur, the founder of N.A.R.M.A.D.A. is an avid traveller, nature lover, cyclist, a well-known writer and a former Central Government employee in Maharashtra, gave up her lucrative career for N.A.R.M.A.D.A.

A rebel in her family, Bharati left home in her mid-30s to work in the far away and neglected areas of the North Eastern parts of India. She was instrumental in setting up a school and getting back the tribal children of those areas back to the school, where otherwise, going to school was nowhere a priority.

In 2005, Bharati and two of her friends undertook a 3200 km journey on the banks of the Narmada river. The journey, an arduous walk over various terrains has great significance in the canons of Hinduism and even in other spiritual disciplines. It is called Narmada Parikrama – circumambulation of the river Narmada. Bharati completed this journey in 5 months.

This journey helped her to see the conditions of people living on the banks of Narmada – she understood their view point on the Narmada Valley Development Plan and witnessed the reality on the ground. She came across people in the Nimar region who were severely affected and deprived. She decided to devote herself to this cause. This region is very fertile and gets bumper crops of wheat, cotton, soyabean and pulses. Yet, prosperity that should be associated with the fertility of land is not visible. It is essentially because the proportion of land holders and landless labors is inverse. Growing number of child labor has resulted in increase in school dropouts. The number of such school dropouts is very alarming. Most of these children work on farms and are engaged in agriculture activities like plucking cotton, chilies, and tending the cattle etc. Girls bear the brunt of managing the household chores and looking after their young siblings when their parents are away on the fields working on daily wages.

In July 2009 Bharati came to Mandleshwar, a small town in Maheshwar tehsil of Madhya Pradesh on the north bank of Narmada. She started teaching school drop outs and students very weak in studies at Lepa, a place on the south banks of Narmada. The overwhelming response by the drop out students for her endeavor encouraged Bharati to expand her activities in few nearby villages with the help of local womenfolk. In 2010. With the help of like-minded people of Mandleshwar, Bharati established Nimar Abhyudaya Rural Management and Development Association (N.A.R.M.A.D.A.). </p>
              </div>
              
              <div className="animate-slide-in-right">
                <img 
                  src="https://www.narmadalaya.org/main/img/didi_ji.jpg" 
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

export default HistoryAbout;
