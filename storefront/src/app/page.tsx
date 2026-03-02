import Link from "next/link";
import { getAllProducts, formatPrice } from "@/data/products";

export default function Home() {
  const products = getAllProducts();

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-10 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Витрина интернет-магазина
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Выберите товар, чтобы посмотреть полное описание.
          </p>
        </header>

        <main>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="relative h-56 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    {product.category}
                  </span>
                  <h2 className="line-clamp-2 text-base font-semibold">
                    {product.name}
                  </h2>
                  <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {product.shortDescription}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <span className="text-lg font-semibold">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-xs font-medium text-emerald-600 group-hover:text-emerald-500 dark:text-emerald-400">
                      Смотреть подробнее →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

