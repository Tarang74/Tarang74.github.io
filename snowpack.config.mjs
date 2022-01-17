/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' }
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
        [
            '@snowpack/plugin-optimize',
            {
                minifyJS: true,
                minifyCSS: true,
                minifyHTML: true,
                preloadCSS: true
            }
        ],
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
    devOptions: {
        port: 8080,
        tailwindConfig: './tailwind.config.js'
    },
    buildOptions: {
        baseUrl: '/',
        out: 'build'
    },
    optimize: {
        minify: true,
        bundle: true
    }
};
