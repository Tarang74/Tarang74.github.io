import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroMainContent}>
                <div className={styles.heroName}>
                    <span>TARANG</span>
                    <br />
                    <span>JANAWALKAR</span>
                </div>
                <div className={styles.heroTitle}>Software Engineer</div>
            </div>
        </div>
    );
}
