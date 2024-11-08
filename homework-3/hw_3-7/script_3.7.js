// #4WrHwFTEop0
// є масив

// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
  { name: "vasya", age: 31, status: false },
  { name: "petya", age: 30, status: true },
  { name: "kolya", age: 29, status: true },
  { name: "olya", age: 28, status: false },
  { name: "max", age: 30, status: true },
  { name: "anya", age: 31, status: false },
  { name: "oleg", age: 28, status: false },
  { name: "andrey", age: 29, status: true },
  { name: "masha", age: 30, status: true },
  { name: "olya", age: 31, status: false },
  { name: "max", age: 31, status: true },
];

document.write(`<div>`);
document.write(`<h3>користувачі зі статусом true</h3>`);
document.write(`<ul>`);
for (const user of users) {
  if (user["status"] === true) {
    document.write(`<li>${user.name} - ${user.status}</li>`);
    console.log(user);
  }
}
document.write(`</ul>`);
document.write(`</div>`);

document.write(`<div>`);
document.write(`<h3>користувачі зі статусом false</h3>`);
document.write(`<ul>`);
for (const user of users) {
  if (user["status"] === false) {
    document.write(`<li>${user.name} - ${user.status}</li>`);
    console.log(user);
  }
}
document.write(`</ul>`);
document.write(`</div>`);

document.write(`<div>`);
document.write(`<h3>користувачі, які старші за 30 років</h3>`);
document.write(`<ul>`);
for (const user of users) {
  if (user["age"] > 30) {
    document.write(`<li>${user.name} - ${user.age}</li>`);
    console.log(user);
  }
}
document.write(`</ul>`);
document.write(`</div>`);
