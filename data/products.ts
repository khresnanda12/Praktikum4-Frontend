export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
};

export const products: Product[] = [
  {
    slug: "iphone-pro",
    name: "iPhone Pro",
    tagline: "Kamera canggih, performa kencang.",
    price: "Rp 19.999.000",
    description:
      "iPhone dengan sistem kamera profesional, layar cerah, dan chip tercepat untuk semua kebutuhanmu.",
  },
  {
    slug: "ipad-air",
    name: "iPad Air",
    tagline: "Ringan, tipis, bertenaga.",
    price: "Rp 10.999.000",
    description:
      "iPad Air cocok untuk belajar, menggambar, dan bekerja di mana saja dengan layar yang jernih.",
  },
  {
    slug: "macbook-air",
    name: "MacBook Air",
    tagline: "Tipis dan tahan seharian.",
    price: "Rp 16.999.000",
    description:
      "MacBook Air dengan baterai sepanjang hari dan desain tanpa kipas yang senyap.",
  },
  {
    slug: "apple-watch",
    name: "Apple Watch",
    tagline: "Teman sehat di pergelangan tangan.",
    price: "Rp 6.999.000",
    description:
      "Pantau aktivitas, detak jantung, dan terima notifikasi langsung dari jam tanganmu.",
  },
  {
    slug: "airpods-pro",
    name: "AirPods Pro",
    tagline: "Suara jernih, bebas bising.",
    price: "Rp 3.999.000",
    description:
      "AirPods Pro dengan peredam bising aktif untuk musik dan panggilan yang lebih fokus.",
  },
];
