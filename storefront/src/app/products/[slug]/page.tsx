import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug, formatPrice } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-10 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {product.category}
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
              {product.name}
            </h1>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            ← Назад к витрине
          </Link>
        </header>

        <main className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="relative h-[340px] overflow-hidden rounded-3xl bg-zinc-100 shadow-sm dark:bg-zinc-900">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60">
            <div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Полное описание товара
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {product.description}
              </p>
            </div>
            <div className="mt-auto">
              <p className="text-3xl font-semibold">{formatPrice(product.price)}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

