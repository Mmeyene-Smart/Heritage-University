import { useEffect, useRef, useState } from "react";
import aboutHeroImg from "../../assets/about_hero.png";
import chancellorImg from "../../assets/chancellor.png";
import libraryImg from "../../assets/library.png";
import "./about.css";

const milestones = [
  {
    year: "2021",
    title: "Foundation & Vision",
    desc: "Heritage University was conceptualized as a beacon of academic rigor and entrepreneurial excellence in Mkpatak, Akwa Ibom State.",
    theme: "blue"
  },
  {
    year: "2023",
    title: "NUC Licensing",
    desc: "Received formal recognition and full operating license from the National Universities Commission (NUC), certifying our high academic standards.",
    theme: "white"
  },
  {
    year: "2024",
    title: "Inaugural Matriculation",
    desc: "Welcomed our first cohort of bright minds across 5 ultra-modern faculties, setting in motion our dream of cultivating greatness.",
    theme: "blue"
  },
  {
    year: "2025",
    title: "Global Collaboration",
    desc: "Signed landmark MOUs with top international research groups and European tech conglomerates for ICT advancement and shared research.",
    theme: "white"
  }
];

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(milestones.length - 1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
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
    <div ref={sectionRef} className="relative bg-slate-950 font-sans text-white overflow-hidden about-fade-in w-full">
      {/* ---------------- BACKGROUND EFFECTS ---------------- */}
      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none z-0"></div>
      
      {/* Scanning laser scanline */}
      <div className="absolute inset-0 bg-scanline pointer-events-none opacity-5 z-0"></div>

      {/* Floating Glowing Blue Orb */}
      <div className="absolute -top-10 left-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] animate-float-blue pointer-events-none z-0"></div>

      {/* Floating Glowing White Orb */}
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-slate-100/10 rounded-full blur-[150px] animate-float-white pointer-events-none z-0"></div>
      
      {/* Glowing cyan highlight bottom corner */}
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none z-0"></div>

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-20 px-6 sm:px-10 md:px-16 lg:pl-[100px] lg:pr-10 z-10 border-b border-blue-950/40">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-60">
          <img
            src={aboutHeroImg}
            alt="Heritage University Campus Building"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.05] animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/80 to-slate-950"></div>
        </div>

        <div className="relative z-10 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-md border border-blue-400/35 px-4 py-1.5 rounded-full text-blue-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            About Emmanuel Ekot University
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
            Empowering Minds, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-cyan-300 drop-shadow-[0_2px_15px_rgba(56,189,248,0.35)]">
              Shaping Future Leaders
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-200/80 font-light leading-relaxed max-w-3xl mx-auto mb-10">
            Heritage University is a center of excellence that fuses character development with ultra-modern science, computing, and professional learning.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-white rounded-full mx-auto shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
        </div>
      </section>

      {/* ---------------- CHANCELLOR'S MESSAGE SECTION ---------------- */}
      <section className="relative py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:pl-[100px] lg:pr-10 z-10 border-b border-blue-950/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Image & Decorative Borders */}
          <div className="lg:col-span-5 flex justify-center relative group">
            {/* Glowing borders behind image */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-white to-cyan-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-white rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative rounded-2xl overflow-hidden border border-blue-800/40 bg-slate-900 aspect-[4/5] max-w-sm w-full">
              <img
                src={chancellorImg}
                alt="Chancellor Emmanuel Ekot"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-6 right-6">
                <p className="text-lg font-bold text-white leading-tight">Prof. Emmanuel Ekot</p>
                <p className="text-xs text-blue-300 font-semibold tracking-wider uppercase">Founder / Chancellor</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-amber-500 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 block">
              Founder's Message
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-8">
              "Wisdom is the Principal Thing"
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-white rounded-full mb-8"></div>
            <div className="text-blue-100/80 font-light leading-relaxed text-base sm:text-lg space-y-6">
              <p>
                At Emmanuel Ekot University (Heritage University), we believe that education is not merely the accumulation of facts, but the training of the mind to think critically, the hand to create value, and the heart to lead with integrity.
              </p>
              <p>
                In a rapidly changing world dominated by technological leaps, computing advancements, and global challenges, our curriculum is carefully engineered to deliver practical skills. We groom students who are not only employment-ready but are innovators, problem-solvers, and moral leaders.
              </p>
              <blockquote className="border-l-4 border-blue-400 pl-4 py-1.5 italic text-blue-200 bg-blue-950/20 rounded-r-lg">
                "Our graduate leaves Heritage University equipped as an embodiment of Knowledge, Skills, and Wisdom. This is the cornerstone of our global citizenship objective."
              </blockquote>
              <p className="pt-2 text-white font-semibold flex items-center gap-2">
                — Prof. Emmanuel Ekot, <span className="text-blue-400 text-sm font-normal">Ph.D.</span>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- PILLARS OF EXCELLENCE (VISION, MISSION, VALUES) ---------------- */}
      <section className="relative py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:pl-[100px] lg:pr-10 z-10 bg-slate-950/60 border-b border-blue-950/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-amber-500 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 block">
              Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Our Vision, Mission & Values
            </h2>
            <div className="relative w-24 h-1 bg-gradient-to-r from-blue-500 to-white rounded-full mx-auto mt-4 overflow-hidden">
              <div className="absolute inset-0 w-1/2 h-full bg-white/40 transform -skew-x-12 animate-shimmer-sweep"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Vision Card */}
            <div className="relative rounded-2xl p-8 border border-blue-800/35 bg-slate-900/40 backdrop-blur-md hover:border-blue-400/50 hover:shadow-[0_15px_30px_rgba(37,99,235,0.15)] hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between group overflow-hidden">
              {/* Corner glows */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-600/10 rounded-full blur-xl group-hover:bg-blue-600/25 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors duration-300"></div>
              
              <div>
                <div className="w-12 h-12 bg-blue-600/20 border border-blue-400/40 rounded-xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  <svg className="w-6 h-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Our Vision</h3>
                <p className="text-blue-100/70 font-light text-sm sm:text-base leading-relaxed">
                  To be an internationally acclaimed center of excellence in teaching, research, and entrepreneurship, raising morally sound and highly competent innovators.
                </p>
              </div>
              <div className="mt-8 h-1 w-12 bg-blue-500 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>

            {/* Mission Card */}
            <div className="relative rounded-2xl p-8 border border-slate-700/35 bg-slate-900/40 backdrop-blur-md hover:border-white/50 hover:shadow-[0_15px_30px_rgba(255,255,255,0.08)] hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between group overflow-hidden">
              {/* Corner glows */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-600/10 rounded-full blur-xl group-hover:bg-blue-600/25 transition-colors duration-300"></div>

              <div>
                <div className="w-12 h-12 bg-slate-100/10 border border-white/30 rounded-xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-slate-200 transition-colors duration-300">Our Mission</h3>
                <p className="text-blue-100/70 font-light text-sm sm:text-base leading-relaxed">
                  To provide holistic university education utilizing modern instructional technologies, high-standard laboratories, and practical industrial partnerships.
                </p>
              </div>
              <div className="mt-8 h-1 w-12 bg-white rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>

            {/* Core Values Card */}
            <div className="relative rounded-2xl p-8 border border-blue-800/35 bg-slate-900/40 backdrop-blur-md hover:border-cyan-400/50 hover:shadow-[0_15px_30px_rgba(6,182,212,0.15)] hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between group overflow-hidden">
              {/* Corner glows */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-600/10 rounded-full blur-xl group-hover:bg-cyan-600/25 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-600/10 rounded-full blur-xl group-hover:bg-blue-600/25 transition-colors duration-300"></div>

              <div>
                <div className="w-12 h-12 bg-cyan-600/20 border border-cyan-400/40 rounded-xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  <svg className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">Core Values</h3>
                <p className="text-blue-100/70 font-light text-sm sm:text-base leading-relaxed">
                  Our foundation rests upon Chokhmah (Wisdom), moral discipline, integrity, respect, innovation, excellence, and a relentless pursuit of knowledge.
                </p>
              </div>
              <div className="mt-8 h-1 w-12 bg-cyan-500 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- HISTORICAL MILESTONES (ANIMATED TIMELINE) ---------------- */}
      <section className="relative py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:pl-[100px] lg:pr-10 z-10 border-b border-blue-950/40">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-20">
            <span className="text-amber-500 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Historical Milestones
            </h2>
            <div className="relative w-24 h-1 bg-gradient-to-r from-blue-500 to-white rounded-full mx-auto mt-4"></div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-stretch">
            
            {/* Center line for timeline (rendered on desktop) */}
            <div className="hidden md:flex md:col-span-1 justify-center relative">
              <div className="w-[2px] bg-gradient-to-b from-blue-950 via-slate-800 to-blue-950 h-full relative overflow-hidden">
                {/* Custom scanning laser wave inside the timeline line */}
                <div className="animate-timeline-wave"></div>
              </div>
            </div>

            {/* Timeline Left: Milestones List */}
            <div className="md:col-span-6 flex flex-col justify-center space-y-6">
              {milestones.map((item, idx) => {
                const isActive = activeTimeline === idx;
                const isBlue = item.theme === "blue";
                
                return (
                  <div
                    key={item.year}
                    onClick={() => setActiveTimeline(idx)}
                    className={`relative p-5 rounded-xl border transition-all duration-300 cursor-pointer text-left ${
                      isActive
                        ? isBlue
                          ? "bg-blue-950/50 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.25)]"
                          : "bg-slate-900/80 border-white shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                        : "bg-slate-900/30 border-blue-900/30 hover:border-blue-800/40 hover:bg-slate-900/50"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 mb-2">
                      <span className={`text-xl font-black ${
                        isBlue ? "text-blue-400" : "text-white"
                      }`}>
                        {item.year}
                      </span>
                      <div className={`w-2 h-2 rounded-full ${
                        isActive
                          ? isBlue
                            ? "bg-blue-400 animate-ping"
                            : "bg-white animate-ping"
                          : "bg-slate-700"
                      }`}></div>
                      <h4 className="text-md font-bold text-slate-100">{item.title}</h4>
                    </div>
                    <p className="text-slate-400 font-light text-sm line-clamp-2">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Timeline Right: Showcase Details Pane with Neon Glows */}
            <div className="md:col-span-5 flex items-center">
              <div className="relative w-full rounded-2xl p-8 border border-blue-900/60 bg-slate-900/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.6)] min-h-[280px] flex flex-col justify-between overflow-hidden">
                {/* Custom blue/white animated glow ring wrapper */}
                <div className={`absolute top-0 right-0 w-2 h-2 rounded-full m-4 ${
                  milestones[activeTimeline].theme === "blue"
                    ? "bg-blue-500 animate-glow-blue"
                    : "bg-white animate-glow-white"
                }`}></div>

                <div>
                  <span className="text-xs uppercase font-extrabold text-blue-400 tracking-[0.2em] block mb-2">
                    Milestone Year
                  </span>
                  <span className="text-6xl font-black text-white block mb-6 drop-shadow-[0_2px_15px_rgba(255,255,255,0.1)]">
                    {milestones[activeTimeline].year}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {milestones[activeTimeline].title}
                  </h3>
                  <p className="text-blue-100/70 font-light text-base leading-relaxed">
                    {milestones[activeTimeline].desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-slate-800/80 pt-4 flex justify-between items-center text-xs text-slate-500">
                  <span>Heritage University History</span>
                  <span className="text-blue-400 font-semibold">Active Details</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- CAMPUS & FACILITIES SHOWCASE ---------------- */}
      <section className="relative py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:pl-[100px] lg:pr-10 z-10 bg-slate-950/60">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-20">
            <span className="text-amber-500 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 block">
              Campus Environment
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              World-Class Facilities
            </h2>
            <div className="relative w-24 h-1 bg-gradient-to-r from-blue-500 to-white rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Gallery Image card */}
            <div className="relative rounded-2xl overflow-hidden border border-blue-800/40 bg-slate-900 shadow-2xl group aspect-[4/3] w-full">
              <div className="absolute inset-0 bg-blue-900/10 pointer-events-none z-10 mix-blend-overlay"></div>
              
              {/* Custom border lighting sweep effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-white rounded-2xl opacity-0 group-hover:opacity-30 blur-[2px] transition-opacity duration-500 z-0"></div>
              
              <img
                src={libraryImg}
                alt="Heritage University Library Interior"
                className="w-full h-full object-cover relative transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-75 z-10"></div>
              
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/40 mb-3.5 inline-block">
                  Academic Center
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Chokhmah Library Complex</h3>
                <p className="text-blue-100/70 font-light text-sm">
                  Housing thousands of physical textbooks alongside super-fast e-learning portals and research terminals.
                </p>
              </div>
            </div>

            {/* Details Content card */}
            <div className="flex flex-col justify-center text-left p-2 sm:p-6 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                Designed for Focus, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                  Built for Innovation
                </span>
              </h3>
              
              <div className="space-y-6 text-blue-200/80 font-light text-sm sm:text-base leading-relaxed">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-900/50 border border-blue-500/40 flex items-center justify-center text-blue-300 text-xs font-bold mt-1 shadow-[0_0_8px_rgba(59,130,246,0.3)]">✓</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Ultra-Modern Laboratories</h4>
                    <p className="text-sm text-slate-400">Equipped with standard chemistry, physics, biology, and specialized nursing simulation instruments.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-slate-800/50 border border-white/40 flex items-center justify-center text-white text-xs font-bold mt-1 shadow-[0_0_8px_rgba(255,255,255,0.2)]">✓</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">E-Learning & 24/7 Campus WiFi</h4>
                    <p className="text-sm text-slate-400">High-speed gigabit internet running across all lecture theaters and residential student accommodations.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-cyan-900/50 border border-cyan-500/40 flex items-center justify-center text-cyan-300 text-xs font-bold mt-1 shadow-[0_0_8px_rgba(6,182,212,0.3)]">✓</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Serene and Secure Environment</h4>
                    <p className="text-sm text-slate-400">Spacious botanical areas, modern hostels, and on-campus residency for faculty, guaranteeing security and focus.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}

export default About;
