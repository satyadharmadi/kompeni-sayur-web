"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    email: "",
    message: "",
  });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      const result = await response.json().catch(() => null);
      alert(result?.error || "Pesan belum terkirim. Silakan coba lagi.");
      return;
    }

    alert("Pesan berhasil dikirim. Terima kasih!");
    setForm({ name: "", whatsapp: "", email: "", message: "" });
  }

  const update =
    (key: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [key]: event.target.value });

  return (
    <form onSubmit={submit} className="rounded-3xl bg-white p-7 shadow-sm">
      <label className="block text-sm font-medium">
        Nama
        <input
          required
          value={form.name}
          onChange={update("name")}
          className="mt-2 w-full rounded-xl border p-3"
        />
      </label>

      <label className="mt-4 block text-sm font-medium">
        Nomor WhatsApp
        <input
          required
          type="tel"
          value={form.whatsapp}
          onChange={update("whatsapp")}
          placeholder="08xx xxxx xxxx"
          className="mt-2 w-full rounded-xl border p-3"
        />
      </label>

      <label className="mt-4 block text-sm font-medium">
        Email
        <input
          required
          type="email"
          value={form.email}
          onChange={update("email")}
          className="mt-2 w-full rounded-xl border p-3"
        />
      </label>

      <label className="mt-4 block text-sm font-medium">
        Pesan
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={update("message")}
          className="mt-2 w-full rounded-xl border p-3"
        />
      </label>

      <button className="button-primary mt-6" type="submit">
        Kirim pesan
      </button>

      <p className="mt-3 text-xs leading-5 text-stone-500">
        Pesan akan dikirim langsung ke Kompeni Sayur.
      </p>
    </form>
  );
}
