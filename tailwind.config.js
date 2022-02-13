const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
    plugins: [require('@tailwindcss/forms'), require('daisyui')],
    theme: {
        extend: {
            screens: {
                ...defaultTheme.screens,
                xs: '360px'
            }
        }
    }
};
