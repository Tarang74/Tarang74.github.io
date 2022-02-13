import React from 'react';
import ReactDOM from 'react-dom';

import Hero, { TextEntrance } from '@components/Hero';
import About, { RevealOnScroll } from '@components/About';
import Skills from '@components/Skills';

import Thanks from '@components/Thanks';
import Information from '@components/Information';
import FooterBackgroundBlur from '@functions/FooterBackgroundBlur';

import '@assets/styles/index.scss';

let p = new Promise((resolve) => {
    ReactDOM.render(
        <React.StrictMode>
            <Hero />
            <About />
            <Skills />
        </React.StrictMode>,
        document.getElementById('main-root'),
        () => {
            ReactDOM.render(
                <React.StrictMode>
                    <Thanks />
                    <Information />
                </React.StrictMode>,
                document.getElementById('footer-root'),
                () => {
                    console.log('hello1');
                    resolve(true);
                }
            );
        }
    );
});

function main() {
    console.log('hello2');
    new TextEntrance(
        "Let's get started!",
        document.getElementById('hero-container')!
    );

    new RevealOnScroll(
        document.getElementById('about-text-list')!.children[0],
        0
    );
    new RevealOnScroll(
        document.getElementById('about-text-list')!.children[1],
        1
    );

    new FooterBackgroundBlur();
}

p.then(main);
