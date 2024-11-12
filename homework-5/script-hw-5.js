// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const rectangleArea = (width, height) => width * height;
console.log(rectangleArea(15, 4));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

const circleArea = (radius) => Math.round(Math.PI * radius ** 2);
console.log(circleArea(5));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cylinderArea = (radius, height) =>
  Math.round(2 * Math.PI * radius * height);
console.log(cylinderArea(15, 2));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

const printArrayElements = (array) => {
  for (const arrayElement of array) {
    console.log(arrayElement);
  }
};

printArrayElements([
  42,
  "Hello",
  true,
  null,
  { name: "John" },
  [1, 2, 3],
  3.14,
]);

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const createParagraph = (text) => document.write(`<p>${text}</p>`);
createParagraph("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const renderList = (text) =>
  document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
renderList("hello world!");

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createListWithItems = (text, li) => {
  document.write(`<ul>`);
  for (let i = 0; i < li; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write(`</ul>`);
};

createListWithItems("okten", 8);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список

const createListFromArray = (arrayList) => {
  document.write("<ul>");
  for (const arrayListElement of arrayList) {
    document.write(`<li>${arrayListElement}</li>`);
  }
  document.write("</ul>");
};

createListFromArray([42, "Hello", true, "World", 3.14]);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

const displayUserInfo = (objectArray) => {
  for (const object of objectArray) {
    document.write(
      `<div>${object.id}</div> <div>${object.name}</div> <div>${object.age}</div>`,
    );
  }
};

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 4, name: "David", age: 28 },
  { id: 5, name: "Eva", age: 22 },
];

displayUserInfo(users);

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

const findMin = (array) => {
  let minNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
  }
  return minNumber;
};

const arrayNumbers = [45, -67, 12, -89, 34, -56, 23, -78, 90, -11];
console.log(findMin(arrayNumbers));

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = (arr) => {
  let result = 0;
  for (const arrElement of arr) {
    result += arrElement;
  }
  return result;
};

console.log(sum(arrayNumbers));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) => {
  let a = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = a;

  return arr;
};

console.log(swap([11, 22, 33, 44], 0, 1));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
  for (const element of currencyValues) {
    if (element.currency === exchangeCurrency) {
      return sumUAH / element.value;
    }
  }
  return `Немає валюти у списку`;
};

console.log(
  exchange(
    10000,
    [
      { currency: "USD", value: 40 },
      { currency: "EUR", value: 42 },
    ],
    "USD",
  ),
);
