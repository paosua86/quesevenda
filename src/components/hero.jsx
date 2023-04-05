import React from 'react';

function Hero() {
    return (
        <div className="bg-gradient-to-br from-purple-600 to-indigo-800 py-20">
            <div className="container mx-auto flex items-center justify-between">
                <div className="w-1/2 text-white">
                    <h1 className="text-5xl font-bold mb-6">Que se venda</h1>
                    <p className="text-lg leading-relaxed mb-8">Nuestra misión es ayudar a las empresas a tener éxito en el mundo digital. Ofrecemos servicios de soluciones de software personalizadas diseñadas para mejorar la eficiencia, la rentabilidad y la productividad de las empresas, al mismo tiempo que les permiten trabajar mejor con sus empleados y atender más cotizaciones.</p>
                    <div className="flex">
                        <a href="#" className="bg-white text-purple-600 font-bold py-2 px-4 rounded-full mr-4">Explora nuestros servicios</a>
                        <a href="#" className="bg-transparent text-white font-bold py-2 px-4 rounded-full border-2 border-white">Contáctanos</a>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src="https://via.placeholder.com/450x300" alt="Software en 3D" className="w-full" />
                </div>
            </div>
        </div>

    );
}

export default Hero;
