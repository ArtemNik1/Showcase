import Link from "next/link";
export default function NotFound() {
  return <main id="main" className="container empty-page"><p className="eyebrow">404</p><h1>Такого предмета здесь нет</h1><p>Возможно, ссылка устарела. Вернитесь к подборке и выберите другой товар.</p><Link className="primary-button" href="/">Открыть каталог</Link></main>;
}
