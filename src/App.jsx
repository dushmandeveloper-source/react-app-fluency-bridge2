import CustomCursor from './components/CustomCursor';
import BackgroundDecor from './components/BackgroundDecor';
import Navbar from './components/Navbar';
import CompanyIntroSection from './components/sections/CompanyIntroSection';
import FluencyBridgeSection from './components/sections/FluencyBridgeSection';
import NZAcademicBridgeSection from './components/sections/NZAcademicBridgeSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-brand-accent selection:text-brand-dark flex flex-col min-h-screen custom-cursor-active relative">
      <CustomCursor />
      <BackgroundDecor />
      <Navbar />

      <CompanyIntroSection />

      <main className="flex-grow relative z-10 flex flex-col lg:flex-row min-h-screen overflow-x-hidden">
        <FluencyBridgeSection />
        <NZAcademicBridgeSection />
      </main>

      <Footer />
    </div>
  );
}
