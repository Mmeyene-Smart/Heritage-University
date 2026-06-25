import { useEffect, useRef, useState } from "react";

function Philosophy() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.12 }
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
      className="relative w-full bg-white py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:pl-[100px] lg:pr-10 overflow-hidden font-sans border-t border-slate-200/60"
    >
      {/* Decorative Corner Concentric Rings (matching top-left/bottom-right reference) */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border-[1.5px] border-slate-200/60 pointer-events-none animate-pulse duration-[8000ms]"></div>
      <div className="absolute -top-10 -left-10 w-80 h-80 rounded-full border-[1.5px] border-slate-100 pointer-events-none"></div>

      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-[1.5px] border-slate-200/60 pointer-events-none animate-pulse duration-[10000ms]"></div>
      <div className="absolute -bottom-12 -right-12 w-96 h-96 rounded-full border-[1.5px] border-slate-100 pointer-events-none"></div>

      {/* Cyberpunk Grid Accent Lines */}
      <div className="absolute top-0 left-[10%] w-[1px] h-32 bg-gradient-to-b from-slate-200 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-[15%] w-[1px] h-32 bg-gradient-to-t from-slate-200 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">

        {/* Left Column - Heading Details */}
        <div
          className={`md:col-span-5 transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
        >
          <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 block">
            Our Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-8">
            Our Entrepreneurship <br />
            and Life Skills <br className="hidden md:inline" />
            Philosophy
          </h2>
          <div className="relative w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-[0_0_10px_rgba(217,119,6,0.2)] overflow-hidden group">
            {/* Animated shine line inside the gold line */}
            <div className="absolute inset-0 w-1/2 h-full bg-white/40 transform -skew-x-12 animate-shine-slow"></div>
          </div>
        </div>

        {/* Vertical Separator Line (Desktop only) */}
        <div className="hidden md:flex md:col-span-1 justify-center h-full min-h-[220px] relative">
          <div
            className={`w-[1px] bg-gradient-to-b from-slate-100 via-slate-300 to-slate-100 h-full transition-transform duration-1000 delay-300 origin-top transform ${isVisible ? "scale-y-100" : "scale-y-0"
              }`}
          ></div>
        </div>

        {/* Right Column - Text Description */}
        <div
          className={`md:col-span-6 text-slate-600 font-light leading-relaxed text-base sm:text-lg transition-all duration-1000 ease-out transform delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
        >
          <p className="mb-6">
            University education these days is in dire need of intrinsic
            educational values, character and attitudinal traits necessary for
            the promotion of more employability and entrepreneurial
            capacities of the products of the system. Heritage University is
            therefore poised to equip the students with basic
            entrepreneurship and lifelong skills through the implementation of
            well-crafted course contents and soft skills concepts whose
            philosophy would adequately sensitize and equip the students to
            appreciate life before now, life on-going and life to come.
          </p>
          <p>
            These concepts are elegantly fused into the core-knowledge curriculum
            in various fields of study in the University. The student is thus
            expected to graduate and become an embodiment of{" "}
            <span className="font-semibold text-blue-900 drop-shadow-[0_1px_2px_rgba(30,58,138,0.05)]">
              "knowledge, skills and wisdom"
            </span>
            , an outcome that would enhance critical thinking skills, emotional
            balance and global citizenship. The grooming process is achieved
            through carefully selected compulsory entrepreneurship and life
            skills courses.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
