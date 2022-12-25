import React, { PropsWithChildren } from 'react';
import styles from './Content.module.scss';

interface P {
    title: string;
}

export default function Content(props: PropsWithChildren<P>) {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.contentContent}>
                <div className={styles.contentTitle}>{props.title}</div>
                <div>{props.children}</div>
            </div>
        </div>
    );
}
