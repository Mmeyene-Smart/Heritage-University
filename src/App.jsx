import { useState } from "react";
import './App.css'
import Navbar from "./component/navbar/navbar"
import Hero from "./component/hero/hero"
import Philosophy from "./component/philosophy/philosophy"
import Faculties from "./component/faculties/faculties"
import Choose from "./component/choose/choose"
import News from "./component/news/news"
import About from "./component/about/about"
import Footer from "./component/footer/footer"

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white pb-16">
      <Navbar activePage={currentPage} setActivePage={setCurrentPage} />
      
      {currentPage === "Home" ? (
        <>
          <Hero />
          <Philosophy />
          <Faculties />
          <Choose />
          <News />
        </>
      ) : currentPage === "About Us" ? (
        <About />
      ) : null}

      <Footer />
    </div>
  )
}

export default App
