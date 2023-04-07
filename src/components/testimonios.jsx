import React from "react";
import { useTranslation } from "react-i18next";
import en from "../locales/en.json";
import es from "../locales/es.json";

function Testimonios() {
  const { t, i18n } = useTranslation();

  const testimonios = [
    {
      id: 1,
      text: t("testimonials.testimonial1.text"),
      name: t("testimonials.testimonial1.name"),
      location: t("testimonials.testimonial1.location")
    },
    {
      id: 2,
      text: t("testimonials.testimonial2.text"),
      name: t("testimonials.testimonial2.name"),
      location: t("testimonials.testimonial2.location")
    },
    {
      id: 3,
      text: t("testimonials.testimonial3.text"),
      name: t("testimonials.testimonial3.name"),
      location: t("testimonials.testimonial3.location")
    }
  ];

  return (
    <section className="bg-custom-bg py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-white mb-2">{t("testimonials.title")}</h2>
        <div className="flex flex-wrap -mx-4">
          {testimonios.map((testimonio) => (
            <div key={testimonio.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
                <p className="text-gray-700 leading-tight mb-6">{testimonio.text}</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-gray-800 mb-1">{testimonio.name}</p>
                    <p className="text-gray-700">{testimonio.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
