"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Check, ChevronDown, Leaf, ShieldCheck, Sprout, Truck, Instagram } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { faqs, products } from "@/lib/data";
import { useText } from "@/components/language-provider";

export default function Home() {
  const t = useText();
  const [today, setToday] = useState("");

  useEffect(() => {
    const updateDate = () =>
      setToday(
        new Intl.DateTimeFormat("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
          timeZone: "Asia/Jakarta",
        }).format(new Date())
      );

    updateDate();

    const timer = window.setInterval(updateDate, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="shell py-6 sm:py-9">
          <div className="relative isolate min-h-[560px] overflow-hidden rounded-[2rem] bg-[#123D26] px-7 py-12 text-white sm:min-h-[620px] sm:px-14 sm:py-20">
            <Image
              src="/images/farm/hero.jpg"
              alt="Kompeni Sayur hydroponic farm"
              fill
              priority
              className="-z-20 object-cover opacity-55"
              sizes="100vw"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#103e27] via-[#103e27]/85 to-[#103e27]/15" />

            <div className="max-w-xl">
              <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-mist">
                <Leaf size={15} /> Hydroponic farm • Tangerang
              </p>

              <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
                {t(
                  "Segar untuk hari-hari yang lebih baik.",
                  "Fresh for better days."
                )}
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-stone-100 sm:text-lg">
                {t(
                  "Sayuran hidroponik premium yang tumbuh bersih, dipanen dekat dengan waktunya, dan dikirim penuh kesegaran.",
                  "Premium hydroponic vegetables grown cleanly, harvested close to delivery, and brought to you at their freshest."
                )}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="button-primary bg-white text-forest hover:bg-mist"
                >
                  {t("Belanja sekarang", "Shop now")} <ArrowRight size={17} />
                </Link>
                <Link
                  href="/about"
                  className="button-secondary border-white/30 bg-white/10 text-white hover:border-white"
                >
                  {t("Cerita kami", "Our story")}
                </Link>
              </div>
            </div>

            <div className="absolute bottom-7 right-7 hidden max-w-[220px] rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur md:block">
              <p className="text-3xl font-semibold">100%</p>
              <p className="mt-1 text-xs leading-5 text-stone-200">
                {t(
                  "dibudidayakan dengan perhatian pada kualitas dan kesegaran.",
                  "grown with careful attention to quality and freshness."
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="shell pb-10">
          <div className="rounded-3xl border border-green-100 bg-[#EDF6EE] p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="eyebrow">
                  {t("Ketersediaan hari ini", "Today's availability")}
                </p>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {today
                    ? `${t("Update", "Updated")} ${today}`
                    : t(
                        "Update stok sayur hari ini",
                        "Today's vegetable stock update"
                      )}
                </h2>
                <p className="mt-2 text-sm text-stone-600">
                  {t(
                    "Stok dapat berubah. Hubungi kami untuk memastikan ketersediaan dan pemesanan.",
                    "Stock may change. Contact us to confirm availability and place an order."
                  )}
                </p>
              </div>

              <a
                href="https://wa.me/6285716716181"
                className="button-primary"
              >
                WhatsApp <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-6 max-w-xl divide-y divide-green-100 rounded-2xl bg-white px-5">
              {products
                .filter((product) => product.stock !== null)
                .map((product) => (
                  <div
                    className="flex items-center justify-between py-4"
                    key={product.name}
                  >
                    <span className="font-medium text-stone-800">
                      {t(product.name, product.nameEn)}
                    </span>
                    <b className="text-forest">
                      {product.stock} {t("pack", "packs")}
                    </b>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section className="shell grid gap-8 py-20 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow">{t("Cara kami bertumbuh", "How we grow")}</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {t(
                "Lebih dekat ke alam. Lebih baik untuk meja makan.",
                "Closer to nature. Better for your dinner table."
              )}
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-stone-600">
            {t(
              "Kami memadukan keterlitian pertanian modern dengan ritme alam. Setiap daun dirasat dalam lingkungan terkontrol, agar Anda bisa menikmati kualitas yang konsisten setiap hari.",
              "We blend the precision of modern farming with nature's rhythm. Every leaf is grown in a controlled environment so you can enjoy consistent quality every day."
            )}
          </p>
        </section>

        <section className="shell grid gap-4 pb-20 sm:grid-cols-2 lg:grid-cols-4">
          <Feature
            icon={<Sprout />}
            title={t("Dipanen segar", "Freshly harvested")}
            text={t(
              "Dari kebun ke dapur dengan waktu sesingkat mungkin.",
              "From our farm to your kitchen in the shortest time possible."
            )}
          />
          <Feature
            icon={<ShieldCheck />}
            title={t("Tumbuh bersih", "Grown clean")}
            text={t(
              "Budidaya terkontrol tanpa tanah untuk hasil lebih higiensi.",
              "Soilless, controlled cultivation for more hygienic produce."
            )}
          />
          <Feature
            icon={<Leaf />}
            title={t("Bebas Pestisida", "Pesticide-free")}
            text={t(
              "Dirawat tanpa pestisida untuk pilihan yang lebih baik bagi keluarga.",
              "Grown without pesticides for a better choice for your family."
            )}
          />
          <Feature
            icon={<Truck />}
            title={t("Siap diantar", "Ready for delivery")}
            text={t(
              "Pengiriman aman untuk kebutuhan rumah dan bisnis.",
              "Safe delivery for homes and businesses."
            )}
          />
        </section>

        <section className="bg-[#EDF6EE] py-20">
          <div className="shell">
            <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="eyebrow">
                  {t("Pilihan segar minggu ini", "This week's fresh picks")}
                </p>
                <h2 className="text-3xl font-semibold tracking-tight">
                  {t("Favorit dari kebun kami", "Favorite from our garden")}
                </h2>
              </div>
              <Link href="/products" className="button-secondary">
                {t("Lihat semua", "View all")} <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
          </div>
        </section>

        <section className="shell grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/farm/farm.jpg"
              alt="Aktivitas kebun Kompeni Sayur"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="eyebrow">{t("Untuk semua yang peduli", "For all who care")}</p>

            <h2 className="text-4xl font-semibold tracking-tight">
              {t(
                "Dari kebun kami, untuk hidup sehat Anda.",
                "From our farm, for your healthy life."
              )}
            </h2>

            <p className="mt-5 leading-7 text-stone-600">
              {t(
                "Baik untuk masakan keluarga, menu restoran, maupun eksperimen urban farming di rumah. Kompeni Sayur hadir sebagai partner kesegaran Anda.",
                "Good for family cooking, restaurant menus, or home urban farming experiments. Kompeni Sayur is here as your freshness partner."
              )}
            </p>

            <ul className="mt-7 grid gap-3 text-sm font-medium">
              {[
                t("Kualitas panen yang konsisten", "Consistent harvest quality"),
                t("Melayani pesanan rutin bisnis", "Serving regular business orders"),
                t(
                  "Perlengkapan hidroponik terpilih",
                  "Selected hydroponic equipment"
                ),
              ].map((x) => (
                <li
                  className="flex items-center gap-3"
                  key={x}
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-mist text-forest">
                    <Check size={14} />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="shell pb-20">
          <div className="rounded-[2rem] bg-ink px-7 py-12 text-white sm:px-14 sm:py-16">
            <p className="eyebrow text-mist">
              {t("Komunitas kami", "Our community")}
            </p>
            <blockquote className="max-w-3xl text-2xl font-medium leading-relaxed sm:text-4xl">
              "
              {t(
                "Sayurnya selalu segar dan kualitasnya stabil. Sangat membantu kebutuhan dapur kami setiap minggu.",
                "The vegetables are always fresh and the quality is stable. Very helpful for our kitchen needs every week."
              )}
              "
            </blockquote>
            <p className="mt-7 text-sm text-stone-400">
              — {t("Rina, pemilik kafe di Tangerang", "Rina, cafe owner in Tangerang")}
            </p>
          </div>
        </section>

        <section className="shell py-16">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="eyebrow">
                {t("Pertanyaan umum", "Frequently asked questions")}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                {t("Yang ingin Anda ketahui", "What you want to know")}
              </h2>
            </div>

            <div className="mt-8 divide-y divide-stone-200">
              {faqs.map(([q, a]) => (
                <details className="group py-5" key={q}>
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    {q}
                    <ChevronDown
                      size={18}
                      className="transition group-open:rotate-180"
                    />
                  </summary>
                  <p className="max-w-2xl pt-3 text-sm leading-6 text-stone-600">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="shell pb-20">
          <div className="rounded-[2rem] bg-forest px-7 py-12 text-white sm:px-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-mist">
                {t("Kabar dari kebun", "Farm news")}
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                {t("Dapatkan cerita dan promo segera.", "Get stories and promos now.")}
              </h2>

              <p className="mt-3 text-sm text-green-100">
                {t(
                  "Daftarkan email Anda. Tidak ada spam, hanya kabar yang bermanfaat.",
                  "Sign up your email. No spam, just useful updates."
                )}
              </p>

              <form className="mt-7 flex max-w-md gap-2">
                <input
                  aria-label="Email"
                  type="email"
                  placeholder="email@anda.com"
                  className="min-w-0 flex-1 rounded-full border-0 px-5 py-3 text-sm text-ink outline-none"
                />
                <button className="button bg-ink text-white">
                  {t("Daftar", "Sign up")}
                </button>
              </form>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://instagram.com/kompeni.sayur"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 p-3 hover:bg-white/20 transition"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/6285716716181"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 p-3 hover:bg-white/20 transition"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.935 1.303c-1.508.806-2.83 1.97-3.857 3.355-1.026 1.386-1.656 2.922-1.856 4.38-.201 1.458 0 2.917.584 4.267.584 1.35 1.454 2.56 2.575 3.526 1.12.965 2.483 1.686 3.9 2.1 1.417.414 2.918.5 4.35.254 1.432-.247 2.788-.927 3.926-1.926 1.137-1 1.986-2.322 2.448-3.79.46-1.467.504-3.03.128-4.513-.377-1.483-1.155-2.84-2.228-3.94-1.073-1.1-2.422-1.93-3.894-2.368-1.472-.438-3.054-.438-4.506 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-3xl border border-stone-200 bg-white p-6">
      <div className="mb-6 grid h-11 w-11 place-items-center rounded-2xl bg-mist text-forest">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>
    </article>
  );
}
