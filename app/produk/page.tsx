import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";
import styles from "./page.module.css";

export default function ProdukPage() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Produk</h1>
      <p className={styles.subtitle}>Pilih produk Apple favoritmu.</p>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}