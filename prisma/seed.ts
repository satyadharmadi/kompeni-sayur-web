import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const fresh = await prisma.category.upsert({ where: { slug: "sayur-segar" }, update: {}, create: { name: "Sayur Segar", slug: "sayur-segar" } });
  await prisma.product.upsert({ where: { slug: "selada-romaine" }, update: {}, create: { name: "Selada Romaine", slug: "selada-romaine", description: "Selada renyah, dipanen segar dari kebun.", price: 12000, stock: 40, images: ["/images/products/selada-romaine.jpeg"], categoryId: fresh.id } });
  await prisma.blog.upsert({ where: { slug: "cara-menyimpan-sayur-hidroponik" }, update: {}, create: { title: "Cara Menyimpan Sayur Hidroponik", slug: "cara-menyimpan-sayur-hidroponik", excerpt: "Panduan menjaga sayur tetap segar.", content: "Simpan sayur dalam chiller dan cuci saat akan digunakan.", publishedAt: new Date() } });
}
main().finally(() => prisma.$disconnect());
