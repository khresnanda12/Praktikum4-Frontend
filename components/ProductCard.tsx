import Link from "next/link";
import styles from "./ProductCard.module.css";
import type { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/produk/${product.slug}`} className={styles.card}>
      <div className={styles.image}>{product.name}</div>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.tagline}>{product.tagline}</p>
      <p className={styles.price}>{product.price}</p>
    </Link>
  );
}