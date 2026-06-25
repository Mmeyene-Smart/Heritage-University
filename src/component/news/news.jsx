import { useEffect, useRef, useState } from "react";

const articles = [
  {
    id: 1,
    title: "Heritage University Secures Spot Among Nigeria's Top 10 Private Universities in 2025",
    text: "Heritage University has achieved a significant milestone by ranking among Top 10 Nigeria's private universities in the 2025 AD Scientific Index, which evaluates institutions based on research output, faculty quality, and academic influence. This...",
    link: "#",
    date: "2025"
  },
  {
    id: 2,
    title: "HERITAGE UNIVERSITY PARTNERS GERMAN-BASED TECHNOLOGY GROUP, SIGNS MOU FOR EDUCATIONAL WORK AND RESEARCH ADVANCEMENT",
    text: "Heritage University has partnered with Rohde & Schwarz GmbH & Co. KG, Munchen, Germany, in a bid to boost the university's research activities in the areas of Information and Communication Technology (ICT). The agreement was set-up under Rohde &...",
    link: "#",
    date: "2025"
  },
  {
    id: 3,
    title: "Heritage University Nursing Science Department Approved by Nursing and Midwifery Council of Nigeria",
    text: "The Nursing and Midwifery Council of Nigeria has commended Heritage University for its exemplary commitment to training student nurses and for providing ample manpower and resources to foster the growth of the Department and equip students with the...",
    link: "#",
    date: "2025"
  }
];

function News() {
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
      className="relative w-full bg-[#030611] py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:pl-[100px] lg:pr-10 overflow-hidden font-sans border-t border-blue-950/20"
    >
      {/* Decorative details */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 block">
            Campus Updates
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Latest News & Events
          </h2>
          <div className="relative w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mx-auto shadow-[0_0_8px_rgba(245,158,11,0.3)] overflow-hidden">
            <div className="absolute inset-0 w-1/2 h-full bg-white/40 transform -skew-x-12 animate-shine-slow"></div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => (
            <div
              key={article.id}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
              className={`bg-slate-900/50 backdrop-blur-md border border-blue-900/20 hover:border-cyan-500/40 rounded-xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(6,182,212,0.15)] flex flex-col justify-between transition-all duration-700 ease-out transform group relative overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {/* Glowing Top line border accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300"></div>

              <div>
                {/* Article Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 line-clamp-3 group-hover:text-cyan-300 transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>
                
                {/* Article Text Content */}
                <p className="text-sm sm:text-base text-blue-200/70 leading-relaxed font-light mb-8 line-clamp-5">
                  {article.text}
                </p>
              </div>

              <div>
                {/* Read More Link */}
                <a
                  href={article.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm tracking-wider transition-colors duration-300"
                >
                  Read More
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

        {/* View All Button with entry animation */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ease-out transform ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <button className="group relative inline-flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 hover:text-white font-bold px-8 py-3.5 rounded-lg overflow-hidden transition-colors duration-300 cursor-pointer">
            <span className="relative z-10 flex items-center gap-2 tracking-wide text-sm">
              VIEW ALL ARTICLES
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-cyan-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default News;
