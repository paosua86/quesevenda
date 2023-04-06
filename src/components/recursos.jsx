import React from "react";

function Recursos() {
  return (
    <section class="bg-custom-bg py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-800 mb-2">
            Recursos descargables
          </h2>
          <p class="text-gray-600">
            Aquí encontrarás recursos gratuitos para ayudar a tu negocio a
            crecer y mejorar.
          </p>
        </div>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                class="h-48 w-full object-cover"
                src="https://via.placeholder.com/300x150"
                alt="Resource 1"
              />
              <div class="py-6 px-8">
                <h3 class="text-2xl font-bold mb-2">
                  Guía para mejorar la eficiencia de tu negocio
                </h3>
                <p class="text-gray-700 leading-tight mb-6">
                  Descarga esta guía gratuita para conocer las mejores prácticas
                  para hacer que tu negocio sea más eficiente y productivo.
                </p>
                <button class="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br  from-gray to-light-purple group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <a href="/" class="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                    Descargar
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                class="h-48 w-full object-cover"
                src="https://via.placeholder.com/300x150"
                alt="Resource 2"
              />
              <div class="py-6 px-8">
                <h3 class="text-2xl font-bold mb-2">
                  Plantilla de plan de negocios
                </h3>
                <p class="text-gray-700 leading-tight mb-6">
                  Descarga esta plantilla gratuita para crear un plan de
                  negocios detallado y efectivo para tu empresa.
                </p>
                <button class="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br  from-gray to-light-purple group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <a href="/" class="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                    Descargar
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src="https://via.placeholder.com/300x150"
                alt="Resource 3"
              />
              <div class="py-6 px-8">
                <h3 class="text-2xl font-bold mb-2">
                  Lista de herramientas de marketing digital
                </h3>
                <p class="text-gray-700 leading-tight mb-6">
                  Descarga esta lista gratuita con las mejores herramientas de
                  marketing digital para ayudar a tu empresa a crecer y
                  destacarse en línea.
                </p>
                <button class="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br  from-gray to-light-purple group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <a href="/" class="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                    Descargar
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recursos;
