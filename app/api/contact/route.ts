import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, whatsapp, email, message } = await request.json();

    if (!name || !whatsapp || !email || !message) {
      return Response.json(
        { error: "Semua kolom wajib diisi." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      // Ganti setelah domain Anda terverifikasi di Resend
      from: "Kompeni Sayur <onboarding@resend.dev>",
      to: ["kompenisayur@gmail.com"],
      replyTo: email,
      subject: `Pesan website dari ${name}`,
      text: `Nama: ${name}
WhatsApp: ${whatsapp}
Email: ${email}

Pesan:
${message}`,
    });

    if (error) {
      return Response.json(
        { error: error.message || "Email gagal dikirim." },
        { status: 500 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Gagal mengirim email kontak:", error);
    return Response.json(
      { error: "Server belum dapat mengirim email. Periksa API key Resend." },
      { status: 500 },
    );
  }
}
