const products = [
  { id: 1, product: 'Laptop', price: 7200 },
  { id: 2, product: 'Headphones', price: 6000 },
  { id: 3, product: 'Mouse', price: 2000 },
  { id: 4, product: 'keyboard', price: 4200 },
  { id: 5, product: 'desktop', price: 10800 },
];
// 1. price가 높은 순으로 정렬된 List를 반환하는 함수를 작성해주세요.

const sortByPrice = products.sort((a, b) => b.price - a.price);

const over6000 = products
  .filter((product) => product.price >= 6000)
  .map((product) => product.product);
console.log(over6000);
