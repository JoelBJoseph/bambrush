
import styles from './Contact.module.css';

const ContactForm = () => {
    return (
        <div className={styles.contactFormContainer}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>
                For any questions regarding our product or for assistance with your order, please contact us. We will provide you with an answer within 24 hours.
            </p>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <input type="text" name="name" placeholder="Name" className={styles.input} />
                    <input type="email" name="email" placeholder="Email *" className={styles.input} required />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" name="phone" placeholder="Phone number" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <textarea name="comment" placeholder="Comment" className={styles.textarea}></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Send</button>
            </form>
            <p className={styles.note}>
                *If you are messaging about your order, please make sure to include the order number or the email address used at checkout in your message. Thank you!
            </p>
        </div>
    );
};

export default ContactForm;
