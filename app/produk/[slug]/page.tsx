import { notFound } from "next/navigation";
import Button from "../../../components/Button";
import { products } from "../../../data/products";
import styles from "./page.module.css";

export default async function ProdukDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <section className={styles.section}>
      <div className={styles.image}>{product.name}</div>

      <div className={styles.info}>
        <h1 className={styles.name}>{product.name}</h1>
        <p className={styles.tagline}>{product.tagline}</p>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>{product.price}</p>
        <Button href="/produk" label="Kembali ke Produk" variant="secondary" />
      </div>
    </section>
  );
}