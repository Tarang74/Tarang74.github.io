import React from 'react';
import ReactDOM from 'react-dom';

import Hero from './Home/Hero';
import WhatIDo from './Home/WhatIDo';
import Projects from './Home/Projects';
import Accomplishments from './Home/Accomplishments';
import Footer from './Home/Footer';

import "./index.css";
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Hero />
        <WhatIDo />
        <Projects />
        <Accomplishments />
    </React.StrictMode>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <React.StrictMode>
//         <Footer />
//     </React.StrictMode>,
//     document.getElementById('root-footer')
// );

if (import.meta.hot) {
    import.meta.hot.accept();
}