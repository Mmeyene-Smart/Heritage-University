import { useEffect, useRef, useState } from "react";
import universityBg from "../../assets/university_bg.png";

function Hero() {
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
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between bg-slate-950 font-sans"
    >
      {/* Background Image Container with Ken Burns effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={universityBg}
          alt="Heritage University Campus"
          className="w-full h-full object-cover object-center scale-105 animate-ken-burns filter brightness-[0.70] contrast-[1.05]"
        />
        {/* Futuristic Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        
        {/* Cyber Scanning Line */}
        <div className="absolute inset-0 bg-scanline pointer-events-none opacity-10"></div>

        {/* Rich Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-blue-900/60 to-slate-950 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/40 to-transparent hidden md:block pointer-events-none"></div>
        
        {/* Futuristic Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-float-slow pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[150px] animate-float-delayed pointer-events-none"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow flex items-center w-full px-6 sm:px-10 md:px-16 lg:pl-[100px] lg:pr-10 pt-28 pb-36">
        <div className={`max-w-4xl text-left transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Admission Badge */}
          <div className="inline-flex items-center gap-2.5 bg-blue-950/80 backdrop-blur-md border border-cyan-500/40 px-4 py-2 rounded-full text-cyan-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-8 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Admission Open 2026/2027
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-tight mb-8">
            Cultivating <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 drop-shadow-[0_2px_15px_rgba(56,189,248,0.3)]">Excellence</span>, <br className="hidden sm:inline" />
            Inspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 drop-shadow-[0_2px_15px_rgba(34,211,238,0.2)]">Greatness</span>.
          </h1>

          {/* Subheading */}
          <div className="flex gap-4 items-stretch mb-10 max-w-2xl">
            <div className="w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-indigo-500 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
            <p className="text-base sm:text-lg md:text-xl text-blue-100/90 leading-relaxed font-light">
              Heritage University combines academic rigor with moral integrity, equipping students with the wisdom to lead in a globalized world.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide text-sm sm:text-base">
                APPLY FOR ADMISSION
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </button>
            <button className="group border border-blue-400/40 hover:border-cyan-400/80 bg-blue-950/40 hover:bg-blue-900/50 backdrop-blur-md text-cyan-300 hover:text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_15px_rgba(56,189,248,0.08)] hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm sm:text-base tracking-wide">
              EXPLORE PROGRAMMES
            </button>
          </div>
        </div>
      </div>

      {/* Floating Glassmorphism Stats Container */}
      <div 
        className={`relative z-20 w-full px-6 sm:px-10 md:px-16 lg:px-24 pb-8 sm:pb-12 md:pb-0 transition-all duration-[1200ms] delay-300 ease-out transform ${
          isVisible 
            ? "opacity-100 md:translate-y-[45px] translate-y-0" 
            : "opacity-0 md:translate-y-[70px] translate-y-6"
        }`}
      >
        <div className="bg-slate-900 border border-blue-800/50 rounded-2xl p-6 sm:p-8 md:py-8 md:px-6 shadow-[0_20px_50px_rgba(0,0,0,0.6),_0_0_40px_rgba(59,130,246,0.15)] max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-x-0 md:divide-x divide-blue-500/25 text-center relative overflow-hidden group">
          {/* Subtle inside glow for stats container */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
          
          {/* Stat 1 */}
          <div className="flex flex-col justify-center items-center px-2 group/stat">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2 transition-transform duration-300 group-hover/stat:scale-105 select-none drop-shadow-[0_2px_8px_rgba(56,189,248,0.25)]">
              20+
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-blue-200/70 group-hover/stat:text-blue-200 transition-colors uppercase leading-snug">
              NUC Accredited Programmes
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col justify-center items-center px-2 group/stat">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2 transition-transform duration-300 group-hover/stat:scale-105 select-none drop-shadow-[0_2px_8px_rgba(56,189,248,0.25)]">
              1:10
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-blue-200/70 group-hover/stat:text-blue-200 transition-colors uppercase leading-snug">
              Staff:Student Ratio
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col justify-center items-center px-2 group/stat">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2 transition-transform duration-300 group-hover/stat:scale-105 select-none drop-shadow-[0_2px_8px_rgba(56,189,248,0.25)]">
              5
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-blue-200/70 group-hover/stat:text-blue-200 transition-colors uppercase leading-snug">
              Ultra Modern Faculties
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col justify-center items-center px-2 group/stat">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2 transition-transform duration-300 group-hover/stat:scale-105 select-none drop-shadow-[0_2px_8px_rgba(56,189,248,0.25)]">
              1000+
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-blue-200/70 group-hover/stat:text-blue-200 transition-colors uppercase leading-snug">
              Students Enrolled
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
