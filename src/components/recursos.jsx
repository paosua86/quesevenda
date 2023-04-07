import React from "react";
import { useTranslation } from "react-i18next";

function Recursos() {
  const { t } = useTranslation();

  const recursos = [
    {
      id: 1,
      title: t("recursos.resource1Title"),
      description: t("recursos.resource1Desc"),
      link: "/",
      image: "./mano1.png",
      alt: "Resource 1",
      buttonText: t("recursos.download"),
    },
    {
      id: 2,
      title: t("recursos.resource2Title"),
      description: t("recursos.resource2Desc"),
      link: "/",
      image: "./mano2.png",
      alt: "Resource 2",
      buttonText: t("recursos.download"),
    },
    {
      id: 3,
      title: t("recursos.resource3Title"),
      description: t("recursos.resource3Desc"),
      link: "/",
      image: "./mano3.png",
      alt: "Resource 3",
      buttonText: t("recursos.download"),
    },
  ];

  return (
    <section className="bg-custom-bg py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-5xl font-bold text-white mb-2">
            {t("recursos.title")}
          </h2>
          <p data-aos="fade-up" className="text-white">{t("recursos.subtitle")}</p>
        </div>
        <div  data-aos="fade-up-right" className="flex flex-wrap -mx-4">
          {recursos.map((resource) => (
            <div
              key={resource.id}
              className="w-full md:w-1/3 px-4 mb-8"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="h-48 w-full object-cover"
                  src={resource.image}
                  alt={resource.alt}
                />
                <div className="py-6 px-8">
                  <h3 className="text-2xl font-bold mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-700 leading-tight mb-6">
                    {resource.description}
                  </p>
                  <button className="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br  from-gray to-light-purple group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <a
                      href={resource.link}
                      className="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0"
                    >
                      {resource.buttonText}
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

export default Recursos;
