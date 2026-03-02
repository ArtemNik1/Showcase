export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
  shortDescription: string;
  description: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "minimalist-lamp",
    name: "Минималистичная настольная лампа",
    price: 3590,
    imageUrl:
      "https://images.pexels.com/photos/284951/pexels-photo-284951.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDescription: "Металлическая лампа с тёплым светом для рабочего стола.",
    description:
      "Минималистичная настольная лампа с матовым металлическим корпусом и тёплым рассеянным светом. Идеально подходит для рабочего стола или прикроватной тумбочки. Регулируемый угол наклона, прочная основа и современный дизайн легко впишутся в любой интерьер.",
    category: "Освещение",
  },
  {
    id: "2",
    slug: "ceramic-mug-set",
    name: "Набор керамических кружек (2 шт.)",
    price: 1890,
    imageUrl:
      "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDescription: "Две кружки пастельных оттенков для кофе и чая.",
    description:
      "Набор из двух керамических кружек пастельных оттенков с удобной ручкой. Подходят для горячих и холодных напитков. Можно использовать в посудомоечной машине и микроволновке. Отличный подарок для любителей кофе и чая.",
    category: "Кухня",
  },
  {
    id: "3",
    slug: "linen-pillow",
    name: "Льняная декоративная подушка",
    price: 2490,
    imageUrl:
      "https://images.pexels.com/photos/20130493/pexels-photo-20130493.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDescription: "Подушка из натурального льна с мягким наполнителем.",
    description:
      "Декоративная подушка из 100% натурального льна с гипоаллергенным наполнителем. Подходит для дивана, кресла или кровати. Съёмный чехол на потайной молнии легко стирается и долго сохраняет форму и цвет.",
    category: "Домашний текстиль",
  },
  {
    id: "4",
    slug: "wall-poster",
    name: "Постер на стену \"Город\"",
    price: 1290,
    imageUrl:
      "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDescription: "Стильный постер с городским пейзажем формата A3.",
    description:
      "Стильный постер с минималистичным городским пейзажем формата A3. Плотная матовая бумага, насыщенная печать и универсальный дизайн подойдут как для дома, так и для офиса. Поставляется без рамки.",
    category: "Декор",
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number): string {
  return price.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  });
}

