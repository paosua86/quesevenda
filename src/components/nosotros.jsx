import React from 'react';

function Nosotros() {
    return (
        <section className="bg-custom-bg py-16" id="nosotros">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold mb-4">¿Quiénes somos?</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Somos una empresa dedicada a ofrecer soluciones de software para negocios de todo tipo. Nuestro objetivo es ayudar a nuestros clientes a mejorar sus procesos y aumentar sus ventas a través de la tecnología. Contamos con un equipo de profesionales altamente capacitados en distintas áreas de desarrollo de software y nos esforzamos por ofrecer el mejor servicio y atención al cliente.
                        </p>
                        <button class="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br  from-gray to-light-purple group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <a href="/" class="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                                Contacto
                            </a>
                        </button>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <img src="https://via.placeholder.com/640x480" alt="Equipo de trabajo" className="w-full h-auto lg:ml-auto lg:mr-0 rounded-lg" />
                    </div>
                </div>
            </div>
        </section>


    );
}

export default Nosotros;
