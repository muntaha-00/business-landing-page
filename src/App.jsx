
import CompanyLogo from "./components/CompanyLogo"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import "./App.css"
import PurposeSection from "./components/PurposeSection"
import FeatureSection from "./components/FeatureSection"
import ScheduleSection from "./components/ScheduleSection"
import MonitorSection from "./components/MonitorSection"
import PricingSection from "./components/PricingSection"
import ServiceSection from "./components/ServiceSection"
import TestimonialsSection from "./components/TestimonialsSection"
import NewsletterSection from "./components/NewsletterSection"
import Footer from "./components/Footer"




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
         <ScheduleSection/>
         <MonitorSection/>
         <PricingSection/>
         <ServiceSection/>
         <TestimonialsSection/>
         <NewsletterSection/>
         <Footer/>
  
      </div>
    </main>
  )
  
}

export default App
