import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  label,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link href={href} className={`${styles.button} ${styles[variant]}`}>
      {label}
    </Link>
  );
}