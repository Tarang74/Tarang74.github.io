'use client';

// 'use client' marks this page as a Client Component
// https://beta.nextjs.org/docs/rendering/server-and-client-components

import './globals.css';
import { useEffect } from 'react';
import styles from './not-found.module.scss';
import CountdownRedirect from '@components/CountdownRedirect';

export default function Custom404({
    error
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className={styles.errorContainer}>
            <div className={styles.errorContainerLeft}>
                <div className={styles.errorTitle}>
                    Oops!
                    <br />I think you might be lost.
                </div>
            </div>
            <div className={styles.errorContainerRight}>
                <div className={styles.errorCode}>404</div>
            </div>
            <CountdownRedirect redirectTo="/" seconds={10} />
        </div>
    );
}
