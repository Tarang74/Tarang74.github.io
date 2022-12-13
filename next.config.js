// @ts-check

let production_keys = {};

if (process.env.NODE_ENV === 'production') {
    production_keys = {
        experimental: {
            images: {
                unoptimized: true
            }
        },
        assetPrefix: 'https://tarang74.github.io/'
    };
}

/** @type {import('next').NextConfig} */
module.exports = {
    typescript: {
        tsconfigPath: './tsconfig.json'
    },
    distDir: 'build',
    production_keys
};
