// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}

let users = [];
users.push(
  new User(1, "Alice", "Smith", "alice.smith@example.com", "555-123-4567"),
  new User(2, "Bob", "Johnson", "bob.johnson@example.com", "555-234-5678"),
  new User(
    3,
    "Charlie",
    "Williams",
    "charlie.williams@example.com",
    "555-345-6789",
  ),
  new User(4, "David", "Brown", "david.brown@example.com", "555-456-7890"),
  new User(5, "Eva", "Jones", "eva.jones@example.com", "555-567-8901"),
  new User(6, "Frank", "Miller", "frank.miller@example.com", "555-678-9012"),
  new User(7, "Grace", "Davis", "grace.davis@example.com", "555-789-0123"),
  new User(8, "Henry", "Garcia", "henry.garcia@example.com", "555-890-1234"),
  new User(9, "Ivy", "Martinez", "ivy.martinez@example.com", "555-901-2345"),
  new User(
    10,
    "Jack",
    "Rodriguez",
    "jack.rodriguez@example.com",
    "555-012-3456",
  ),
);

console.log("Масив users", users);

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filter = users.filter((value) => value.id % 2 === 0);
console.log("Об'єкти з парними id", filter);

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sort = users.sort((a, b) => a.id - b.id);
console.log("Об'єкти по id. по зростанню", sort);

// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
  constructor(id, name, surname, email, phone, order = []) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
  }
}

let clients = [];

clients.push(
  new Client(
    11,
    "Sarah",
    "Wilson",
    "sarah.wilson@example.com",
    "555-222-3333",
    ["Desk"],
  ),
  new Client(12, "John", "Taylor", "john.taylor@example.com", "555-333-4444", [
    "Laptop",
    "Mouse",
  ]),
  new Client(13, "Emma", "Davis", "emma.davis@example.com", "555-444-5555", [
    "Phone",
  ]),
  new Client(
    14,
    "Michael",
    "Miller",
    "michael.miller@example.com",
    "555-555-6666",
    ["Tablet", "Keyboard"],
  ),
  new Client(
    15,
    "Olivia",
    "Martinez",
    "olivia.martinez@example.com",
    "555-666-7777",
    ["Monitor"],
  ),
  new Client(
    16,
    "Daniel",
    "Brown",
    "daniel.brown@example.com",
    "555-777-8888",
    ["Speaker", "Charger"],
  ),
  new Client(
    17,
    "Sophia",
    "Garcia",
    "sophia.garcia@example.com",
    "555-888-9999",
    ["Printer", "Headphones"],
  ),
  new Client(
    18,
    "James",
    "Rodriguez",
    "james.rodriguez@example.com",
    "555-999-0000",
    ["Headphones", "Laptop", "Charger"],
  ),
  new Client(
    19,
    "Ava",
    "Hernandez",
    "ava.hernandez@example.com",
    "555-111-2222",
    ["Keyboard", "Desk"],
  ),
  new Client(20, "Liam", "Lopez", "liam.lopez@example.com", "555-222-3334", [
    "Charger",
    "Monitor",
    "Mouse",
  ]),
);

console.log("Масив clients", clients);

// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log(clients[0].order.length);
const sort1 = clients.sort((a, b) => a.order.length - b.order.length);
console.log("Відсортовано по кількості товарів", sort1);

// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.engineVolume = engineVolume;

  this.drive = function () {
    return `їдемо зі швидкістю ${maxSpeed} на годину`;
  };

  this.info = function () {
    return `Модель - ${this.model}, Виробник - ${this.manufacturer}, Рік випуску - ${this.year}, Максимальна швидкість - ${this.maxSpeed}, Об'єм двигуна - ${this.engineVolume}`;
  };

  this.increaseMaxSpeed = function (newSpeed) {
    return (this.maxSpeed += newSpeed);
  };
  this.changeYear = function (newValue) {};
  this.addDriver = function (driver) {};
}

let carTesla = new Car("Tesla Model S", "Tesla", 2020, 250, 2.0);
console.log(`drive(): ${carTesla.drive()}`);
console.log(`info(): ${carTesla.info()}`);
console.log(`increaseMaxSpeed (newSpeed): ${carTesla.increaseMaxSpeed(20)}`);
