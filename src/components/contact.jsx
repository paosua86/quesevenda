import React from 'react';
import Spline from '@splinetool/react-spline';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("xpzeoara");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <section className="w-full h-screen " id="contacto">
            <Spline scene="https://prod.spline.design/VLXbumj01AtjLDER/scene.splinecode" className="absolute z-10" />
            <div className="container xs:p-2 xs:pt-24 md:pt-24 md:p-5 flex items-center justify-center flex-1 h-full mx-auto ">
                <div className="w-full max-w-lg z-20">
                    <div className="leading-loose">
                        <form onSubmit={handleSubmit} className="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">
                            <p className="mb-8 text-2xl font-light text-center text-gray-900">
                                Contáctanos
                            </p>
                            <div className="mb-2">
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="John"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Email
                                </label>
                                <input
                                    input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="john.doe@company.com"
                                    required
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                                    Tu mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Escribe tus pensamientos aquí..."
                                ></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <div class="flex items-center justify-center w-full h-full p-3">
                                <button type="submit" class="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br  from-gray to-light-purple group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                    <a href="/" class="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                                        Enviar
                                    </a>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;





