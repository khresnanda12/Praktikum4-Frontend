"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Nama"
        required
      />
      <input
        className={styles.input}
        type="email"
        placeholder="Alamat Email"
        required
      />
      <textarea
        className={styles.textarea}
        placeholder="Pesan"
        rows={5}
        required
      />
      <button className={styles.button} type="submit">
        Kirim Pesan
      </button>

      {sent && (
        <p className={styles.success}>Terima kasih, pesanmu sudah terkirim!</p>
      )}
    </form>
  );
}