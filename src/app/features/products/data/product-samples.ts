import { Product } from '../pages/products-layout/products-layout.component';

const products: Product[] = [];

for (let i = 0; i < 11; ++i) {
  products.push({
    id: `product-${i}`,
    title: [
      'Retro-inspired sock trainers in mixed materials',
      'Italian-crafted trainers in burnished leather',
      'Sock trainers with knitted uppers',
      'Italian-made cap-toe shoes in calf leather',
      'Low-profile trainers with memory-foam insole',
      'Shoes in patent leather with grosgrain piping',
      'Running-inspired trainers in mixed materials with exclusive logo',
      'Italian-made trainers with organic-cotton-blend uppers',
      'Italian-made driver moccasins in suede with cord trim',
      'Sock trainers with knitted uppers',
      'Derby shoes in smooth leather with rubber-injected sole',
    ][i],
    price: Math.round((Math.random() * 200 + 50) * 100) / 100,
    imgUrl: [
      'assets/products/product1.jpeg',
      'assets/products/product2.jpeg',
      'assets/products/product3.jpeg',
      'assets/products/product4.jpeg',
      'assets/products/product5.jpeg',
      'assets/products/product6.jpeg',
      'assets/products/product7.jpeg',
      'assets/products/product8.jpeg',
      'assets/products/product9.jpeg',
      'assets/products/product10.jpeg',
      'assets/products/product11.jpeg',
    ][i],
    like: false,
    additionalLabel: ['Made in Europe', 'Made in China', 'Recycled', null][
      Math.trunc(Math.random() * 4)
    ],
    colors: [
      `rgb(${Math.trunc(Math.random() * 256)}, ${Math.trunc(
        Math.random() * 256
      )}, ${Math.trunc(Math.random() * 256)})`,
      `rgb(${Math.trunc(Math.random() * 256)}, ${Math.trunc(
        Math.random() * 256
      )}, ${Math.trunc(Math.random() * 256)})`,
      `rgb(${Math.trunc(Math.random() * 256)}, ${Math.trunc(
        Math.random() * 256
      )}, ${Math.trunc(Math.random() * 256)})`,
      `rgb(${Math.trunc(Math.random() * 256)}, ${Math.trunc(
        Math.random() * 256
      )}, ${Math.trunc(Math.random() * 256)})`,
      `rgb(${Math.trunc(Math.random() * 256)}, ${Math.trunc(
        Math.random() * 256
      )}, ${Math.trunc(Math.random() * 256)})`,
    ].slice(0, Math.trunc(Math.random() * 5) + 1),
    selectedColor: null,
  });

  products[products.length - 1].selectedColor =
    products[products.length - 1].colors[0];
}

export { products };
