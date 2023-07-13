'use client';

import './globals.css';
import { useEffect } from 'react';
import styles from './error.module.scss';

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
            <div>
                <div className={styles.errorText}>
                    Oops!
                    <br />I think you might be lost.
                </div>
            </div>
            <div>
                <div className={styles.errorCode}>404</div>
            </div>
        </div>
    );
}
