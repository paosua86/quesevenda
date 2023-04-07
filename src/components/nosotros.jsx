import React from 'react';
import { useTranslation } from 'react-i18next';

function Nosotros() {
  const { t } = useTranslation();

  return (
    <section className="bg-custom-bg py-16" id="nosotros">
      <div className="container mx-auto px-4 xs:p-2 xs:pt-24 md:pt-24 md:p-5">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <h2 className="text-5xl font-bold text-white mb-2">{t('nosotros.title')}</h2>
            <p className="text-white leading-relaxed mb-8">{t('nosotros.subtitle')}</p>
            <button className="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br  from-gray to-light-purple group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <a href="https://wa.me/593998536569?text=Hola!%20cuentame%20sobre%20ustedes" target="_blank" rel="noreferrer" className="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                {t('nosotros.buttonText')}
              </a>
            </button>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <img src="./equipo.png" alt={t('nosotros.teamAlt')} className="w-full h-auto lg:ml-auto lg:mr-0 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
