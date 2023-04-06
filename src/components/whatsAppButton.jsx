import React from 'react';
import './style.css';

class Whatsapp extends React.Component {
  render() {
    return (
      <a className="whatsapp_btn" href="https://wa.me/593998049134?text=Hola%20quiero%20cotizar%20un%20seguro" target="_blank" rel="noreferrer">
        <img src="./whatsapp_btn.svg" alt="whatsapp" />
      </a>
    );
  }
}

export default Whatsapp;
