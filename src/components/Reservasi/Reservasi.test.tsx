import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import Reservasi from "./Reservasi";

describe("Reservasi", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("mengirim pesan WhatsApp saat form valid dan disubmit", async () => {
    const user = userEvent.setup();
    const openMock = vi.spyOn(window, "open").mockImplementation(() => null);

    render(<Reservasi />);

    await user.type(
      screen.getByRole("textbox", { name: /Nama kamu/i }),
      "Budi",
    );
    await user.type(
      screen.getByRole("textbox", { name: /No\. WA/i }),
      "0812345",
    );
    await user.type(
      screen.getByRole("textbox", { name: /Catatan/i }),
      "Meja dekat colokan",
    );
    await user.type(screen.getByLabelText(/Tanggal/i), "2026-09-20");
    await user.type(screen.getByLabelText(/Waktu/i), "14:00");

    await user.click(screen.getByRole("button", { name: /Booking Meja/i }));

    expect(openMock).toHaveBeenCalledTimes(1);
    const [url] = openMock.mock.calls[0];
    expect(url).toContain("wa.me/");
    expect(url).toContain(encodeURIComponent("Halo, saya Budi."));
    expect(url).toContain(encodeURIComponent("2026-09-20"));
  });

  it("tidak mengirim apa pun sebelum form terisi", async () => {
    const user = userEvent.setup();
    const openMock = vi.spyOn(window, "open").mockImplementation(() => null);

    render(<Reservasi />);

    await user.click(screen.getByRole("button", { name: /Booking Meja/i }));

    expect(openMock).not.toHaveBeenCalled();
  });
});
