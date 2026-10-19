# Showcase

Небольшая витрина товаров на Next.js и TypeScript. На главной показаны карточки с ценой и кратким описанием; у каждого товара есть отдельная страница с подробностями.

Интерфейс адаптируется к экрану и поддерживает светлую и тёмную тему через настройки устройства. Стили написаны на Tailwind CSS.

## Запуск

Нужен Node.js 22.12+:

```bash
cd storefront
npm ci
npm run dev
```

Открой http://localhost:3000.

## Проверка и сборка

Из папки `storefront`:

```bash
npm run lint
npm run build
npm start
```

## Структура

- `storefront/src/app/page.tsx` - список товаров.
- `storefront/src/app/products/[slug]/page.tsx` - страница товара.
- `storefront/src/data/products.ts` - данные каталога и форматирование цен.
- `storefront/src/app/globals.css` - общие стили.

Данные демонстрационные, фотографии загружаются с Pexels. Корзины, оплаты и серверной базы в проекте нет.
