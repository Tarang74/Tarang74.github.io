import styles from './Contact.module.scss';
import Image from 'next/image';
import MadeWithReact from '@assets/made-with-react.svg';

export default function Contact() {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactColumnLeft}>
                <div className={styles.contactHeader}>
                    <h1>Contact</h1>
                </div>
                <div className={styles.contactDescription}>
                    If you have any questions, feel free to reach out to me.
                </div>
                <div className={styles.contactLocations}>
                    <div className={styles.contactLocation}>Mail</div>
                    <div className={styles.contactLocation}>LinkedIn</div>
                    <div className={styles.contactLocation}>GitHub</div>
                </div>
            </div>
            <div className={styles.contactColumnRight}>
                <div className={styles.contactCopyright}>
                    <p>&copy; {new Date().getFullYear()}</p>
                    Tarang Janawalkar
                </div>
                <div className={styles.contactAttribution}>
                    <Image src={MadeWithReact} alt="Made with React" />
                </div>
            </div>
        </div>
    );
}
