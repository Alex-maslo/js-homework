// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати
//     функції,які в нього були до цього моменту.

function deepCopy(object) {
  if (object === undefined || object === null || Number.isNaN(object)) {
    return object;
  }

  if (typeof object !== "object") {
    return object;
  }

  const copy = Array.isArray(object) ? [] : {};

  for (const key in object) {
    if (Object.hasOwn(object, key)) {
      copy[key] = deepCopy(object[key]);
    }
  }

  return copy;
}

let origin = { name: "vasya", age: 30 };
let copy = deepCopy(origin);

// console.log(origin === copy);
// console.log(origin.name === copy.name);
// console.log(origin);
// console.log(copy);

// #iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];

// Варіант 1
let mappedArray = coursesAndDurationArray.map(
  ({ title, monthDuration }, index) => ({
    id: index + 1,
    title,
    monthDuration,
  }),
);

console.log(mappedArray);

// Варіант 2
let mappedArray2 = coursesAndDurationArray.map((course, index) => ({
  id: index + 1,
  ...course,
}));

console.log(mappedArray2);
