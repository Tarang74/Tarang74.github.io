import React from 'react';

import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroMainContent}>
                <div className={styles.heroName}>
                    TARANG
                    <br />
                    JANAWALKAR
                </div>
                <div className={styles.heroTitle}>
                    Software Engineer & Mathematician
                </div>
                {/* <div className={styles.heroTemporary}>
                    More content coming soon...
                </div> */}
            </div>
            <div className={styles.heroBottomContent}>
                {/* <div className={ styles.heroBottomText}>
                asdfadd
                </div> */}
            </div>
        </div>
    );
}
