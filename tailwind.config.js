module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    plugins: [require('@tailwindcss/forms'), require('daisyui')],
    theme: {
        extend: {
            screens: {
                xs: '360px'
            },
            colors: {
                spaceblack: 'rgba(9, 9, 11)'
            }
        }
    }
};
