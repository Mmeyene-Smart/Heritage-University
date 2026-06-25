import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
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
    <footer 
      ref={sectionRef}
      className="relative w-full bg-[#02050c] text-white pt-16 pb-8 px-6 sm:px-10 md:px-16 lg:pl-[100px] lg:pr-10 overflow-hidden font-sans border-t-4 border-t-amber-500"
    >
      
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-16">
        
        {/* Brand & Logo Column */}
        <div 
          className={`md:col-span-4 flex flex-col items-start transition-all duration-[900ms] ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <img 
              src={logo} 
              alt="Heritage University" 
              className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] object-contain" 
            />
            <span className="text-[20px] sm:text-[22px] font-bold text-white tracking-wide leading-none">
              Heritage <br/><span className="font-normal text-slate-300 text-sm sm:text-base">University</span>
            </span>
          </div>

          <div className="flex gap-3.5 items-stretch mb-6">
            <div className="w-[3px] bg-gradient-to-b from-amber-400 to-amber-500 rounded-full"></div>
            <p className="text-sm italic text-blue-200/80 leading-relaxed font-light">
              "Wisdom, The Greatest."
            </p>
          </div>

          <p className="text-xs tracking-wider text-slate-400 uppercase font-semibold leading-relaxed max-w-xs">
            LICENSED BY THE NATIONAL UNIVERSITIES COMMISSION (NUC).
          </p>
        </div>

        {/* Academics links Column */}
        <div 
          className={`md:col-span-3 transition-all duration-[900ms] delay-[100ms] ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-amber-400 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-6">
            Academics
          </h3>
          <ul className="space-y-3.5 text-sm sm:text-[15px] font-light text-blue-200/70">
            <li className="hover:text-cyan-300 transition-colors duration-250 cursor-pointer hover:translate-x-1 transform transition-transform duration-200">
              Computing & Applied Sciences
            </li>
            <li className="hover:text-cyan-300 transition-colors duration-250 cursor-pointer hover:translate-x-1 transform transition-transform duration-200">
              Engineering
            </li>
            <li className="hover:text-cyan-300 transition-colors duration-250 cursor-pointer hover:translate-x-1 transform transition-transform duration-200">
              Law
            </li>
            <li className="hover:text-cyan-300 transition-colors duration-250 cursor-pointer hover:translate-x-1 transform transition-transform duration-200">
              Management & Social Sciences
            </li>
            <li className="hover:text-cyan-300 transition-colors duration-250 cursor-pointer hover:translate-x-1 transform transition-transform duration-200">
              Medical Sciences
            </li>
          </ul>
        </div>

        {/* Admissions links Column */}
        <div 
          className={`md:col-span-2 transition-all duration-[900ms] delay-[200ms] ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-amber-400 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-6">
            Admissions
          </h3>
          <ul className="space-y-3.5 text-sm sm:text-[15px] font-light text-blue-200/70">
            <li className="hover:text-cyan-300 transition-colors duration-250 cursor-pointer hover:translate-x-1 transform transition-transform duration-200">
              Undergraduate
            </li>
            <li className="hover:text-cyan-300 transition-colors duration-250 cursor-pointer hover:translate-x-1 transform transition-transform duration-200">
              Tuition & Fees
            </li>
            <li className="hover:text-cyan-300 transition-colors duration-250 cursor-pointer hover:translate-x-1 transform transition-transform duration-200">
              Conferences
            </li>
          </ul>
        </div>

        {/* Contact info Column */}
        <div 
          className={`md:col-span-3 transition-all duration-[900ms] delay-[300ms] ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-amber-400 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-6">
            Contact
          </h3>
          <ul className="space-y-4 text-sm sm:text-[15px] font-light text-blue-200/70">
            <li className="leading-relaxed">
              Mkpatak, Essien Udim LGA <br />
              Akwa Ibom State, Nigeria
            </li>
            <li className="hover:text-cyan-300 transition-colors duration-250 cursor-pointer flex items-center gap-2">
              <span className="text-amber-400 font-medium">+2348137357200</span>
            </li>
            <li className="hover:text-cyan-300 transition-colors duration-250 cursor-pointer flex items-center gap-2">
              <span className="text-amber-400 font-medium">+2348053475763</span>
            </li>
            <li className="hover:text-cyan-300 transition-colors duration-250 cursor-pointer truncate">
              <a href="mailto:admissions@heritage.edu.ng">admissions@heritage.edu.ng</a>
            </li>
            <li className="hover:text-cyan-300 transition-colors duration-250 cursor-pointer truncate">
              <a href="mailto:info@heritage.edu.ng">info@heritage.edu.ng</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom copyright area */}
      <div 
        className={`relative z-10 max-w-6xl mx-auto pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-500 transition-all duration-[900ms] delay-[400ms] ease-out transform ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <p className="mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Softsuite Solutions. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
