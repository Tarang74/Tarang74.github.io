/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist', dot: true }
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
        '@snowpack/plugin-postcss'
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
        bundle: true,
        sourcemap: false,
        treeshake: true,
        splitting: true,
        manifest: false
    }
};
