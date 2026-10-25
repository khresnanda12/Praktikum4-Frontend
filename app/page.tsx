import Button from "../components/Button";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>Selamat datang di</p>
      <h1 className={styles.title}>Apple Store</h1>
      <p className={styles.subtitle}>
        Temukan iPhone, iPad, MacBook, dan semua produk Apple favoritmu di
        satu tempat. Sederhana, cepat, dan terpercaya.
      </p>
      <div className={styles.actions}>
        <Button href="/produk" label="Lihat Produk" />
        <Button href="/about" label="Tentang Kami" variant="secondary" />
      </div>
    </section>
  );
}