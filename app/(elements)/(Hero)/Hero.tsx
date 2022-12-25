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
            </div>
        </div>
    );
}
