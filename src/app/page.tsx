import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
