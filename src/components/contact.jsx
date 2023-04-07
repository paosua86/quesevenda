import React from 'react';
import Spline from '@splinetool/react-spline';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import en from '../locales/en.json';
import es from '../locales/es.json';

function Contact() {
    const [state] = useForm("xpzeoara");
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = React.useState("es");

    function toggleLanguage() {
        setLanguage(language === "en" ? "es" : "en");
    }

    const texts = language === "en" ? en : es;

    if (state.succeeded) {
        return <p>{t('formThanks')}</p>;
    }

    return (
        <section className="w-full h-screen" id="contacto">
            <Spline scene="https://prod.spline.design/VLXbumj01AtjLDER/scene.splinecode" className="absolute z-10" />
            <div className="container xs:p-2 xs:pt-24 md:pt-24 md:p-5 flex items-center justify-center flex-1 h-full mx-auto ">
                <div className="w-full max-w-lg z-20">
                    <div className="leading-loose">
                        <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/xpzeoara" method="post" target="_blank" className="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">
                            <p className="mb-8 text-2xl font-light text-center text-gray-900">
                                {t('contactTitle')}
                            </p>
                            <fieldset id="fs-frm-inputs">
                                <label htmlFor="full-name" className="block mb-2 text-sm font-medium text-gray-900">{t('contact.form.name')}</label>
                                <input type="text" name="name" id="full-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple focus:border-blue-500 block w-full p-2.5"
                                    placeholder={t('contact.form.name_placeholder')} required />
                                <ValidationError prefix={t('contact.form.email')} field="_replyto" errors={state.errors} />
                                <label htmlFor="email-address" className="block mb-2 text-sm font-medium text-gray-900">{t('contact.form.email')}</label>
                                <input type="email" name="_replyto" id="email-address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple focus:border-blue-500 block w-full p-2.5"
                                    placeholder={t('contact.form.email_placeholder')} required />
                                <ValidationError prefix={t('contact.form.message')} field="message" errors={state.errors} />
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">{t('contact.form.message')}</label>
                                <textarea rows="5" name="message" id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple focus:border-blue-500"
                                    placeholder={t('contact.form.message_placeholder')} required />
                                <input type="hidden" name="_subject" id="email-subject" value={t('contact.form.subject')} />
                            </fieldset>
                            <div class="flex items-center justify-center w-full h-full p-3">
                                <button type="submit" class="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br  from-gray to-light-purple group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                    <p class="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                                        <input type="submit" value={t('contact.form.send_button')} disabled={state.submitting} />
                                    </p>
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





