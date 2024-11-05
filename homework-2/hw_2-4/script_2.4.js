// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
  { name: "Michael Jordan", username: "michaeljordan", password: "jumpman23" },
  { name: "Scottie Pippen", username: "scottiepippen", password: "pip33" },
  { name: "Dennis Rodman", username: "dennisrodman", password: "reboundking" },
  { name: "Ron Harper", username: "ronharper", password: "defense" },
  { name: "Toni Kukoc", username: "tonikukoc", password: "eurostar" },
  { name: "Luc Longley", username: "luclongley", password: "australian" },
  { name: "Bill Cartwright", username: "billcartwright", password: "bigman" },
  { name: "Steve Kerr", username: "stevekerr", password: "threepointer" },
  { name: "John Paxson", username: "johnpaxson", password: "clutch" },
  { name: "B.J. Armstrong", username: "bjarmstrong", password: "pointguard" },
];

for (let player of users) {
  console.log(player.password);
}
