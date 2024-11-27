// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та
// вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch("https://dummyjson.com/carts")
  .then((res) => res.json())
  .then(({ carts }) => {
    carts.forEach(
      ({
        products,
        id,
        total,
        discountedTotal,
        userId,
        totalProducts,
        totalQuantity,
      }) => {
        const cartBody = document.createElement("div");
        const cartId = document.createElement("div");
        cartId.innerHTML = `<h3>Cart #${id}: User Id - ${userId}, Total - ${total}, Discounted Total - ${discountedTotal}, Total Products - ${totalProducts}, Total Quantity - ${totalQuantity}</h3>`;
        cartBody.classList.add("cart-body");
        document.getElementById("container").append(cartId, cartBody);

        products.forEach(
          ({
            title,
            price,
            quantity,
            thumbnail,
            total,
            discountPercentage,
            discountedTotal,
          }) => {
            const cart = document.createElement("div");
            const cartTitle = document.createElement("h3");
            const cartPrice = document.createElement("p");
            const cartQuantity = document.createElement("p");
            const cartThumbnail = document.createElement("img");
            const cartTotal = document.createElement("p");
            const cartDiscountPercentage = document.createElement("p");
            const cartDiscountedTotal = document.createElement("p");

            cart.classList.add("cart");

            cartTitle.textContent = title;
            cartPrice.textContent = `Price: ${price}`;
            cartQuantity.textContent = `Quantity: ${quantity}`;
            cartTotal.textContent = `Total: ${total}`;
            cartDiscountPercentage.textContent = `Discount Percentage: ${discountPercentage}`;
            cartDiscountedTotal.textContent = `Discounted Total: ${discountedTotal}`;

            cartThumbnail.src = thumbnail;
            cartThumbnail.alt = title;
            cartThumbnail.height = 150;

            cart.append(
              cartTitle,
              cartThumbnail,
              cartPrice,
              cartQuantity,
              cartTotal,
              cartDiscountPercentage,
              cartDiscountedTotal,
            );
            cartBody.appendChild(cart);
          },
        );
      },
    );
  });

let a = {
  id: 1,
  products: [
    {
      id: 168,
      title: "Charger SXT RWD",
      price: 32999.99,
      quantity: 3,
      total: 98999.97,
      discountPercentage: 13.39,
      discountedTotal: 85743.87,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
    },
    {
      id: 78,
      title: "Apple MacBook Pro 14 Inch Space Grey",
      price: 1999.99,
      quantity: 2,
      total: 3999.98,
      discountPercentage: 18.52,
      discountedTotal: 3259.18,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
    },
    {
      id: 183,
      title: "Green Oval Earring",
      price: 24.99,
      quantity: 5,
      total: 124.94999999999999,
      discountPercentage: 6.28,
      discountedTotal: 117.1,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
    },
    {
      id: 100,
      title: "Apple Airpods",
      price: 129.99,
      quantity: 5,
      total: 649.95,
      discountPercentage: 12.84,
      discountedTotal: 566.5,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
    },
  ],
  total: 103774.85,
  discountedTotal: 89686.65,
  userId: 33,
  totalProducts: 4,
  totalQuantity: 15,
};
