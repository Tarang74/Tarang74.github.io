import React from 'react';
import ReactDOM from 'react-dom';

import Hero, { TextEntrance } from './home/Hero';
import About, { RevealOnScroll } from './home/About';
import Footer from './home/Footer';

import './index.scss';

let p = new Promise((resolve) => {
    ReactDOM.render(
        <React.StrictMode>
            <Hero />
            <About />
        </React.StrictMode>,
        document.getElementById('main-root')
    );
    ReactDOM.render(
        <React.StrictMode>
            <Footer />
        </React.StrictMode>,
        document.getElementById('footer-root')
    );

    resolve(true);
});

function main() {
    new TextEntrance(
        "Let's get started!",
        document.getElementById('hero-container')
    );

    new RevealOnScroll(
        document.getElementById('about-text-list').children[0],
        0
    );
    new RevealOnScroll(
        document.getElementById('about-text-list').children[1],
        1
    );
}

p.then(main);

if (import.meta.hot) {
    import.meta.hot.accept();
}
