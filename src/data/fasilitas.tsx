import type { ReactNode } from "react";

export interface FasilitasItem {
  id: number;
  icon: ReactNode;
  title: string;
  desc: string;
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  className: "ikon-svg",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const facilities: FasilitasItem[] = [
  {
    id: 1,
    icon: (
      <svg {...iconProps}>
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "WiFi 100Mbps",
    desc: "Kencang & stabil. Cocok buat video call, upload konten, streaming.",
  },
  {
    id: 2,
    icon: (
      <svg {...iconProps}>
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Stopkontak di Setiap Meja",
    desc: "Nggak perlu rebutan colokan. Setiap meja punya power strip.",
  },
  {
    id: 3,
    icon: (
      <svg {...iconProps}>
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "AC Nyaman",
    desc: "Suhu 22°C sepanjang hari. Adem buat fokus kerja.",
  },
  {
    id: 4,
    icon: (
      <svg {...iconProps}>
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Ruang Meeting",
    desc: "Private room buat tim. Kapasitas 4-6 orang, lengkap TV & whiteboard.",
  },
  {
    id: 5,
    icon: (
      <svg {...iconProps}>
        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    title: "Mushola",
    desc: "Bersih, nyaman, ada tempat wudhu. Nggak perlu khawatir shalat.",
  },
  {
    id: 6,
    icon: (
      <svg {...iconProps}>
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Parkir Luas",
    desc: "Parkir motor & mobil luas. Aman dan gratis.",
  },
];
