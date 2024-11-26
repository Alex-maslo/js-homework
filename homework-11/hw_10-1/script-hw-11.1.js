// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та
// вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch("https://dummyjson.com/carts")
  .then((res) => res.json())
  .then(({ carts }) => {
    for (let cart of carts) {
      console.log(cart);
    }
  });
