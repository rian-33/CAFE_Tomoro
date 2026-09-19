import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("menampilkan logo merek", () => {
    render(<Navbar />);

    expect(screen.getByText(/Tomoro/)).toBeInTheDocument();
  });

  it("menampilkan tautan navigasi yang dituju", () => {
    render(<Navbar />);

    expect(screen.getByRole("link", { name: "Menu" })).toHaveAttribute(
      "href",
      "#menu",
    );
    expect(screen.getByRole("link", { name: "Lokasi" })).toHaveAttribute(
      "href",
      "#lokasi",
    );
  });

  it("menampilkan tombol CTA Pesan Sekarang", () => {
    render(<Navbar />);

    expect(
      screen.getByRole("button", { name: /Pesan Sekarang/i }),
    ).toBeInTheDocument();
  });
});
