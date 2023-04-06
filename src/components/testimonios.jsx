import React from "react";

function Testimonios() {
  return (
    <section className="bg-custom-bg py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Testimonios</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
              <p className="text-gray-700 leading-tight mb-6">
                "Contratar los servicios de Que se Venda fue la mejor decisión
                que tomamos para nuestro negocio. Su equipo es altamente
                profesional y sus soluciones de software han transformado la
                forma en que hacemos negocios. ¡Gracias Que se Venda!"
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full mr-4"
                  src="https://source.unsplash.com/random/200x200"
                  alt="Testimonial"
                />
                <div>
                  <p className="font-bold text-gray-800 mb-1">Juan Pérez</p>
                  <p className="text-gray-700">CEO, Empresa ABC</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
              <p className="text-gray-700 leading-tight mb-6">
                "El equipo de Que se Venda es excepcional en lo que hacen. Han
                sido un gran apoyo para nuestra empresa, desde la creación de
                nuestro sitio web hasta el desarrollo de una aplicación móvil
                personalizada. Han superado todas nuestras expectativas y
                estamos muy agradecidos con su trabajo."
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full mr-4"
                  src="https://source.unsplash.com/random/200x201"
                  alt="Testimonial"
                />
                <div>
                  <p className="font-bold text-gray-800 mb-1">María González</p>
                  <p className="text-gray-700">
                    Gerente de Marketing, Empresa XYZ
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
              <p className="text-gray-700 leading-tight mb-6">
                "Que se Venda nos brindó soluciones personalizadas y efectivas
                para nuestra empresa. Su atención al cliente es inigualable y
                siempre están dispuestos a ayudar. Recomendamos altamente a Que
                se Venda para cualquier empresa que necesite soluciones de
                software."
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full mr-4"
                  src="https://source.unsplash.com/random/201x200"
                  alt="Testimonial"
                />
                <div>
                  <p className="font-bold text-gray-800 mb-1">José Martínez</p>
                  <p className="text-gray-700">
                    Director de Operaciones, Empresa DEF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
