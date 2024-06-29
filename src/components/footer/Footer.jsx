// components/Footer.js
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <h3>Quick Link</h3>
                    <ul>
                        <li><a href="/src/app/about">About us</a></li>
                        <li><a href="/src/app/contact">Contact us</a></li>
                        <li><a href="/src/app/shop">Shop</a></li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h3>Terms & Policies</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.socialMedia}>
                    <a href="#"><img src="/facebook-icon.png" alt="Facebook"/></a>
                    <a href="#"><img src="/instagram-icon.png" alt="Instagram"/></a>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.copyright}>
                    &copy; 2024, BamBrush | All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
