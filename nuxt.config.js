export default {

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'fenerium',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fenerium.com/assets/fonts/fenerium-icons/fonts/fenerium-icons.ttf?3qa8cj'
            },
            {
                rel: 'stylesheet',
                href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css',
                crossorigin: 'anonymous'
            }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ["@assets/Style.css",
        "@fortawesome/fontawesome-free/css/all.css",
        "@fortawesome/fontawesome-free/js/all.js",

    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { src: '~/plugins/vuex-persist', ssr: false }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: "AIzaSyCsE5sPIYj20pPy_qaV_x0ybQcjeTOPDsI",
                    authDomain: "fenerium-b65fc.firebaseapp.com",
                    projectId: "fenerium-b65fc",
                    storageBucket: "fenerium-b65fc.appspot.com",
                    messagingSenderId: "450436459246",
                    appId: "1:450436459246:web:c325b5c86853302d4361ff",
                    measurementId: "G-Z96DXKBSFT"
                },
                services: {
                    firestore: true,
                    auth: true
                }
            }
        ]
    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}