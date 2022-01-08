/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: {url: '/', static: true},
        src: {url: "/dist"}
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-typescript',
        [
            '@snowpack/plugin-sass',
            {
                native: true,
                style: 'compressed'
            }
        ],
        '@snowpack/plugin-postcss',
    ],
    packageOptions: {
        
    },
    devOptions: {
        port: 8080,
        tailwindConfig: './tailwind.config.js'
    },
    buildOptions: {
        baseUrl: '/',
        out: 'dist'
    },
    optimize: {
        minify: true,
        bundle: true
    }
};
