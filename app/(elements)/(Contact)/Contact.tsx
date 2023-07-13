import Button from '@components/Button/Button';
import styles from './Contact.module.scss';

export default function Contact() {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactColumnFirst}>
                <div className={styles.contactHeader}>
                    <h1>Contact</h1>
                </div>
                <div className={styles.contactDescription}>
                    Reach out to me on these platforms.
                </div>
                <div className={styles.contactLocations}>
                    <Button
                        link="mailto:tjanawalkar74@gmail.com?subject=Message from your website. Hello Tarang!"
                        text="Email"
                    />
                    <Button
                        link="https://linkedin.com/in/tarangjanawalkar"
                        text="LinkedIn"
                    />
                    <Button link="https://github.com/Tarang74" text="GitHub" />
                </div>
            </div>
            <div className={styles.contactColumnSecond}>
                <div className={styles.contactCopyright}>
                    <p>&copy; {new Date().getFullYear()}</p>
                    Tarang Janawalkar
                </div>
                <div className={styles.contactAttribution}>
                    {
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src="./made-with-react.svg"
                            alt="Made with React"
                        />
                    }
                </div>
            </div>
        </div>
    );
}
