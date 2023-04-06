import React from "react";

function Testimonios() {
  return (
    <section className="bg-custom-bg py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-white mb-2">Testimonios</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
              <p className="text-gray-700 leading-tight mb-6">
              "Optar por los servicios de Que se Venda ha sido una decisión acertada para nuestro negocio. Su equipo es eficiente y las soluciones de software proporcionadas han mejorado significativamente nuestra forma de trabajar. Agradecemos el apoyo de Que se Venda."
              </p>
              <div className="flex items-center">
                {/* <img
                  className="h-10 w-10 rounded-full mr-4"
                  src="https://source.unsplash.com/random/200x200"
                  alt="Testimonial"
                /> */}
                <div>
                  <p className="font-bold text-gray-800 mb-1">Cliente satisfecho</p>
                  <p className="text-gray-700">Quito, Ecuador</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
              <p className="text-gray-700 leading-tight mb-6">
                "El equipo de Que se Venda es excepcional en lo que hacen. Han
                sido un gran apoyo para nuestra empresa, desde la creación de
                nuestro sitio web hasta el acompañamiento para nuevas herramientas para nuestro negocio.
                Han superado todas nuestras expectativas y
                estamos muy agradecidos con su trabajo."
              </p>
              <div className="flex items-center">
                {/* <img
                  className="h-10 w-10 rounded-full mr-4"
                  src="https://source.unsplash.com/random/200x201"
                  alt="Testimonial"
                /> */}
                <div>
                  <p className="font-bold text-gray-800 mb-1">Cliente satisfecho</p>
                  <p className="text-gray-700">
                  Ambato, Ecuador
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
              <p className="text-gray-700 leading-tight mb-6">
                "Que se Venda nos brindó soluciones efectivas
                para nuestra empresa. Su atención al cliente es inigualable y
                siempre están dispuestos a ayudar. Recomendamos altamente a Que
                se Venda para cualquier empresa que necesite soluciones de
                software."
              </p>
              <div className="flex items-center">
                {/* <img
                  className="h-10 w-10 rounded-full mr-4"
                  src="https://source.unsplash.com/random/201x200"
                  alt="Testimonial"
                /> */}
                <div>
                  <p className="font-bold text-gray-800 mb-1">Cliente satisfecho</p>
                  <p className="text-gray-700">
                    Quito, Ecuador
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
