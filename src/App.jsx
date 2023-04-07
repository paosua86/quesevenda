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
// import LanguageSelector from "./components/LanguageSelector";

function App() {
  const handleLanguageSelected = (language) => {
    console.log(`Selected language: ${language}`);
  };
  return (
    <I18nextProvider i18n={i18n}>
      <Navbar />
      <WhatsApp />
      <Hero />
      <Services />
      <Testimonios />
      {/* <div className="App">
      <LanguageSelector onLanguageSelected={handleLanguageSelected} />
    </div> */}
      <Recursos />
      <Nosotros />
      <Contact />
      <Footer />

    </I18nextProvider>
  );
}

export default App;
