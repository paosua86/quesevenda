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
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Navbar />
      <WhatsApp />
      <Hero />
      <Services />
      <Testimonios />
      <Recursos />
      <Nosotros />
      <Contact />
      <Footer />
    </I18nextProvider>
  );
}

export default App;
