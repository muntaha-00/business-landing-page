
import CompanyLogo from "./components/CompanyLogo"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import "./App.css"
import PurposeSection from "./components/PurposeSection"
import FeatureSection from "./components/FeatureSection"


function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px]
      bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full
      blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
         <Navbar/>
         <Hero/>
         <CompanyLogo/>
         <PurposeSection/>
         <FeatureSection/>
  
      </div>
    </main>
  )
  
}

export default App
