import React, { useEffect, useState } from 'react';

function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-black w-full shadow dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © {currentYear} <a className="hover:underline">Que se Venda</a>. All Rights Reserved.
                </span>

                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <p className="mr-4 hover:underline md:mr-6">Quito, Ecuador</p>
                    </li>
                    <li>
                        <p className="mr-4 hover:underline md:mr-6 font-sans">+593 998536569</p>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
