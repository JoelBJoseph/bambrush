// components/Footer.js
import styles from './Footer.module.css';
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <h3>Quick Link</h3>
                    <ul>
                        <li><Link href={"/about"}>About Us</Link></li>
                        <li><Link href={"/contact"}>Contact us</Link></li>
                        <li><Link href={"/shop"}>Shop</Link></li>
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
                    <a href="#"><Image src="/facebook.png" alt="Facebook" width={24} height={24}/></a>
                    <a href="#"><Image src="/instagram.png" alt="Instagram" width={24} height={24}/></a>
                </div>
            </div>
            <hr/>
            <div className={styles.container}>
                <div className={styles.copyright}>
                    &copy; 2024, BamBrush | All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
