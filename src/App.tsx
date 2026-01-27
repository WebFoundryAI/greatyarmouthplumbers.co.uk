import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServiceAreas } from './components/ServiceAreas';
import { ContactForm } from './components/ContactForm';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreas />
      <ContactForm />
      <Footer />
    </div>
  );
}
