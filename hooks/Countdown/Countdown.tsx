import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { UrlObject } from 'url';
declare type Url = string | UrlObject;

export default function Countdown(redirectTo: Url, seconds: number) {
    const [secondsRemaining, setSecondsRemaining] = useState(seconds);
    const router = useRouter();

    useEffect(() => {
        if (secondsRemaining === 0) router.push('/');

        const timer = setTimeout(() => {
            setSecondsRemaining(secondsRemaining - 1);

            if (secondsRemaining === 1) router.push(redirectTo.toString());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [router, secondsRemaining, redirectTo]);

    return { secondsRemaining };
}
