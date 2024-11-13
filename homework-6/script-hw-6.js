// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let stringArray = ['hello world', 'lorem ipsum', 'javascript is cool']
stringArray.forEach(array => console.log(array.length))


// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

stringArray.forEach(array => console.log(array.toUpperCase()))


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let uppercaseArray = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
uppercaseArray.forEach(array => console.log(array.toLowerCase()))


// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyString = ' dirty string   '
console.log(dirtyString.trim())


//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';

const stringToArray = (string) => string.split(' ')
console.log(stringToArray(str));

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numberArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
let valueToString = numberArray.map((value) => value.toString()
);
console.log(valueToString)


// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];

function sortNums(array, direction) {
    if (direction === "ascending") {
        return array.sort((a, b) => a - b);
    }
    if (direction === "descending") {
        return array.sort((a, b) => b - a);
    }
}

console.log(sortNums(nums, "ascending"));
console.log(sortNums(nums, "descending"));


// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sort = coursesAndDurationArray.sort(
    (a, b) => b.monthDuration - a.monthDuration);
console.log(sort);

let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log(filter)

const mappedArray = filter.map((value, index) => ({
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration,
    })
);
console.log(mappedArray)


// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//


const cardSuit = ['spade', 'diamond', 'heart', 'clubs']
const cardValue = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']

let deck = []
for (const suit of cardSuit) {
    for (const value of cardValue) {
        suit === 'diamond' || suit === 'heart' ?
            deck.push({cardSuit: suit, value: value, color: 'red'}) :
            deck.push({cardSuit: suit, value: value, color: 'black'})
    }
}
// - знайти піковий туз
const spadeAce = deck.find(card => card.value === 'ace' && card.cardSuit === 'spade');
console.log('піковий туз', spadeAce)


// - всі шістки
const allSixes = deck.filter(card => card.value === '6');
console.log('всі шістки', allSixes)


// - всі червоні карти
const redCards = deck.filter(card => card.color === 'red');
console.log('всі червоні карти', redCards)


// - всі буби
const allDiamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log('всі буби', allDiamonds)


// - всі трефи від 9 та більше
// варіант 1
const clubsNineAndAbove = deck.filter(
    (card) =>
        card.cardSuit === "clubs" &&
        card.value !== "6" &&
        card.value !== "7" &&
        card.value !== "8",
);
console.log("всі трефи від 9 та більше - варіант 1", clubsNineAndAbove);

// варіант 2

const exceptions = ["6", "7", "8"];
const clubsNineAndAboveSecond = deck.filter(
    (card) => card.cardSuit === "clubs" && !exceptions.includes(card.value),
);
console.log("всі трефи від 9 та більше - варіант 2", clubsNineAndAboveSecond);

// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker