// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та
// вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

function createElement(tagName, className, textContent = "") {
  const element = document.createElement(tagName);
  element.classList.add(className);
  element.textContent = textContent;
  return element;
}

fetch("https://dummyjson.com/carts")
  .then((res) => res.json())
  .then((data) => {
    let { carts } = data;

    for (const cart of carts) {
      let cartBlock = createElement("div", "cart-block");
      document.getElementById("container").appendChild(cartBlock);

      let {
        id,
        products,
        total,
        discountedTotal,
        userId,
        totalProducts,
        totalQuantity,
      } = cart;

      const cartBlockTitle = createElement(
        "h3",
        "cart__title",
        `Cart #${id}, Total: ${total}, Discounted Total: ${discountedTotal}, UserId: ${userId}, Total Products: ${totalProducts}, Total Quantity: ${totalQuantity}`,
      );

      for (const productsItem of products) {
        let {
          id,
          title,
          price,
          quantity,
          total,
          discountPercentage,
          discountedTotal,
          thumbnail,
        } = productsItem;

        console.log(Object.keys(productsItem));

        const cartElements = createElement("div", "cart-elements", id);
        cartBlock.append(cartBlockTitle, cartElements);
      }
    }
  });
