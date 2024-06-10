
import ContactForm from "./components/ContactForm"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MarketingSection from "./components/MarketingSection"
import Navbar from "./components/Navbar"
import ProcessSection from "./components/ProcessSection"
import Services from "./components/Services"
import TestimonialCarousel from "./components/TestimonialCarousel"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ProcessSection />
      <MarketingSection />
      <TestimonialCarousel />
      <ContactForm />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
