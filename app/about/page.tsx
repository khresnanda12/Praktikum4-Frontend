import Button from "../../components/Button";
import styles from "./page.module.css";

const highlights = [
  { number: "2025", label: "Tahun berdiri" },
  { number: "5+", label: "Kategori produk" },
  { number: "100%", label: "Produk original" },
];

export default function AboutPage() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>About Us</h1>

      <p className={styles.text}>
        Apple Store adalah toko yang menghadirkan produk Apple original,
        mulai dari iPhone, iPad, MacBook, Apple Watch, hingga AirPods, dengan
        layanan yang ramah dan mudah dijangkau.
      </p>
      <p className={styles.text}>
        Kami percaya teknologi seharusnya sederhana dan menyenangkan dipakai.
        Karena itu, kami membantu setiap pelanggan memilih produk yang paling
        sesuai dengan kebutuhannya, baik untuk belajar, bekerja, maupun
        berkreasi.
      </p>
      <p className={styles.text}>
        Misi kami adalah memberikan pengalaman belanja yang jelas, jujur, dan
        nyaman, dari memilih produk sampai purna jual.
      </p>

      <div className={styles.stats}>
        {highlights.map((item) => (
          <div key={item.label} className={styles.stat}>
            <p className={styles.number}>{item.number}</p>
            <p className={styles.label}>{item.label}</p>
          </div>
        ))}
      </div>

      <div className={styles.action}>
        <Button href="/produk" label="Lihat Produk Kami" />
      </div>
    </section>
  );
}