import React from "react";

function Services() {
  return (
    <section class="bg-custom-bg py-16" id="servicios">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="flex items-center justify-center h-40 bg-light-purple">
                <svg
                  class="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div class="py-6 px-8">
                <h3 class="text-2xl font-bold mb-2">Diseño y desarrollo web</h3>
                <p class="text-gray-700 leading-tight mb-6">
                  Creamos sitios web personalizados y enfocados en la
                  experiencia del usuario, utilizando las últimas tecnologías
                  para garantizar que su negocio tenga una presencia en línea
                  efectiva.
                </p>
                <button class="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br  from-gray to-light-purple group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <a href="/" class="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                    Saber más
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="flex items-center justify-center h-40 bg-purple">
                <svg
                  class="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div class="py-6 px-8">
                <h3 class="text-2xl font-bold mb-2">
                  Desarrollo de aplicaciones móviles
                </h3>
                <p class="text-gray-700 leading-tight mb-6">
                  Desarrollamos aplicaciones móviles personalizadas para iOS y
                  Android, para que su negocio pueda llegar a sus clientes donde
                  sea que estén, con una experiencia de usuario inigualable.
                </p>
                <button class="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br  from-gray to-light-purple group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <a href="/" class="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                    Saber más
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="flex items-center justify-center h-40 bg-green">
                <svg
                  class="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 1 3 12 9 9zM12 17l-4 4m0 0l-4-4m4 4V3"
                  ></path>
                </svg>
              </div>
              <div class="py-6 px-8">
                <h3 class="text-2xl font-bold mb-2">
                  Bots de atención al cliente
                </h3>
                <p class="text-gray-700 leading-tight mb-6">
                  Creamos bots de atención al cliente personalizados para que su
                  empresa pueda atender a sus clientes de manera eficiente y
                  rápida, lo que se traduce en una mayor satisfacción y
                  fidelización de clientes.
                </p>
                <button class="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br  from-gray to-light-purple group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <a href="/" class="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                    Saber más
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

export default Services;
