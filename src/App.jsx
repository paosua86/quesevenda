import React from 'react';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Services from './components/services';
import Testimonios from './components/testimonios';
import Recursos from './components/recursos';
import Nosotros from './components/nosotros';
import Contact from './components/contact';
import Footer from './components/footer';
import WhatsApp from './components/whatsAppButton';

function App() {
  return (
    <div>
      <Navbar />
      <WhatsApp />
      <Hero />
      <Services />
      <Testimonios />
      <Recursos />
      <Nosotros />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
