"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/data/products";

export function Catalog({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Все предметы");
  const [sort, setSort] = useState("default");
  const categories = ["Все предметы", ...new Set(products.map((product) => product.category))];
  const visible = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("ru");
    const result = products.filter((product) => (category === "Все предметы" || category === product.category)
      && `${product.name} ${product.shortDescription} ${product.category}`.toLocaleLowerCase("ru").includes(needle));
    if (sort !== "default") result.sort((a, b) => sort === "price-asc" ? a.price - b.price : b.price - a.price);
    return result;
  }, [products, query, category, sort]);

  return <section id="catalog" className="catalog-section" aria-labelledby="catalog-title">
    <div className="section-heading"><div><p className="eyebrow">Наша подборка</p><h2 id="catalog-title">Найдите своё</h2></div><p role="status" aria-live="polite">Найдено товаров: {visible.length}</p></div>
    <div className="catalog-controls"><label className="search-label"><span className="sr-only">Поиск товаров</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Лампа, кружка, текстиль…"/></label>
      <label className="sort-label"><span>Сортировать</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="default">По умолчанию</option><option value="price-asc">Сначала дешевле</option><option value="price-desc">Сначала дороже</option></select></label></div>
    <div className="category-list" aria-label="Категории товаров">{categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
    {visible.length ? <div className="product-grid">{visible.map((product) => <Link className="product-card" key={product.id} href={`/products/${product.slug}`}>
      <div className="product-image"><Image src={product.imageUrl} alt={product.name} width={800} height={600} /></div>
      <div className="product-copy"><span className="eyebrow">{product.category}</span><h3>{product.name}</h3><p>{product.shortDescription}</p><div className="product-bottom"><strong>{formatPrice(product.price)}</strong><span aria-hidden="true">Подробнее ↗</span></div></div>
    </Link>)}</div> : <div className="empty-state"><h3>Пока ничего не нашлось</h3><p>Попробуйте другое название или сбросьте фильтры.</p><button className="secondary-button" type="button" onClick={() => { setQuery(""); setCategory("Все предметы"); }}>Сбросить фильтры</button></div>}
  </section>;
}
