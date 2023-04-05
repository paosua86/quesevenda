import React from 'react';

function Contact() {
    return (
        <section class="bg-gray-100">
            <div class="container mx-auto px-4 py-16">
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/2 mb-8 md:mb-0">
                        <h2 class="text-3xl font-bold mb-4">Contáctanos</h2>
                        <p class="text-gray-700 mb-8">Ponte en contacto con nosotros para obtener más información sobre nuestros servicios de soluciones de software personalizadas. Puedes enviarnos un correo electrónico a <a href="mailto:info@quesevenda.com" class="text-indigo-600 underline hover:text-indigo-700">info@quesevenda.com</a> o llamarnos al <a href="tel:+15555555555" class="text-indigo-600 underline hover:text-indigo-700">+1-555-555-5555</a>.</p>
                        <form class="mb-8">
                            <div class="mb-4">
                                <label for="nombre" class="block text-gray-700 font-bold mb-2">Nombre:</label>
                                <input type="text" id="nombre" name="nombre" class="border rounded-lg py-2 px-3 w-full focus:outline-none focus:border-indigo-600" placeholder="Ingrese su nombre completo" />
                            </div>
                            <div class="mb-4">
                                <label for="email" class="block text-gray-700 font-bold mb-2">Correo electrónico:</label>
                                <input type="email" id="email" name="email" class="border rounded-lg py-2 px-3 w-full focus:outline-none focus:border-indigo-600" placeholder="Ingrese su correo electrónico" />
                            </div>
                            <div class="mb-4">
                                <label for="mensaje" class="block text-gray-700 font-bold mb-2">Mensaje:</label>
                                <textarea id="mensaje" name="mensaje" class="border rounded-lg py-2 px-3 w-full h-32 resize-none focus:outline-none focus:border-indigo-600" placeholder="Ingrese su mensaje"></textarea>
                            </div>
                            <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">Enviar</button>
                        </form>
                    </div>
                    <div class="w-full md:w-1/2">
                        <img src="https://picsum.photos/id/1084/800/600" alt="Imagen de contacto" class="rounded-lg w-full" />
                    </div>
                </div>
                <div class="text-center">
                    <p class="text-gray-700 mb-4">¿No estás seguro de por dónde empezar? Contáctanos y uno de nuestros especialistas en soluciones de software personalizadas te guiará en el proceso.</p>
                    <a href="#contacto" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">Contáctanos</a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
