import React from 'react';

function Nosotros() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold mb-4">¿Quiénes somos?</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Somos una empresa dedicada a ofrecer soluciones de software para negocios de todo tipo. Nuestro objetivo es ayudar a nuestros clientes a mejorar sus procesos y aumentar sus ventas a través de la tecnología. Contamos con un equipo de profesionales altamente capacitados en distintas áreas de desarrollo de software y nos esforzamos por ofrecer el mejor servicio y atención al cliente.
                        </p>
                        <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">Contacto</a>
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
