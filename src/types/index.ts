import type { ReactNode } from "react";

export interface MenuItem {
  id: string;
  title: string;
  desc: string;
  badge: string;
  img: string;
}

export interface FasilitasItem {
  id: number;
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface TestimoniItem {
  id: number;
  initials: string;
  name: string;
  role: string;
  quote: string;
}
