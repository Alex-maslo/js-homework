// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// Створюємо об'єкти, які описують книги
let book1 = {
  title: "1984",
  pageCount: 328,
  genre: "Dystopian",
  authors: [
    {
      name: "George Orwell",
      age: 46,
    },
  ],
};

let book2 = {
  title: "To Kill a Mockingbird",
  pageCount: 281,
  genre: "Fiction",
  authors: [
    {
      name: "Harper Lee",
      age: 89,
    },
  ],
};

let book3 = {
  title: "The Great Gatsby",
  pageCount: 180,
  genre: "Classic",
  authors: [
    {
      name: "F. Scott Fitzgerald",
      age: 44,
    },
  ],
};

console.log(book1);
console.log(book2);
console.log(book3);
