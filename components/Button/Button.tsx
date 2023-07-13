import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
    link: string;
    text: string;
}

export default function Button(buttonProps: ButtonProps) {
    return (
        // <button >
            <a className={styles.button} href={buttonProps.link}>{buttonProps.text}</a>
        // </button>
    );
}
