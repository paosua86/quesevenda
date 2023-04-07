import React from "react";
import { useTranslation } from "react-i18next";


function Services() {
  const { t, i18n } = useTranslation();

  const services = [
    {
      id: 1,
      title: t("services.web.title"),
      description: t("services.web.description"),
      link: "https://wa.me/593998536569?text=Hola!%20vengo%20de%20tu%20pagina%20web%20y%20tengo%20preguntas%20sobre%20paginas%20web"
    },
    {
      id: 2,
      title: t("services.mobile.title"),
      description: t("services.mobile.description"),
      link: "https://wa.me/593998536569?text=Hola!%20vengo%20de%20tu%20pagina%20web%20y%20tengo%20preguntas%20sobre%20aplicaciones%20móviles"
    },
    {
      id: 3,
      title: t("services.bot.title"),
      description: t("services.bot.description"),
      link: "https://wa.me/593998536569?text=Hola!%20vengo%20de%20tu%20pagina%20web%20y%20tengo%20preguntas%20sobre%20Bots"
    },
  ];

  return (
    <section className="bg-custom-bg py-16" id="servicios">
      <div className="container mx-auto px-4 xs:p-2 xs:pt-24 md:pt-24 md:p-5">
        <div data-aos="fade-up-right" className="flex flex-wrap -mx-4">
          {services.map((service) => (
            <div key={service.id} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex items-center justify-center h-40 bg-light-purple">
                  <svg
                    className="h-16 w-16 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        service.id === 1
                          ? "M6 18L18 6M6 6l12 12"
                          : service.id === 2
                            ? "M13 10V3L4 14h7v7"
                            : "M21 12a9 9 0 11-18 0 9 9 0 1 3 12 9 9zM12 17l-4 4m0 0l-4-4m4 4V3"
                      }
                    />
                  </svg>
                </div>
                <div className="py-6 px-8">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-700 leading-tight mb-6">
                    {service.description}
                  </p>
                  <button className="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-gray to-light-purple group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <a href={service.link} target="_blank" rel="noreferrer" className="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                      {t("services.learnMore")}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

