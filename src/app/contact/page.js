import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css"
import ContactForm from "@/app/components/ContactForm";
const Contact = () => {
    return (
        <>
            <div className={styles.container}>
        <h1>Contact us</h1>
            <ContactCard/>
                <section className={styles.contact_section}>
                    <h2> we love to hear <span> from you</span></h2>
                    <ContactForm/>

                </section>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.119100538838!2d74.2902271753725!3d31.465909749831198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x29ac9075b8a9edfb%3A0x1c9af20bd8a821ba!2sScaylar%20Technologies!5e0!3m2!1sen!2s!4v1692109082404!5m2!1sen!2s" width={100} height={450} className={styles.mapping} style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
};

export default Contact;