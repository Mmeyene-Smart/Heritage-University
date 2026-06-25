import { useState, useEffect } from "react";
import logo from "../../assets/realogo.jpeg";

const navItems = [
  "Home",
  "About Us",
  "Academics",
  "Admissions",
  "Campus Life",
  "Collaborate",
  "Fees"
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`w-full sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.06)] border-b border-blue-900/10" 
          : "bg-white border-b border-transparent shadow-[0_2px_4px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div 
        className={`px-2 md:px-2 lg:pl-[100px] lg:pr-10 flex justify-between items-center transition-all duration-500 ${
          isScrolled ? "py-2.5" : "py-4.5"
        }`}
      >
        {/* Logo and University Name - Starts 100px from left on large screens */}
        <div className="flex items-center gap-3 mr-[10px] group cursor-pointer">
          <img 
            src={logo} 
            alt="Heritage University" 
            className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] object-contain relative transition-transform duration-700 ease-out group-hover:rotate-[360deg] group-hover:scale-110" 
          />
          <span className="text-[22px] sm:text-[24px] md:text-2xl font-bold text-blue-900 tracking-wide whitespace-nowrap leading-tight">
            Heritage <br/><span className="font-normal text-slate-650">University</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-6 xl:gap-8 text-blue-900 font-semibold text-sm tracking-wide">
            {navItems.map((item) => (
              <li 
                key={item}
                className="relative cursor-pointer transition-colors duration-300 py-2 whitespace-nowrap text-blue-900/80 hover:text-blue-900 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
            <li>
              <button className="relative overflow-hidden bg-blue-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-[0_4px_12px_rgba(30,58,138,0.2)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.35)] hover:scale-105 active:scale-95 hover:bg-amber-400 hover:text-blue-900 transition-all duration-300 whitespace-nowrap cursor-pointer">
                Apply Now
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-blue-900 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-blue-900 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-blue-900 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden bg-white shadow-lg transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] py-4 border-t border-gray-100" : "max-h-0 py-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col items-center text-blue-900 font-semibold text-sm space-y-1 px-6">
          {navItems.map((item, index) => (
            <li 
              key={item}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
              }}
              className={`w-full text-center hover:bg-blue-50/80 py-3 rounded transition-all duration-500 ease-out cursor-pointer transform ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
            >
              {item}
            </li>
          ))}
          <li 
            style={{
              transitionDelay: isOpen ? `${navItems.length * 50}ms` : "0ms",
            }}
            className={`w-full text-center mt-2 transform transition-all duration-500 ease-out ${
              isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <button className="bg-blue-900 text-white px-8 py-2.5 rounded-full text-sm font-semibold w-full hover:bg-amber-400 hover:text-blue-900 transition-all duration-300 shadow-[0_4px_12px_rgba(30,58,138,0.2)]">
              Apply Now
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;