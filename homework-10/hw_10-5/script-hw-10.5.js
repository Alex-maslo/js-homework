let date = new Date().toLocaleString();

let sessionsList = JSON.parse(localStorage.getItem("sessionsList")) || [];
sessionsList.push(date);
localStorage.setItem("sessionsList", JSON.stringify(sessionsList));

let listElement = document.createElement("ul");
sessionsList.forEach((session) => {
  let listItem = document.createElement("li");
  listItem.textContent = session;
  listElement.appendChild(listItem);
});

document.body.appendChild(listElement);
console.log(sessionsList);
