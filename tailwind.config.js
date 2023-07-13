/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['app/**/*.{ts,tsx}', 'components/**/*.{js,ts,jsx,tsx}'],
    // plugins: [require('@tailwindcss/forms')],
    theme: {
        extend: {
            screens: {
                xs: '420px'
            },
            colors: {
                spaceblack: 'rgba(9, 9, 11)'
            }
        }
    }
};
