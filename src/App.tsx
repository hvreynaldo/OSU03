import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RumbleVideo from './components/video/RumbleVideo';
import Mission from './components/Mission';
import AIInnovationHub from './components/innovation/AIInnovationHub';
import VideoShowcase from './components/video/VideoShowcase';
import AIGallery from './components/gallery/AIGallery';
import XWidget from './components/social/XWidget';
import PartnerLogos from './components/partners/PartnerLogos';
import HostSection from './components/host/HostSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <RumbleVideo />
        <Mission />
        <AIInnovationHub />
        <VideoShowcase />
        <HostSection />
        <AIGallery />
        <XWidget />
        <PartnerLogos />
      </main>
      <Footer />
    </div>
  );
}

export default App;