import React, { useRef, useEffect } from 'react';
import compu from "../assets/compu.png";

function Hero() {
    const compuRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const compu = compuRef.current;

            if (compu) {
                const moveFactor = 25; // Controla qué tan lejos se moverá la imagen respecto al movimiento del mouse

                const x = (event.clientX - window.innerWidth / 2) / moveFactor;
                const y = (event.clientY - window.innerHeight / 2) / moveFactor;

                compu.style.transform = `translate(${x}px, ${y}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className="bg-custom-bg" >
            <div className="xs:p-2 xs:pt-24 md:pt-24 md:p-20 flex mx-auto xs:flex xs:flex-col xs:items-center xs:justify-center md:flex-row md:items-center md:justify-between ">
                <div className="text-white max-w-2xl ">
                    <h1 className="text-5xl font-rubik mb-6">Que se venda</h1>
                    <p className="text-lg leading-relaxed mb-8">Nuestra misión es ayudar a las empresas a tener éxito en el mundo digital. Ofrecemos servicios de soluciones de software personalizadas diseñadas para mejorar la eficiencia, la rentabilidad y la productividad de las empresas, al mismo tiempo que les permiten trabajar mejor con sus empleados y atender más cotizaciones.</p>
                    <div className="xs:flex xs:flex-col xs:items-center xs:justify-center md:flex-row md:justify-start">
                        <button class="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-gray to-light-purple group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <a href="#servicios" class="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                                Explora nuestros servicio
                            </a>
                        </button>
                        <button class="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br  from-gray to-light-purple group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <a href="#contacto" class="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                                Contáctanos
                            </a>
                        </button>
                    </div>
                </div>
                <div className="w-full grow xs:p-4 xs:mx-1">
                    <img
                        ref={compuRef}
                        src={compu}
                        alt="compu"
                        className="w-full" // Aplica la transición suave con la función de aceleración ease-out
                    />
                </div>
            </div>
        </section>

    );
}

export default Hero;
