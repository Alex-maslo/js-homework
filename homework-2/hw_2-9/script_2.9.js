// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і
//     на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let day = 5;

switch (day) {
  case 1:
    console.log("Monday: Заплановано зустріч з командою о 10:00");
    break;
  case 2:
    console.log("Tuesday: Робота над проектом та тренування о 18:00");
    break;
  case 3:
    console.log("Wednesday: Презентація результатів роботи о 15:00");
    break;
  case 4:
    console.log("Thursday: Відвідування конференції та навчання");
    break;
  case 5:
    console.log("Friday: Завершення тижневих задач та зустріч з друзями");
    break;
  case 6:
    console.log("Saturday: Вихідний день, відпочинок і хобі");
    break;
  case 7:
    console.log("Sunday: Підготовка до нового тижня, читання");
    break;
  default:
    console.log("Невірне значення. Введіть число від 1 до 7.");
    break;
}
