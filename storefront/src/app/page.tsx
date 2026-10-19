import Image from "next/image";
import { Catalog } from "@/components/Catalog";
import { getAllProducts } from "@/data/products";

export default function Home() {
  const products = getAllProducts();
  return <main id="main" className="container">
    <section className="catalog-hero">
      <div><p className="eyebrow">Небольшие детали, большое настроение</p><h1>Вещи, с которыми<br/><em>уютнее дома.</em></h1><p className="hero-text">Свет для спокойного вечера, любимая кружка и натуральные фактуры. Собрали простые предметы на каждый день.</p><a className="primary-button" href="#catalog">Найти свой предмет <span aria-hidden="true">↗</span></a></div>
      <div className="hero-visual"><Image src={products[0].imageUrl} alt="Минималистичная настольная лампа" width={800} height={600} priority/><span className="hero-caption">Тёплый свет. Спокойные формы.</span></div>
    </section>
    <Catalog products={products}/>
    <section className="catalog-note"><h2>Сначала познакомьтесь поближе.</h2><p>В карточке каждого товара есть описание и цена. Кнопка заявки подготовит письмо с выбранным предметом - без регистрации.</p></section>
  </main>;
}
