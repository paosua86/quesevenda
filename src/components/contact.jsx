import React from 'react';
import Spline from '@splinetool/react-spline';


function Contact() {
    return (

<div class="w-full h-screen">
<Spline scene="https://prod.spline.design/VLXbumj01AtjLDER/scene.splinecode" className='absolute'/>
    <div class="container flex items-center justify-center flex-1 h-full mx-auto">
        <div class="w-full max-w-lg z-10">
            <div class="leading-loose">
                <form class="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">
                    <p class="mb-8 text-2xl font-light text-center text-gray">
                        Contáctanos
                    </p>
                    <div class="mb-2">
                        <div class=" relative ">
                            <input type="text" id="login-with-bg-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email"/>
                            </div>
                        </div>
                        <div class="mb-2">
                            <div class=" relative ">
                                <input type="text" id="login-with-bg-password" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="password"/>
                                </div>
                            </div>
                            <button class="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br  from-gray to-light-purple group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <a href="/" class="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 ">
                            Enviar
                            </a>
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;
