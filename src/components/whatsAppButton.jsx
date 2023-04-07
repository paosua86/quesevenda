import React from 'react';
import './whatsappstyle.css';

class Whatsapp extends React.Component {
  render() {
    return (
      <a data-aos="zoom-in-up" className="whatsapp_btn" href="https://wa.me/593998536569?text=Hola!%20vengo%20de%20tu%20pagina%20web%20y%20tengo%20preguntas" target="_blank" rel="noreferrer">
        <img src="./whatsapp_btn.svg" alt="whatsapp" />
      </a>
    );
  }
}

export default Whatsapp;
