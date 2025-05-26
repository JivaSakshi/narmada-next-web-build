
import { useEffect, useState } from "react";
import { Heart, Users, GraduationCap, TreePine, Award, Building } from "lucide-react";

const ImpactStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: Heart,
      number: 25000,
      label: "Lives Impacted",
      suffix: "+"
    },
    {
      icon: Users,
      number: 500,
      label: "Active Volunteers",
      suffix: "+"
    },
    {
      icon: GraduationCap,
      number: 1200,
      label: "Students Educated",
      suffix: "+"
    },
    {
      icon: TreePine,
      number: 5000,
      label: "Trees Planted",
      suffix: "+"
    },
    {
      icon: Award,
      number: 50,
      label: "Awards Received",
      suffix: "+"
    },
    {
      icon: Building,
      number: 25,
      label: "Years of Service",
      suffix: ""
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('impact-stats');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const AnimatedNumber = ({ value, isVisible }: { value: number; isVisible: boolean }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        setCurrent(Math.min(Math.floor(increment * step), value));

        if (step >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return <span>{current.toLocaleString()}</span>;
  };

  return (
    <section id="impact-stats" className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Over the years, we've been able to create meaningful change in countless lives. 
            Here's a glimpse of our journey and achievements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <AnimatedNumber value={stat.number} isVisible={isVisible} />
                {stat.suffix}
              </div>
              <div className="text-orange-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Be Part of Our Success Story</h3>
            <p className="text-orange-100 mb-6 text-lg">
              Every donation, every volunteer hour, and every act of kindness contributes to these numbers. 
              Join us in creating an even bigger impact for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Donate Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-all">
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
