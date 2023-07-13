import styles from './CountdownRedirect.module.scss';

import React, { useState } from 'react';
import Countdown from '@hooks/Countdown';

import { UrlObject } from 'url';
declare type Url = string | UrlObject;

interface P {
    redirectTo: Url;
    seconds: number;
}

export default function CountdownRedirect(props: P) {
    const [countdownActive, setCountdownActive] = useState(true);
    const { secondsRemaining } = Countdown(props.redirectTo, props.seconds);

    if (countdownActive) {
        return (
            <div className={styles.countdownContainer}>
                <div className={styles.countdownText}>
                    Redirecting in {secondsRemaining} seconds.
                </div>
                <button onClick={() => setCountdownActive(false)} />
            </div>
        );
    } else {
        return null;
    }
}
