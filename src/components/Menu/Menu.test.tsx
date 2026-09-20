import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("menyaring item menu sesuai kategori yang dipilih", async () => {
    const user = userEvent.setup();
    render(<Menu />);

    const kopiItems = menuItems.filter((item) => item.kategori === "Kopi");
    const makananItems = menuItems.filter(
      (item) => item.kategori === "Makanan",
    );

    await user.click(screen.getByRole("tab", { name: "Kopi" }));

    for (const item of kopiItems) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    }
    for (const item of makananItems) {
      expect(screen.queryByText(item.title)).not.toBeInTheDocument();
    }

    await user.click(screen.getByRole("tab", { name: "Makanan" }));

    for (const item of makananItems) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    }
    for (const item of kopiItems) {
      expect(screen.queryByText(item.title)).not.toBeInTheDocument();
    }
  });
});