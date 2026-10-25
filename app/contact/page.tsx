import ContactForm from "../../components/ContactForm";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Hubungi Kami</h1>
      <p className={styles.subtitle}>Ada pertanyaan? Tulis pesanmu di sini.</p>
      <ContactForm />
    </section>
  );
}