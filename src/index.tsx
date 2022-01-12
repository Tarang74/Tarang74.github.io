import React from 'react';
import ReactDOM from 'react-dom';

import Hero from './home/Hero';
import Footer from './home/Footer';

import './index.scss';
import { TextEntrance } from './home/Hero';

let p = new Promise((resolve) => {
    ReactDOM.render(
        <React.StrictMode>
            <Hero />
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
    var a = new TextEntrance("Let's get started!");
}

p.then((resolveValue) => main());

if (import.meta.hot) {
    import.meta.hot.accept();
}
