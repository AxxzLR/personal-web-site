//#region Recursos
import selfie from '../assets/static/selfie.jpg'

import aboutIcon from '../assets/static/user-icon.svg'
import workIcon from '../assets/static/work-icon.svg'
import servicesICon from '../assets/static/cafe-icon.svg'
import contactIcon from '../assets/static/mail-icon.svg'
import homeIcon from '../assets/static/home-icon.svg'

import webdevIcon from '../assets/static/dev-icon.svg'
import designIcon from '../assets/static/design-icon.svg'
import networkIcon from '../assets/static/network-icon.svg'

import facebook from '../assets/static/fb-icon.svg'
import instagram from '../assets/static/ig-icon.svg'
import twitter from '../assets/static/tw-icon.svg'
import linkedin from '../assets/static/in-icon.svg'
import github from '../assets/static/gh-icon.svg'

import jsLogo from '../assets/static/js-logo.png'
import reactLogo from '../assets/static/react-logo.svg'
import reduxLogo from '../assets/static/redux-logo.png'
import nodeLogo from '../assets/static/node-logo.png'
import web from '../assets/static/web-icon.svg'
import netLogo from '../assets/static/net-logo.png'
import gitLogo from '../assets/static/git-logo.png'
import xdLogo from '../assets/static/xd-logo.svg'
import aiLogo from '../assets/static/ai-logo.png'

import ecomerce from '../assets/static/shop-icon.svg'
import admin from '../assets/static/admin-icon.svg'
import uinterface from '../assets/static/ui-icon.svg'
import uinteraction from '../assets/static/uinter-icon.svg'
//#endregion

const getContentByLang = (lang) => runObject(lang, content)

const exploreData = (lang, data) => (
    typeof data === 'object'
        ? Array.isArray(data)
            ? runArray(lang, data)
            : (data.hasOwnProperty('es') && data.hasOwnProperty('en'))
                ? data[lang]
                : runObject(lang, data)
        : data
)

const runArray = (lang, data) => {
    let ret = []
    data.forEach(element => {
        ret = [...ret, exploreData(lang, element)]
    });
    return ret
}

const runObject = (lang, data) => {
    let ret = {}
    for (const key in data) {
        ret = { ...ret, [key]: exploreData(lang, data[key]) }
    }
    return ret
}

const content = {
    navbar: [
        {
            view: "home",
            icon: homeIcon,
            text: { es: "Inicio", en: "Home" }
        },
        {
            view: "about",
            icon: aboutIcon,
            text: { es: "Sobre mí", en: "About" }
        },
        // {
        //     view: "work",
        //     icon: workIcon,
        //     text: { es: "Trabajo", en: "Work" }
        // },
        {
            view: "services",
            icon: servicesICon,
            text: { es: "Servicios", en: "Services" }
        },
        {
            view: "contact",
            icon: contactIcon,
            // text: "Contacto"
            text: { es: "Contacto", en: "Contact" }
        },
    ],
    socialMedia: [
        { icon: facebook, url: "/", txt: "Facebook" },
        { icon: instagram, url: "/", txt: "Instagram" },
        { icon: twitter, url: "/", txt: "Twitter" },
        { icon: linkedin, url: "/", txt: "Linkedin" },
        { icon: github, url: "/", txt: "Github" },
    ],
    home: {
        mainText: { es: "Hola, soy Axel", en: "Hi, I'm Axel" },
        secondaryText: { es: "Desarrollador web, Diseñador UI", en: "Web Developer, UI Designer" },
        cta: { es: "Contáctame", en: "Contact me" }
    },
    about: {
        title: { es: "Sobre mí", en: "About me" },
        text: {
            es: "Profesional en desarrollo y diseño, me gusta crear cosas estéticas y funcionales, manteniéndolo simple.\n\nComencé profesionalmente hace algunos años, trabajando para pequeñas y grandes empresas como parte del equipo de desarrollo y recientemente como FreeLancer.\n\nSoy una persona organizada, capaz de resolver problemas, curioso y en constante aprendizaje.\n\nEntusiasta del motociclismo, me gusta viajar y los videojuegos.",
            en: "Professional in development and design, I like to create beauty and functional things, keeping it simple. I started professionally some years ago, working for small and big companies as part of the development team and recently as a FreeLancer.\n\nI am an organized person, capable of solving problems, curious and in constant learning.\n\nMotorcycling enthusiast, I like traveling and video games."
        },
        img: selfie,
    },
    // work: {
    //     title: "Trabajo",
    //     timeline: [
    //         {
    //             id: "tml_murguia",
    //             toLeft: true,
    //             Logo: Murguia,
    //             Title: "Murguía Consultores",
    //             Period: "2018 - Actual",
    //             Desc: 'Hola\nEsta es la descripcion',
    //         }
    //     ]
    // },
    skills: {
        title: { es: "Servicios", en: "Services" },
        titleServices: { es: "¿Cómo te puedo ayudar?", en: "How can I help you?" },
        exp: [
            {
                id: "exp_webdev",
                title: { es: "Desarrollo web", en: "Web Development" },
                icon: networkIcon,
                text: {
                    es: "Puedo programar plataformas eficientes y escalables, con procesos optimizados, que permitan al usuario tener su flujo e información siempre disponible.",
                    en: "I can code efficient and scalable platforms with optimized process that could allow the user get their workflow and information always available."
                },
                titleDots: { es: "Herramientas de Desarrollo", en: "Development tools" },
                dots: [
                    { id: "li_js", text: "JavaScript", icon: jsLogo },
                    { id: "li_react", text: "React", icon: reactLogo },
                    { id: "li_redux", text: "Redux", icon: reduxLogo },
                    { id: "li_node", text: "Node JS", icon: nodeLogo },
                    { id: "li_web", text: "CSS & HTML", icon: web },
                    { id: "li_net", text: ".NET (C#)", icon: netLogo },
                    { id: "li_git", text: "Git", icon: gitLogo },
                ],
                services: [
                    {
                        id: "srv_ecom",
                        icon: ecomerce,
                        title: "E-Commerce",
                    },
                    {
                        id: "srv_admin",
                        icon: admin,
                        title: "CRM / ERP",
                    },
                    {
                        id: "srv_web",
                        icon: web,
                        title: { es: "Sitios web / Apps web", en: "Web sites / Web apps" },
                    },
                ]
            },
            {
                id: "exp_uides",
                title: { es: "Diseño UI", en: "UI Design" },
                icon: designIcon,
                text: {
                    es: 'Puedo construir interfaces limpias, con interacción fluida e intuitiva, utilizando "mobile first".',
                    en: 'I can build clear interfaces with fluid and intuitive interaction, using "mobile first".',
                },
                titleDots: { es: "Herramientas de Diseño", en: "Design tools" },
                dots: [
                    { id: "li_xd", text: "Adobe XD", icon: xdLogo },
                    { id: "li_ai", text: "Adobe Illustrator", icon: aiLogo },
                    { id: "li_fgm", text: "Figma", icon: '' },
                ],
                services: [
                    {
                        id: "srv_ui",
                        icon: uinterface,
                        title: { es: "Diseño de interfaz", en: "Interface design" },
                    },
                    {
                        id: "srv_uinter",
                        icon: uinteraction,
                        title: { es: "Diseño de interacción", en: "Interaction design" },
                    },
                    {
                        id: "srv_resp",
                        icon: webdevIcon,
                        title: { es: "Diseño Responsivo", en: "Responsive design" },
                    },
                ]
            },
        ]
    },
    contact: {
        title: { es: "Contacto", en: "Contact" },
        text: {
            es: "Estoy emocionado por saber sobre tu proyecto y espero tener la oportunidad de poder contribuir en él.",
            en: "I'm excited to know about your project and I hope get the opportunity to work on it."
        },
        form: {
            name: { es: "Nombre", en: "Name" },
            email: { es: "Correo", en: "Email" },
            subject: { es: "Asunto", en: "Subject" },
            message: { es: "Mensaje", en: "Message" },
            send: { es: "Enviar", en: "Send" }
        }
    },
}

export default getContentByLang

