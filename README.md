# Praktikum 4 Front-End: Apple Store

Website company profile sederhana bertema Apple Store, dibuat dengan Next.js (App Router) dan TypeScript.

**Nama:** Khresnanda Putra Wirawan
**NIM:** 535250071

## Halaman

| Halaman | URL |
|---|---|
| Home | `/` |
| Produk | `/produk` |
| Detail Produk (dynamic routing) | `/produk/[slug]` |
| About | `/about` |
| Contact | `/contact` |

## Fitur

- Dynamic routing untuk detail produk
- Reusable components: Navbar, Footer, Button, ProductCard, ContactForm
- Navigasi antar halaman memakai komponen `<Link>`
- Active link styling pada Navbar
- Tampilan responsif (HP, tablet, laptop)

## Struktur Folder

```
praktikum4-frontend/
├── app/            # halaman dan layout
├── components/     # komponen yang bisa dipakai ulang
└── data/           # data produk
```

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser.
