import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Coaches from './components/sections/Coaches';
import Directions from './components/sections/Directions';
import Pricing from './components/sections/Pricing';
import Instagram from './components/sections/Instagram';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F0F10] text-white flex flex-col font-sans selection:bg-[#F4B24B] selection:text-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Coaches />
        <Directions />
        <Pricing />
        <Instagram />
      </main>
      <Footer />
    </div>
  );
}