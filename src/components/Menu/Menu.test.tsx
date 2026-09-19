import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { menuItems } from "@/data/menu";
import Menu from "./Menu";

describe("Menu", () => {
  it("merender semua item menu dari data", () => {
    render(<Menu />);

    for (const item of menuItems) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.desc)).toBeInTheDocument();
      expect(screen.getByText(item.badge)).toBeInTheDocument();
    }
  });

  it("menampilkan judul section dan catatan harga", () => {
    render(<Menu />);

    expect(screen.getByText("MENU UNGGULAN")).toBeInTheDocument();
    expect(screen.getByText(/Harga tersedia di menu/i)).toBeInTheDocument();
  });
});
