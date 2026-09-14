import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import GlobalNetwork from './components/GlobalNetwork';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SupportWidget from './components/SupportWidget';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white" dir="rtl">
      <Nav />
      <main>
        <Hero />
        <Services />
        <GlobalNetwork />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <SupportWidget />
    </div>
  );
}

export default App;
