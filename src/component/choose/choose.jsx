import { useEffect, useRef, useState } from "react";

const reasons = [
  { id: "01", text: "Unique Academic and Entrepreneurial Philosophy" },
  { id: "02", text: "Experienced, exposed and dedicated Management and Staff" },
  { id: "03", text: "Serene, secured and nature-friendly educational environment" },
  { id: "04", text: "Top-notch and ultra-modern facilities" },
  { id: "05", text: "Discipline and core value teaching and learning philosophy" },
  { id: "06", text: "Exposure to international best practices in education, management and culture" },
  { id: "07", text: "E-learning facilities and audio and visual teaching methods" },
  { id: "08", text: "High standard and functional laboratories" },
  { id: "09", text: "Standard sports arena for games and athletics" },
  { id: "10", text: "Expansive and well laid out campus" },
  { id: "11", text: "Modern, clean and comfortable accommodation for students" },
  { id: "12", text: "On-campus residency for staff" },
  { id: "13", text: "Adequate Power and Water Supply" },
  { id: "14", text: "Well equipped and standard Library complex" },
  { id: "15", text: "24/7 on-campus WiFi" },
  { id: "16", text: "The Home of Chokhmah!" }
];

function Choose() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger ON and OFF based on viewport visibility
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before section leaves viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#090d19] py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:pl-[100px] lg:pr-10 overflow-hidden font-sans border-t border-blue-950/20"
    >
      {/* Midnight blue background design accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Cyber/Futuristic Decorative grids */}
      <div className="absolute top-0 left-[5%] w-[1px] h-40 bg-gradient-to-b from-blue-500/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-[5%] w-[1px] h-40 bg-gradient-to-t from-cyan-500/20 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div
          className={`text-center mb-20 transition-all duration-[900ms] ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 block">
            Discover the Difference
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Why Choose Heritage University?
          </h2>
          <div className="relative w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mx-auto shadow-[0_0_8px_rgba(245,158,11,0.4)] overflow-hidden">
            <div className="absolute inset-0 w-1/2 h-full bg-white/40 transform -skew-x-12 animate-shine-slow"></div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              style={{
                transitionDelay: isVisible ? `${index * 45}ms` : "0ms",
              }}
              className={`bg-slate-900/50 backdrop-blur-md border border-blue-900/20 hover:border-cyan-500/40 rounded-xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(6,182,212,0.15)] transition-all duration-500 ease-out transform flex flex-col justify-start relative group ${
                isVisible 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-6 scale-[0.97]"
              }`}
            >
              {/* Subtle top indicator border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300"></div>

              {/* Number Tag */}
              <span className="text-amber-400 font-bold text-sm mb-3 tracking-wider block transition-transform duration-300 group-hover:scale-105 origin-left">
                {reason.id}
              </span>

              {/* Description Text */}
              <p className="text-blue-200/70 font-light text-[14px] sm:text-[15px] leading-relaxed transition-colors duration-300 group-hover:text-white">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Choose;
