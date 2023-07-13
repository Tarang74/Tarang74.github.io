'use client';
import Hero from './(elements)/(Hero)';
import Education from './(elements)/(Education)';
import Experience from './(elements)/(Experience)';
import Projects from './(elements)/(Projects)';
import Contact from './(elements)/(Contact)';

export default function Page() {
    return (
        <div>
            <Hero />
            <Education />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
}
