// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 29;

if (time >= 0 && time <= 59) {
  switch (true) {
    case time < 15:
      console.log(`Перша чверть`);
      break;
    case time < 30:
      console.log(`Друга чверть`);
      break;
    case time < 45:
      console.log(`Третя чверть`);
      break;
    case time < 59:
      console.log(`Четверта чверть`);
      break;
  }
} else {
  console.log(`Невірне значення`);
}
