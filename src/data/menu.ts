import type { MenuItem } from "@/types";

export const menuItems: MenuItem[] = [
  {
    id: "signature-espresso",
    title: "Signature Espresso",
    desc: "Perpaduan biji arabika pilihan.",
    badge: "BEST SELLER",
    kategori: "Kopi",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
  },
  {
    id: "ice-coffee-latte",
    title: "Ice Coffee Latte",
    desc: "Latte creamy yang segar.",
    badge: "FAVORIT",
    kategori: "Kopi",
    img: "https://images.unsplash.com/photo-1507133750040-4a8f57021571",
  },
  {
    id: "big-breakfast",
    title: "Tomoro Big Breakfast",
    desc: "All day breakfast lengkap.",
    badge: "HEAVY MEAL",
    kategori: "Makanan",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    id: "pasta-aglio-olio",
    title: "Pasta Aglio Olio",
    desc: "Pasta dengan bawang putih.",
    badge: "SIGNATURE",
    kategori: "Makanan",
    img: "https://images.unsplash.com/photo-1559925393-8be07eac6725",
  },
];

export const menuCategories = ["Semua", "Kopi", "Makanan"] as const;
