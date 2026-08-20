import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Diferenciais from '@/components/Diferenciais';
import Servicos from '@/components/Servicos';
import Sobre from '@/components/Sobre';
import Depoimentos from '@/components/Depoimentos';
import Localizacao from '@/components/Localizacao';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Diferenciais />
      <Servicos />
      <Sobre />
      <Depoimentos />
      <Localizacao />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
