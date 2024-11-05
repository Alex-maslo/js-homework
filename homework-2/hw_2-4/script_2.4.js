// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
  { name: "John Doe", username: "johndoe", password: "password123" },
  { name: "Jane Smith", username: "janesmith", password: "qwerty456" },
  { name: "Michael Johnson", username: "michaelj", password: "abc123" },
  { name: "Emily Davis", username: "emilyd", password: "mypassword" },
  { name: "Daniel Brown", username: "danbrown", password: "passw0rd" },
  { name: "Sophia Wilson", username: "sophiaw", password: "letmein" },
  { name: "James Taylor", username: "jamest", password: "12345678" },
  { name: "Olivia Anderson", username: "oliviaa", password: "password1" },
  { name: "William Thomas", username: "willthomas", password: "iloveyou" },
  { name: "Isabella Martinez", username: "isabellam", password: "welcome" },
];

for (let user of users) {
  console.log(user.password);
}
