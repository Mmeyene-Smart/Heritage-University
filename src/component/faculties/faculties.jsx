import { useEffect, useRef, useState } from "react";

const faculties = [
  {
    id: 1,
    title: "Computing & Applied Sciences",
    subjects: "Biochemistry, Biotechnology, Computing, Cybersecurity, Mathematics, Physics",
    link: "#"
  },
  {
    id: 2,
    title: "Engineering",
    subjects: "Civil, Electrical-Electronics, Mechanical, Mechatronics.",
    link: "#"
  },
  {
    id: 3,
    title: "Law",
    subjects: "Law",
    link: "#"
  },
  {
    id: 4,
    title: "Management & Social Sciences",
    subjects: "Accounting, Economics, Mass Communication, Political Science.",
    link: "#"
  },
  {
    id: 5,
    title: "Medical Sciences",
    subjects: "Medicine & Surgery, Medical Laboratory Sciences, Nursing, Public Health",
    link: "#"
  }
];

function Faculties() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
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
      className="relative w-full bg-slate-950 py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:pl-[100px] lg:pr-10 overflow-hidden font-sans border-t border-slate-900"
    >
      {/* Background visual details */}
      <div className="absolute top-10 left-[15%] w-72 h-72 bg-blue-900/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-[15%] w-72 h-72 bg-amber-500/2 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Heading with scroll animation */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Our Faculties
          </h2>
          <div className="relative w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mx-auto shadow-[0_0_10px_rgba(245,158,11,0.5)] overflow-hidden">
            <div className="absolute inset-0 w-1/2 h-full bg-white/40 transform -skew-x-12 animate-shine-slow"></div>
          </div>
        </div>

        {/* Faculties Grid Flex wrapper to center last row items */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {faculties.map((faculty, index) => (
            <div
              key={faculty.id}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.33%-1.75rem)] min-w-[280px] bg-slate-900/40 backdrop-blur-md border border-slate-800/80 hover:border-amber-500/30 rounded-xl p-8 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.3)] transition-all duration-700 ease-out transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(245,158,11,0.06)] group relative overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
            >
              {/* Glowing Top line border accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-900 to-blue-800 shadow-[0_1px_3px_rgba(30,58,138,0.2)]"></div>

              {/* Glowing Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-amber-500/5 rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300 leading-snug">
                  {faculty.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light mb-8 group-hover:text-slate-200 transition-colors duration-300">
                  {faculty.subjects}
                </p>
              </div>

              <div>
                <a
                  href={faculty.link}
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm tracking-wider transition-colors duration-300"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faculties;
