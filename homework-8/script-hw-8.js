// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати
//     функції,які в нього були до цього моменту.

// це завдання можна не перевіряти, піддивився в рішенні

function deepClone(object) {
  if (object) {
    let func = [];
    for (const objectKey in object) {
      if (typeof object[objectKey] === "function") {
        const fc = object[objectKey].bind({});
        func.push({ fc, objectKey });
      }
    }

    const cloneObject = JSON.parse(JSON.stringify(object));
    for (const f of func) {
      cloneObject[f.objectKey] = f.fc;
    }
    console.log(cloneObject);
    return cloneObject;
  }

  throw new Error(`!`);
}

deepClone({
  id: 123,
  name: "vasya",
  greeting() {},
  foo() {},
});

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

// зроби два варіанта, хотів би короткий фідбек який варінт краще та чому

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
