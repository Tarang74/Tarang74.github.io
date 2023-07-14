import React, { PropsWithChildren } from 'react';
import styles from './Content.module.scss';

interface P {
    title: string;
    single?: boolean;
}

export default function Content(props: PropsWithChildren<P>) {
    return props.single ? (
        <section className={styles.contentContainerSingle}>
            <div className={styles.contentContent}>
                <div className={styles.contentTitle}>{props.title}</div>
                <div>{props.children}</div>
            </div>
        </section>
    ) : (
        <section className={styles.contentContainer}>
            <div className={styles.contentContent}>
                <div className={styles.contentTitle}>{props.title}</div>
                <div>{props.children}</div>
            </div>
        </section>
    );
}
