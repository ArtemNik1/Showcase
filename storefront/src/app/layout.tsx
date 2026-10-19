import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "FORMA - каталог предметов для дома", template: "%s | FORMA" },
  description: "Демонстрационный каталог товаров: поиск, категории, карточки и подготовка заявки.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>
    <a className="skip-link" href="#main">Перейти к содержанию</a>
    <div className="demo-strip">Демонстрационный каталог · товары и цены приведены для примера</div>
    <header className="site-header container">
      <Link className="brand" href="/" aria-label="FORMA - главная">FORMA<span>предметы для дома</span></Link>
      <nav aria-label="Навигация"><Link href="/#catalog">Каталог</Link><a href="https://github.com/ArtemNik1/Showcase">О проекте ↗</a></nav>
    </header>
    {children}
    <footer className="site-footer container"><div><Link className="brand" href="/">FORMA</Link><p>Пример небольшого каталога, в котором легко найти нужное.</p></div>
      <div><p>Разработка: Артём Николаиди</p><a href="https://github.com/ArtemNik1">GitHub</a><span aria-hidden="true"> · </span><a href="mailto:artemaikido@gmail.com">Обсудить похожий сайт</a></div>
    </footer>
  </body></html>;
}
