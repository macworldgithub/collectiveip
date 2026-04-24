import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Practices from '../components/Practices';
import Tools from '../components/Tools';
import CaseStudies from '../components/CaseStudies';
import PartnerValue from '../components/PartnerValue';
import DigitalFrontDoor from '../components/DigitalFrontDoor';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="font-body text-dark antialiased">
      <Navbar />
      <Hero />
      <Stats />
      <Practices />
      <Tools />
      <CaseStudies />
      <PartnerValue />
      <DigitalFrontDoor />
      <CTA />
      <Footer />
    </div>
  );
}
