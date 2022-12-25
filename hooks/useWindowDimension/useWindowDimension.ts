'use client';

import { useEffect, useState } from 'react';
import WindowDimensions from '@models/WindowDimensions';

export default function useWindowDimension(): WindowDimensions {
    const [windowDimension, setWindowDimension] = useState<WindowDimensions>({
        width: 0,
        height: 0
    });

    useEffect(() => {
        function handleResize() {
            setWindowDimension({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowDimension;
}
