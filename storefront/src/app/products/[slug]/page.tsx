import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OrderRequest } from "@/components/OrderRequest";
import { getAllProducts, getProductBySlug, formatPrice } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return getAllProducts().map((product) => ({ slug: product.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug((await params).slug);
  return product ? { title: product.name, description: product.shortDescription } : { title: "Товар не найден" };
}

export default async function ProductPage({ params }: Props) {
  const product = getProductBySlug((await params).slug);
  if (!product) notFound();
  return <main id="main" className="container product-page">
    <nav className="breadcrumbs" aria-label="Хлебные крошки"><Link href="/">Каталог</Link><span aria-hidden="true">/</span><span aria-current="page">{product.name}</span></nav>
    <div className="product-detail"><div className="detail-image"><Image src={product.imageUrl} alt={product.name} width={800} height={600} priority/></div>
      <div className="detail-copy"><p className="eyebrow">{product.category}</p><h1>{product.name}</h1><p className="detail-description">{product.description}</p><p className="detail-price">{formatPrice(product.price)}</p><OrderRequest name={product.name} price={product.price}/><p className="detail-footnote">Демонстрационная цена. Изображение - иллюстрация товара.</p></div></div>
    <section className="catalog-note"><h2>Простая заявка, без лишних шагов</h2><p>Выбранный товар и цена автоматически попадут в письмо. Вам останется добавить контакт для ответа и подтвердить отправку.</p><Link className="text-link" href="/#catalog">Вернуться к подборке ↗</Link></section>
  </main>;
}
