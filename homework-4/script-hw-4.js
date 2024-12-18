// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleArea(width, height) {
  return width * height;
}

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea(radius) {
  return Math.PI * radius ** 2;
}

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea(r, h) {
  return 2 * Math.PI * r * h;
}

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

function printArrayElements(array) {
  for (const arrayElement of array) {
    console.log(arrayElement);
  }
}

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function createParagraph(text) {
  document.write(`<p>${text}</p>`);
}

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

function renderList(text) {
  document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li.
//     Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
//     який є числовим (тут використовувати цикл) та виводить його через document.write

function createListWithItems(text, li) {
  document.write(`<ul>`);
  for (let i = 0; i < li; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write(`</ul>`);
}

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

function createListFromArray(arrayList) {
  document.write(`<ul>`);
  for (const arrayListElement of arrayList) {
    document.write(`<li>${arrayListElement}</li>`);
  }
  document.write(`</ul>`);
}

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

function displayUserInfo(objectArray) {
  for (const objectArrayElement of objectArray) {
    document.write(`<div>${objectArrayElement.id}</div>`);
    document.write(`<div>${objectArrayElement.name}</div>`);
    document.write(`<div>${objectArrayElement.age}</div>`);
  }
}

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

function findMin(array) {
  let minNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
  }
  return minNumber;
}

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення
// елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
  let result = 0;
  for (const arrElement of arr) {
    result += arrElement;
  }
  return result;
}

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах

function swap(arr, index1, index2) {
  let a = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = a;

  return arr;
}

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
  for (const element of currencyValues) {
    if (element.currency === exchangeCurrency) {
      return sumUAH / element.value;
    }
  }
  return `Немає валюти у списку`;
}
