import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="mx-auto w-full max-w-xl rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="text-2xl font-semibold">Страница не найдена</h1>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          Такой страницы нет. Вернитесь на витрину.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-zinc-50 transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}
