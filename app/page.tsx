// 'use client';

import Hero from './(elements)/(Hero)';
import Education from './(elements)/(Education)';
import Experience from './(elements)/(Experience)';
import Skills from './(elements)/(Skills)';
import Projects from './(elements)/(Projects)';
import Software from './(elements)/(Software)';
import Contact from './(elements)/(Contact)';
import DotsLoading from '@components/DotsLoading';
// import { useEffect, useState } from 'react';

export default function Page() {
    // const [pageLoaded, setPageLoaded] = useState(false);

    // useEffect(() => {
    //     if (!pageLoaded) {
    //         window.onload = () => {
    //             setPageLoaded(true);
    //         };
    //     }
    // }, [pageLoaded]);

    // if (pageLoaded) {
    //     return <></>;
    // } else {
    //     return (
    //         <div>
    //             <div>
    //                 <DotsLoading />
    //                 <Hero />
    //             </div>
    //             <Education />
    //             <Experience />
    //             <Skills />
    //             <Projects />
    //             <Software />
    //             <Contact />
    //         </div>
    //     );
    // }
    return (
        <div>
            <div>
                <DotsLoading />
                <Hero />
            </div>
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Software />
            <Contact />
        </div>
    );
}
