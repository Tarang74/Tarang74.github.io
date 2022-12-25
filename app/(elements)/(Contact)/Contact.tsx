import styles from './Contact.module.scss';

export default function Contact() {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactColumnLeft}>
                <div className={styles.contactHeader}>
                    <h1>Contact</h1>
                </div>
                <div className={styles.contactDescription}>
                    If you have any questions, feel free to reach out to me
                    through any of the following platforms.
                </div>
                <div className={styles.contactLocations}>
                    <a
                        href="mailto:tjanawalkar74@gmail.com?subject=Message from your website. Hello Tarang!"
                        className={styles.contactLocation}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tarangjanawalkar"
                        className={styles.contactLocation}
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/Tarang74"
                        className={styles.contactLocation}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </div>
            <div className={styles.contactColumnRight}>
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
