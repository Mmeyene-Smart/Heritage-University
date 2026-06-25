import './App.css'
import Navbar from "./component/navbar/navbar"
import Hero from "./component/hero/hero"
import Philosophy from "./component/philosophy/philosophy"
import Faculties from "./component/faculties/faculties"
import Choose from "./component/choose/choose"
import News from "./component/news/news"
import Footer from "./component/footer/footer"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white pb-16">
      <Navbar />
      <Hero />
      <Philosophy />
      <Faculties />
      <Choose />
      <News />
      <Footer />
    </div>
  )
}

export default App
