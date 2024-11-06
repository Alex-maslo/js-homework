// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

let day = 17;

if (day >= 1 && day <= 31) {
  switch (true) {
    case day <= 10:
      console.log(`Перша декада`);
      break;
    case day <= 20:
      console.log(`Друга декада`);
      break;
    default:
      console.log(`Третя декада`);
      break;
  }
} else {
  console.log(`Невірне значення`);
}
