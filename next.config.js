/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    eslint: {
        dirs: ['/app', '/components']
    },
    experimental: {
        appDir: true
    }
};
