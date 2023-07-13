import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
    link: string;
    text: string;
}

export default function Button(buttonProps: ButtonProps) {
    return (
        <div className={styles.button}>
            <a href={buttonProps.link}>{buttonProps.text}</a>
        </div>
    );
}
