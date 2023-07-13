'use client';

import './globals.css';
import { useEffect } from 'react';
import styles from './error.module.scss';

export default function Error({ error }: { error: Error; reset: () => void }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className={styles.errorContainer}>
                <div className={styles.errorText}>
                    Something went wrong 😢<br />
                    Please try again later.
            </div>
        </div>
    );
}
