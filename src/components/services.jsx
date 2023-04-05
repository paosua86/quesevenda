import React from "react";

function Services() {
  return (
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="flex items-center justify-center h-40 bg-indigo-600">
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
                <a
                  href="#"
                  class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Saber más
                </a>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="flex items-center justify-center h-40 bg-purple-600">
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
                <a
                  href="#"
                  class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Saber más
                </a>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="flex items-center justify-center h-40 bg-pink-600">
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
                <a
                  href="#"
                  class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Saber más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
