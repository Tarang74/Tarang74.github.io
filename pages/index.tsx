import React from 'react';

// import LoadingAnimation from '../src/components/LoadingAnimation';
import Hero from '../src/components/elements/Hero';
import Education from '../src/components/elements/Education';
import Experience from '../src/components/elements/Experience';
import Skills from '../src/components/elements/Skills';
import Projects from '../src/components/elements/Projects';
import Technologies from '../src/components/elements/Technologies';
import Contact from '../src/components/elements/Contact';

export default function Index() {
    return (
        <div className="bg-spaceblack" style={{ padding: 0, margin: 0 }}>
            {/* <LoadingAnimation numberOfCells={32} /> */}
            <Hero />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Technologies />
            <Contact />
        </div>
    );
}
