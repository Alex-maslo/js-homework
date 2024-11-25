function addToLocalStorage(arrayName, objToAdd) {
  let array = JSON.parse(localStorage.getItem(arrayName)) || [];
  array.push(objToAdd);
  localStorage.setItem(arrayName, JSON.stringify(array));
}

let user = {
  id: 1,
  name: "Іван Іванов",
  age: 25,
  email: "ivan.ivanov@example.com",
  role: "розробник",
};
let user2 = {
  id: 2,
  name: "Марія Петрова",
  age: 30,
  email: "maria.petrova@example.com",
  role: "дизайнер",
};

addToLocalStorage("users", user);
addToLocalStorage("users", user2);
