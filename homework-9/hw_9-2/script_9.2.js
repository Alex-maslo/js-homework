let array = ["Main", "Products", "About us", "Contacts"];

let list = document.createElement("ul");

array.forEach((text) => {
  let listElement = document.createElement("li");
  listElement.innerText = text;
  list.appendChild(listElement);
});

document.body.appendChild(list);
